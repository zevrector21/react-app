const express = require('express');
const userRoutes = require('./users/user.route');
const preferenceRoutes = require('./preferences/preference.route');
const preferenceCtrl = require('./preferences/preference.controller');

const router = express.Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) => res.send('OK'));

// mount user routes at /users
router.use('/users', userRoutes);
router.use('/preferences', preferenceRoutes);

router.route('/upload')
  .post(preferenceCtrl.upload);

module.exports = router;
