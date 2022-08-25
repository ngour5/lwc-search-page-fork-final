import {LightningElement, api} from "lwc";

export default class EntitySearchResultsList extends LightningElement {
    _entity;

    @api
    set entity(val){
        this.name = val.objectApiName;
        this.label = val.labelPlural;
        this.fields = this.processFields(val.displayFields);
        this.results = this.transformSearchResults(val.searchResults);
        this.pageInfo = val.pageInfo;
    }

    get entity(){
        return this._entity;
    }

    name;
    label;

    fields;
    pageInfo;

    results = [];

    defaultSortDirection = "asc";
    sortDirection = "asc";
    sortedBy;

    /**
     * This code must be inside the component adapter wrapping the data table
     */
    transformSearchResults(searchResults){
        const copyData = [];

        for (let i = 0; i < searchResults.length; i++) {
            const result = searchResults[i];

            const fields = result.record.fields;
            const highligths = result.highlightInfo.fields;

            const outData =
            Object.fromEntries(
                Object.entries(fields)
                .map(e => {
                    let key = e[0]; // fieldName
                    const originalValue =  e[1].value;
                    let val = originalValue;

                    if(highligths[key]){
                        val = highligths[key];
                    }

                    if(e[1].displayValue){
                        val = e[1].displayValue;
                    }

                    // TODO if value is an embedded object flat the key
                    if(originalValue instanceof Object){
                        key = key.replaceAll("\.", "-");
                    }

                    return [key, val]
                })
            );


            copyData.push(outData);
        }

        return copyData;
    }

    processFields(fields){
        const copyData = [];

        for (let i = 0; i < fields.length; i++) {

            let copyField = JSON.parse(JSON.stringify(fields[i]));
            copyField.fieldName = copyField.fieldApiName;
            
            // TODO flat the embedded field names
            if(copyField.fieldName.includes(".")){
                copyField.fieldName = copyField.fieldName.split(".")[0];
            }

            copyData.push(copyField);
        }

        return copyData;
    }



    handleLoadMore(evt) {
        // TODO send offset and page size
        this.dispatchEvent(new CustomEvent('loadmore', {detail: {name: "juan"}}));
    }

    handleSort(evt){
        this.dispatchEvent(new CustomEvent('sort', {detail: {name: "juan"}}));
    }
}