var assert = require("assert");
var pry = require("pryjs");
var RecordStore = require("../record_store");

describe("RecordStore", function(){

  var recordStore;

  beforeEach(function(){
    var recordsStub = [];
    var record1 = {title: "II", artist: "Moderat", price: 9.99};
    var record2 = {title: "Revolver", artist: "The Beatles", price: 13.99};
    recordsStub.push(record1);
    recordsStub.push(record2);
    recordStore = new RecordStore({name: "Rollin' Rick's", city: "Boston", records: recordsStub});
  });

  it("has a name", function(){
    assert.equal("Rollin' Rick's", recordStore.name);
  });

  it("has a city", function(){
    assert.equal("Boston", recordStore.city);
  });

  it("has some records", function(){
    assert.equal(13.99, recordStore.records[1].price);
  });

  it("can add a record to the store", function(){
    var recordStub = {title: "II", artist: "Moderat", price: 9.99}
    recordStore.addRecord(recordStub);
    assert.equal("II", recordStore.records[2].title);
  });


});
