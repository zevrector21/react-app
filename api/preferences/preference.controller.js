const Preference = require("./preference.model");
const Counter = require("../counter/counter.model");
const APIError = require("../helpers/APIError");
const mongoose = require("mongoose");
const _ = require("lodash");
var fs = require('fs');

function load(req, res, next, id) {
  if (!id) {
    res.json(null);
    return;
  }
  Preference.get(id)
    .then(preference => {
      req.preference = preference; // eslint-disable-line no-param-reassign
      next();
    })
    .catch(e => next(e));
}

function get(req, res) {
  return res.json(req.preference);
}

function create(req, res, next) {
  const clientIp = req.clientIp;
   Counter.findByIdAndUpdate(
    { _id: "Loper_PreferenceID" },
    { $inc: { seq: 1 } },
    { new: true, upsert: true },
    function(error, counter) {
      const preference = new Preference(req.body);
      preference.order = counter.seq

      return preference
        .save()
        .then(savedPreference => res.json(savedPreference))
        .catch(e => next(e));
    }
  )
}

function update(req, res, next) {
  const clientIp = req.clientIp;
  const preference = req.preference;
  Object.keys(req.body).forEach(key => {
    preference[key] = req.body[key]
  })

  return preference
    .save()
    .then(savedPreference => res.json(savedPreference))
    .catch(e => next(e));
}

function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  Preference.countDocuments({}, function(err, total) {
    Preference.list({ limit, skip })
      .then(preferences => res.json({
        preferences,
        total
      }))
      .catch(e => next(e));
  })
}

function remove(req, res, next) {
  const preference = req.preference;
  preference
    .remove()
    .then(deletedpreference => res.json(deletedpreference))
    .catch(e => next(e));
}

function upload(req, res, next) {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
  var timestamp = new Date().getTime().toString();
  var title = `images/${timestamp}.png`
  fs.writeFileSync("public/"+title, Buffer.from(new Uint8Array(req.files.file.data)));
  return res.json({filename: title})
}

module.exports = {
  load,
  get,
  create,
  update,
  list,
  remove,
  upload
};
