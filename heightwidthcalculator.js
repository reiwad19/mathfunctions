function calculateArea(width,height) {
//create a function that takes two parameteres
	var area= width * height;
//multiply width and height
  return area;
  //value is returned
}
var y = prompt("Enter width");
//ask for width and save as y
var x = prompt("Enter height");
//ask for height and save as x
var wallOne = calculateArea(y, x);
//pass y and x to the calculateArea function
window.alert(wallOne);
//popup area to screen