// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys

  return Object.getOwnPropertyNames(obj);
};

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values

  return Object.values(obj);
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject

  // TODO: STOP CRYING AND FINISH CODE ;_;
  // TODO: Use arrays/loops instead of trying to pull the properties out of copied object. :o OH WAIT.
  // TODO: REAPPLY VALUES TO OBJECT. TA-FUCKING-DAH?
  // TODO: OR. ORRRRRR. FUCKING TURN EVERYTHING INTO AN ARRAY BECAUSE WHY THE FUCK NOT.

  const objKeys = Object.keys(obj);
  const objValues = Object.values(obj);

  for (let i = 0; i < objKeys.length; i++) {
    obj[objKeys[i]] = cb(objValues[i]);
  }

  return obj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs

  return Object.entries(obj);
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
};

/* eslint-enable no-unused-vars */

module.exports = {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults,
};
