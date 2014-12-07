'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  userObjId: Schema.Types.ObjectId,
  translatorId: Schema.Types.ObjectId,
  title: String,
  messageToBeTranslated: String,
  translatedMessage: String,
  fromLang: String,
  toLang: String,
  active: Boolean
});

module.exports = mongoose.model('Thing', ThingSchema);
