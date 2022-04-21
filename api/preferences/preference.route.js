const express = require('express');
const preferenceCtrl = require('./preference.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
/** GET /api/preference - Get list of preference applications */
// .get(preferenceCtrl.list)

  /** POST /api/preference - Create new preference application */
  .post(preferenceCtrl.create);

router.route('/list')
  .get(preferenceCtrl.list);

router.route('/:preferenceId')
  /** GET /api/preference/:preferenceId - Get application by id */
  .get(preferenceCtrl.get)

  /** PUT /api/preference/:preferenceId - Update application */
  .put(preferenceCtrl.update)

  /** DELETE /api/preference/:preferenceId - Delete application */
  .delete(preferenceCtrl.remove);

/** Load application when API with preferenceId route parameter is hit */
router.param('preferenceId', preferenceCtrl.load);

module.exports = router;
