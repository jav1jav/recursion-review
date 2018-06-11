// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // input will be an array
  // output should be a string
  // if it's a number, boolean, null, we convert to a string
  //
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString(); 
  } else if (obj === null) {
    return 'null';
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj) && !obj.length) {
    return '[]';
  } else if (Array.isArray(obj)) {
    return '[' + obj.map(stringifyJSON) + ']';
  //if obj is an empty array, wrap brackets in quotes
  //if is not an empty array, test all the elements in the array with
  //with our stringifyJSON function (recursively).
  } else if (typeof obj === 'object' && !Object.keys(obj).length) {
    return '{}';
  } else if (typeof obj === 'object' && Object.keys(obj)) {
    // if obj is an empty obj, return a string of {}
    // else if obj is not empty, loop through the obj and 
    // return everything inside stringified
    var str = ''; 
    for (var key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      }
      str = str + stringifyJSON(key) + ':';
      str = str + stringifyJSON(obj[key]) + ',';
    }
    return '{' + str.substring(0, str.length-1) + '}';
  }

  
};

/*
var stringifiableObjects = [
  9,
  null,
  true,
  false,
  'Hello world',
  [],
  [8],
  ['hi'],
  [8, 'hi'],
  [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
  [8, [[], 3, 4]],
  [[[['foo']]]],
  {},
  {'a': 'apple'},
  {'foo': true, 'bar': false, 'baz': null},
  {'boolean, true': true, 'boolean, false': false, 'null': null },
  // basic nesting
  {'a': {'b': 'c'}},
  {'a': ['b', 'c']},
  [{'a': 'b'}, {'c': 'd'}],
  {'a': [], 'c': {}, 'b': true}
];
*/
// used for stringifyJSON spec
// hint: JSON does not allow you to stringify functions or
// undefined values, so you should skip those key/value pairs.
/*
unstringifiableValues = [
  {
    'functions': function() {},
    'undefined': undefined
  }
];
*/
