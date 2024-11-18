
function checkTriangle() {

// // var length1 = parseInt(prompt("enter your first length!"));
// var length2 = parseInt(prompt("enter your second length!"));
// var length3 = parseInt(prompt("enter your third length!"));


if(length1 === length2 && length2 === length3){
    alert("equilateral triangle");
}
else if(length1===length2 && length2 !==length3){
    alert("This is an Isoceles triangle");
}
else if (length1!== length2!== length3 || (length1 + length2) > length3){
    alert("its a scalene triangle");
}
else if ((length1 + length2) <= length3){
    alert("not a triangle");
}
}