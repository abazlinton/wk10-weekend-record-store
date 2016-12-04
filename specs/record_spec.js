var assert = require("assert");
var pry = require("pryjs");
var Record = require("../record");

describe("Record", function(){

  var record;

  beforeEach(function(){
    record1 = new Record({title: "II", artist: "Moderat", price: 9.99});
    record2 = new Record({title: "Revolver", artist: "The Beatles", price: 13.99});
    record3 = new Record({title: "Defintely Maybe", artist: "Oasis", price: 6.99});
    record4 = new Record({title: "Bad", artist: "Michael Jackson", price: 7.99});
  });

  it("has a title", function(){
    assert.equal("II", record1.title);
  });


  it("has an artist", function(){
    assert.equal("The Beatles", record2.artist);
  });


  it("has a price", function(){
    assert.equal(6.99, record3.price);

  });

});
