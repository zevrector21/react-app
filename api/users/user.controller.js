const User = require("./user.model");
const APIError = require("../helpers/APIError");
const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const mongoose = require("mongoose");
const _ = require("lodash");


function load(req, res, next, id) {
  if (!id) {
    res.json(null);
    return;
  }
  User.get(id)
    .then(user => {
      req.user = user; // eslint-disable-line no-param-reassign
      next();
    })
    .catch(e => next(e));
}

function login(req, res) {
  if (req.body.username === config.admin.username && req.body.password === config.admin.password) {
    const token = jwt.sign({
      username: req.body.username
    }, config.jwtSecret);
    return res.json({status: 'success', token})
  }
  else
    return res.json({status: 'fail'})
}

function get(req, res) {
  return res.json(req.user);
}

function create(req, res, next) {
  const clientIp = req.clientIp;
  const {profile, preference} = req.body;
  const user = new User({
    firstname: profile.fname || 'admin',
    lastname: profile.lname || 'admin',
    email: profile.email || 'admin@admin.com',
    profile: profile,
    preference: preference,
    ipaddr: clientIp,
  });

  return user
    .save()
    .then(saveduser => res.json(saveduser))
    .catch(e => next(e));
}

function update(req, res, next) {
  const clientIp = req.clientIp;
  const user = req.user;
  user.profile = req.body.profile;
  user.preference = req.body.preference;
  return user
    .save()
    .then(saveduser => res.json(saveduser))
    .catch(e => next(e));
}

function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  User.countDocuments({}, function(err, total) {
    User.list({ limit, skip })
      .then(users => res.json({
        users,
        total
      }))
      .catch(e => next(e));
  })
}

function remove(req, res, next) {
  const user = req.user;
  user
    .remove()
    .then(deleteduser => res.json(deleteduser))
    .catch(e => next(e));
}


module.exports = {
  load,
  login,
  get,
  create,
  update,
  list,
  remove
};
