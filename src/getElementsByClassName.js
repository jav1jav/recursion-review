// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // You should use document.body, element.childNodes, and element.classList
  // first create a new array
  // grab a node, if node has classname, add to the array
  // if it has children, recursively process the children to check for the target class
  // return the new array of nodes
  var arr = [];
  var doc = document.body;

  var hF = function(node, target) {
    if (node.classList && node.className.includes(target)) {
      arr.push(node);
    }
    if (node.hasChildNodes()) {
      for (let i = 0; i < node.childNodes.length; i++) {
        arr.concat(hF(node.childNodes[i], target));
      }    
    }
    return arr;
  };

  return hF(doc, className);
  
};
