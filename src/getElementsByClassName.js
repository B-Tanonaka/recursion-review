// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// use childNodes and classList

var getElementsByClassName = function(className, element) {
  var result = [];
  element = element || document.body;
  if (element.classList !== undefined && element.classList.contains(className)) {
    result.push(element);
  }
  if (element.childNodes.length > 0) {
    element.childNodes.forEach(function(innerChild) {
      result = result.concat(getElementsByClassName(className, innerChild));
    });
  } return result;
};
