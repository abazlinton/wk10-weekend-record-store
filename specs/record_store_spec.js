var assert = require("assert");
var pry = require("pryjs");
var RecordStore = require("../record_store");

describe("RecordStore", function(){

  var recordStore;

  beforeEach(function(){
    var recordsStub = [];
    var record1 = {title: "II", artist: "Moderat", price: 9.99};
    var record2 = {title: "Revolver", artist: "The Beatles", price: 13.99};
    recordsStub = [record1, record2];
    recordStore = new RecordStore({name: "Rollin' Rick's", city: "Boston", records: recordsStub, balance: 1000});
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

  it("has a balance", function(){
    assert.equal(1000, recordStore.balance);
  });

  it("can list inventory", function(){
    var output = recordStore.listInventory();
    assert.equal("II, by Moderat. Price: £9.99\nRevolver, by The Beatles. Price: £13.99\n", output);
  });

  it("can sell a record", function(){
    var soldRecord = recordStore.sellRecord(0);
    assert.equal("Moderat", soldRecord.artist);
    assert.equal("II", soldRecord.title);
    assert.equal(1009.99, recordStore.balance);
    assert.equal(13.99, recordStore.records[0].price);
  });

  it("can report finanical situation", function(){
    var output = recordStore.reportFinances();
    assert.equal("Cash: 1000, Stock value: £23.98. Total assets: £1023.98", output);  

  });


});
