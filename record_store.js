var RecordStore = function(params){
  this.name = params.name;
  this.city = params.city;
  this.records = params.records;
  
};

RecordStore.prototype = {
  addRecord: function(record){
    this.records.push(record);
  }
};

module.exports = RecordStore;
