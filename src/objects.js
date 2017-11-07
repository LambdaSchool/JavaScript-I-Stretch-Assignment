// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
<<<<<<< HEAD
=======

>>>>>>> cf9999781b67ad235a2d6fbc4e38721e59a8c69a
  return (Object.keys(obj));
};


const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
<<<<<<< HEAD
  return (Object.values(obj));
=======
  const keyArr = Object.keys(obj);
  const valueArr = [];
  for (let i = 0; i < keyArr.length; i++) {
    valueArr.push(obj[keyArr[i]]);
  }
  return valueArr;
>>>>>>> cf9999781b67ad235a2d6fbc4e38721e59a8c69a
};


const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  obj = {
    key: 'value',
  };
  const result = Object.keys(obj).mapObject(key => ({keys(obj), values(obj): obj[key]}));
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

