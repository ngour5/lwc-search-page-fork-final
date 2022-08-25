import {LightningElement} from "lwc";
import {askCall, entityScope} from "./mockServer";

export default class SearchPage extends LightningElement {
    query = "";
    loadingResults = false;
    buckets = [];

    objectApiNames = [];

    // used for scoped queries
    selectedEntity;
    
    offset = 0;
    pageSize = 5;

    // Buffer of loaded entities regarding navigation of possible matching entities
    allEntitiesCopy = [];
    isTopResults = true;

    showNavItems = false;


    handleSelect(evt) {
        let selectedEntity = evt.detail.name;
        console.log(selectedEntity);
        if (selectedEntity === "top_results") {
            this.displayTopResults();
        } else {
            this.selectedEntity = selectedEntity;
            this.offset = 0;
            this.pageSize = 1;
            this.buckets = [];
            this.isTopResults = false;
            this.doQuery();
        }
    }

    displayTopResults() {
        this.selectedEntity = undefined;
        this.isTopResults = true;
        this.doQuery();
    }

    handleKeyUp(evt) {
        const isEnterKey = evt.keyCode === 13; // Enter code
        if (isEnterKey) {
            this.doQuery();
        }
    }

    updateSearchTerm(evt) {
        this.query = evt.target.value;
    }

    doQuery() {
        this.loadingResults = true;
        askCall({
            query: this.query,
            sobject: this.selectedEntity,
            offset: this.offset,
            pageSize: this.pageSize
        })
            .then((data) => {
                this.inflateResults(data, false);
                this.loadingResults = false;
                this.showNavItems = true;
            })
            .catch((error) => {
                console.error(error);
                this.loadingResults = false;
            });
    }

    loadMoreData(evt){
        // TODO detect once the all records were fetched
        console.log("fetching records: " + JSON.stringify(evt));
    }

    /**
     * TODO call entity scope service
     */
    fetchMoreEntities() {
        this.loadingResults = true;
        this.offset = this.offset + this.pageSize; // increment offset
        entityScope({
            query: this.query,
            offset: this.offset,
            pageSize: this.pageSize
        })
            .then((data) => {
                this.inflateResults(data, true);
                this.loadingResults = false;
            })
            .catch((error) => {
                console.error(error);
                this.loadingResults = false;
            });
    }

    inflateResults(parsedData, append) {
        const answer = this.getObjectsToDisplay(parsedData);
        const entities = answer.searchObjects;
        if (entities.length > 0) {
            const cmpBuckets = [];
            for (let i = 0; i < entities.length; i++) {
                const entity = entities[i];
                
                const data = entity.searchResults;
                
                
                 // also the adapter is needed and the numOfMatchingRecords based on the pageInfo
                entity.count = data.length;

                if(data.length > 0){
                    cmpBuckets.push(entity);
                }
            }
            if (append) {
                this.buckets.push.apply(cmpBuckets);
            } else {
                this.buckets = cmpBuckets;
            }
        }

       
        // TODO re-implement this using the scope service passing the q parameter
        this.allEntitiesCopy = entities;

        if (append) {
            this.objectApiNames.push.apply(entities);
        } else {
            this.objectApiNames = entities;
        }
    }

    getObjectsToDisplay(parsedData){
        if(parsedData.keywordBasedAnswer){
            return parsedData.keywordBasedAnswer;
        }

        if(parsedData.naturalLanguageAnswer){
            return parsedData.naturalLanguageAnswer;
        }

        if(parsedData.qnaAnswer){
            return parsedData.qnaAnswer;
        }

        if(parsedData.recommendedResult){
            return parsedData.recommendedResult;
        }
    }

    sortResults(evt){
        console.log("sorting by" + evt);
    }

    get hasMoreEntities() {
        return this.offset + this.objectApiNames.length < this.allEntitiesCopy.length;
    }

    get isScopedSearch() {
        return !this.isTopResults;
    }
    
}