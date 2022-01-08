var myStr = "Hello world";
var myStr2 = "Hello World";
var myTest = /world/;
var myTest2 = /world/i;
console.log(myTest.test(myStr));
console.log(myTest.test(myStr2));
console.log(myTest2.test(myStr2));
//here we define some method for string matching
var myStr = "Repeat repeat repeat";
var myTest = /repeat/;
var myTest2 = /repeat/g;
var myTest3 = /repeat/gi;
console.log(myStr.match(myTest));
console.log(myStr.match(myTest2));
console.log(myStr.match(myTest3));