var pry = require("pryjs");

var RecordStore = function(params){
  this.name = params.name;
  this.city = params.city;
  this.records = params.records;
  this.balance = params.balance;
};

RecordStore.prototype = {
  addRecord: function(record){
    this.records.push(record);
  },

  listInventory: function(){
    var outputString = ""
    this.records.forEach(function(record){
      outputString += record.title + ", by " + record.artist + ". Price: £" + record.price.toString() + "\n";
    });
    return outputString;
  },

  sellRecord: function(recordNumber){
    this.balance += this.records[recordNumber].price;
    return this.records.splice(recordNumber, 1)[0];
  },

  reportFinances: function(){
    var valueOfStock = 0;
    var totalAssets = 0;
    this.records.forEach(function(record){
      valueOfStock += record.price;
    });
    totalAssets = this.balance + valueOfStock;
    return "Cash: " + this.balance + ", Stock value: £" + valueOfStock + ". Total assets: £" + totalAssets;
  }

};

module.exports = RecordStore;
