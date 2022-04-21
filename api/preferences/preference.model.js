const Promise = require('bluebird');
const mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');

/**
 * DS-160 Preference Schema
 */
const PreferenceSchema = new mongoose.Schema({
  order: {
    type: Number
  },
  key: {
    type: String,
    required: true,
    unique: true,
  },
  value: {
    type: String
  },
  description: {
    type: String
  },
  photo: {
    type: String
  },
  type: {
    type: String
  },
  conditions: {
    type: Object
  },
  group: {
    type: String
  },
  active: {
    type: Boolean,
    default: true
  }
}, { usePushEach: true });

/**
 * Methods
 */
PreferenceSchema.method({});

PreferenceSchema.index({ createdAt: -1 });

/**
 * Statics
 */
PreferenceSchema.statics = {
  /**
   * Get preference
   * @param {ObjectId} id - The objectId of preference.
   * @returns {Promise<Preference, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((preference) => {
        if (preference) {
          return preference;
        }
        const err = new APIError('No such preference exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List preferences in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of preferences to be skipped.
   * @param {number} limit - Limit number of preferences to be returned.
   * @returns {Promise<Preference[]>}
   */
  list({ skip = 0, limit = 10 } = {}) {
    return this.find()
      .sort({ order: 1 })
      .skip(+skip)
      .limit(+limit)
      .exec();
  },

  /**
   * List preferences in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of preferences to be skipped.
   * @param {number} limit - Limit number of preferences to be returned.
   * @returns {Promise<Preference[]>}
   */
  smlist({ skip = 0, limit = 10, filters } = {}) {
    return this.find(filters)
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec();
  }
};

/**
 * @typedef Preference
 */
module.exports = mongoose.model('Preference', PreferenceSchema);
