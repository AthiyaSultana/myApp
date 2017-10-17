'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Example = mongoose.model('Example'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
  _ = require('lodash');

/**
 * Create a Example
 */
exports.create = function (req, res) {
	console.log("req.body",req.body);
	var example = new Example(req.body);
	example.save(function(error,data){
		console.log("error",error,"data",data);
			if(data){
				res.status(200).send(data);
			}else{
				res.status(400).send(error);
			}
	});
};

/**
 * Show the current Example
 */
exports.read = function (req, res) {

};

/**
 * Update a Example
 */
exports.update = function (req, res) {

};

/**
 * Delete an Example
 */
exports.delete = function (req, res) {

};

/**
 * List of Examples
 */
exports.list = function (req, res) {

};
