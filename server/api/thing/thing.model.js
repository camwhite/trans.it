'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  title: String,
  messageToBeTranslated: String,
  translatedMessage: String,
  fromLang: String,
  toLang: String,
  active: Boolean
});

module.exports = mongoose.model('Thing', ThingSchema);
