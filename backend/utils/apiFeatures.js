class ApiFeatures{
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr
    }

    filter(){
        let queryObj = {...this.queryStr}
        this.query = this.query.find(queryObj);
        return this;
    }
}

module.exports = ApiFeatures; 