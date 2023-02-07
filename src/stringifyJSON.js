// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // declare a result string
  var str = '';
  // edge cases
  // if it was a function or an undefined return null
  if ( typeof obj === 'function' || obj === undefined || obj === null) {
    return 'null';
  }
  // numbers, booleans , return   value, closing bracket
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    str += obj;
  }
  // string, same as above but add quotes before and after the value
  if ( typeof obj === 'string') {
    return '\"' + obj + '\"';

  }
  // if obj is an array
  if (Array.isArray(obj)) {
  // add opening array brackets
    str += '[';
    // iterate through each of the elements, pasing in the elements to stringifyJSON recursively
    for ( let i = 0; i < obj.length; i++) {
      str += stringifyJSON(obj[i]);
      // add a comma after each element except for the last element
      if (i !== obj.length - 1) {
        str += ',';
      }
    }
    // closing array brackets
    str += ']';
  } else if (typeof obj === 'object') {
    // if obj is an "object" , can use else here
    //if (typeof obj === 'object') {
    // add opening curly bracket
    str += '{';
    // iterate through the elements recursively
    // get the keys array
    var keys = Object.keys(obj); // array of elements
    // for loop
    for ( let i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = obj[key];
      if ( typeof value === 'function' || value === undefined) {
        continue;
      }
      str += stringifyJSON(key) + ':' + stringifyJSON(value);
      if (i !== keys.length - 1) {
        str += ',';
      }
    }
    // closing brackets
    str += '}';

  }

  // return the string
  return str;


};
