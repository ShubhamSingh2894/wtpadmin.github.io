$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
	Parse.initialize("ORdRb6ZtoTRSIUBeDKCcpigKQR9Pr6YJjeguuN9t", "ec8NHsZDP17pTdRjBKQFAPxB8ihduGt6e8NAGdaH"); 
	var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});
});

