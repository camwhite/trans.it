/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Thing = require('./thing.model');
var mongoose = require('mongoose');
var mailgun = require('mailgun-js')({apiKey: 'key-7423sifnvm7rupz0mtghbetv75lk8vn0', domain: 'sandbox6901a96b002d4655bc9425a02953f225.mailgun.org'});

// Get list of things
exports.index = function(req, res) {
  Thing.find(function (err, things) {
    if(err) { return handleError(res, err); }
    return res.json(200, things);
  });
};

exports.next = function(req, res) {
  // var thingId = req.body._id;
  // Thing.update({_id: thingId}, {active: true});
  // Thing.save(function(err) {
  //   if (err) return validationError(res, err);
  //   res.send(200);
  // })

  Thing.find({translatedMessage: {$exists: false}}).sort({_id: 1}).limit(1).exec(function(err, thing) {
    if(thing.length === 0) {
      return res.json(404);
    }
    var thingId = mongoose.Types.ObjectId(thing[0]._id);
    console.log(thingId)
    if(err) { return handleError(res, err); }
    Thing.update({_id: thingId}, {$set: {active: true}}, {}, function(err, doc, lastErr) {
      console.log(arguments);
    });
    return res.json(200, thing[0]);
  })};


exports.translator = function(req, res) {
    // var thingId = req.body._id;
    // Thing.update({_id: thingId}, {active: true});
    // Thing.save(function(err) {
    //   if (err) return validationError(res, err);
    //   res.send(200);
    // })

    Thing.find({translatorId: req.params.id}).exec(function(err, things) {
      if(err) { return handleError(res, err); }
        if(things.length === 0) {
          return res.json(404);
        }
        return res.json(200, things);
      }
    )
};

// Get a single thing
exports.show = function(req, res) {
  Thing.findById(req.params.id, function (err, thing) {
    if(err) { return handleError(res, err); }
    if(!thing) { return res.send(404); }
    return res.json(thing);
  });
};

// Creates a new thing in the DB.
exports.create = function(req, res) {
  Thing.create(req.body, function(err, thing) {
    if(err) { return handleError(res, err); }
    return res.json(201, thing);
  });
};

// Sends mail message
exports.mail = function(req, res) {

  var data = {
    from: 'transit@trans.it',
    to: req.body.recipient,
    subject: req.body.subject,
    text: req.body.content
  };
  console.log('sending email', req.body.recipient, req.body.subject, req.body.content);
  
  mailgun.messages().send(data, function (error, body) {

  });

};

// Updates an existing thing in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Thing.findById(req.params.id, function (err, thing) {
    if (err) { return handleError(res, err); }
    if(!thing) { return res.send(404); }
    var updated = _.merge(thing, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, thing);
    });
  });
};

// Deletes a thing from the DB.
exports.destroy = function(req, res) {
  Thing.findById(req.params.id, function (err, thing) {
    if(err) { return handleError(res, err); }
    if(!thing) { return res.send(404); }
    thing.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
