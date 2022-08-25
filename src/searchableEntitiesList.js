import {LightningElement, api} from "lwc";

export default class SearchableEntitiesList extends LightningElement {

    @api
    entities=[
        {
            objectApiName:"juan", 
            labelPlural:"Juanka",
            pageInfo:{
                offset:10,
                pageSize:5,
                hasNextPage:true,
                hasPreviuosPage:true,
                minMatchingRecords:15
            }
    }];

    entityFilter = '';

    handleSelect(evt) {
        this.dispatchEvent(new CustomEvent('entityselected', {detail: {name: evt.detail.name}}));
    }

    filterEntities(evt) {
        this.entityFilter = evt.target.value;
    }

    get totalCount() {
        return this.navigationItems.length;
    }

    get navigationItems() {
        if (this.entityFilter && this.entityFilter.length > 0) {
            const regex = new RegExp(this.entityFilter, 'gmi'); //substring regex case insensitive
            return this.entities.filter(e => e.labelPlural.match(regex));
        }
        return this.entities;
    }
}
