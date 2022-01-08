var myStr = "Hello World";
var myArr = [];
console.log("String before reverse " + myStr);
for (var i = 0; i < myStr.length; i++) {
    myArr.unshift(myStr[i]);
}
myStr = "";
for (var i = 0; i < myArr.length; i++) {
    myStr = myStr + myArr[i];
}
console.log("String after reverse " + myStr);