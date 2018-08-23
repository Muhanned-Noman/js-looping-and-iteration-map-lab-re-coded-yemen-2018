// Code your solution in this file.
function lowerCaseDrivers(array){
  return array.map(function(element){
    return element.toLowerCase();
  });
}
function nameToAttributes(array){
  return array.map(function(element){
    return {firstName: array[0], lastName: array[1]};
  })
}
