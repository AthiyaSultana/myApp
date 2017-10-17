'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Example Schema
 */
var ExampleSchema = new Schema({
  // Example model fields
  // ...
  name:{
  	type:String
  },
  numberOfShops:{
  	type:Number
  },
  created: {
  	type:Date,
  	default: Date.now
  },
  shopsName:[
  	{ 
  		city:String,
  		doorNumber:Number
  	}
  ]
});

mongoose.model('Example', ExampleSchema);
