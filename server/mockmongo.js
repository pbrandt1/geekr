var MockCollection = function(data) {
    this._collection = data;
    this.findById = function(id) {
        var docs = [];
        for (var i = 0, length = this._collection.length; i < length; i++) {
            if (this._collection[i]._id && this._collection[i]._id === id) {
                docs.push(this._collection[i]);
            }
        }
        return docs;
    };
    
    this.find = function() {
        return this._collection;
    };
    
    // this.find = function(selector) {
    //     var currentResults = [];
    //     var level = 0;
    //     var query = tokenizer.tokenize(selector);
    //     for (var k in query) {
    //         if (level === 0) {
    //             for (var i = 0, length = _collection.length; i < length; i++) {
    //                 if _collection[k] == query[k];
    //             }
    //         }
    //     }
    // };
    
    return this;
};





module.exports = exports = {
    MockCollection: MockCollection
}