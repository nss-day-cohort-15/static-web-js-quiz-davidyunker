// // Create a tree function that should build a pine tree out of a character in the
// // Chrome dev tools console. It accepts a single object as an argument. The
// // object should have two key/value pairs.

// // A key that specifies the height of the pine tree. The value for the
// // height of the tree should be from user input in a <input type="text">
// // field in the DOM. A key that specifies which character to use to build
// // the pine tree. The character to use should be from user input in a
// // <input type="text"> field in the DOM. Once the user enters in a
// // number, and a character, the user can either then just press the enter
// // key (as long as the cursor is in one of the input fields), or click a
// // button that is labeled "Grow your tree" and the tree should be shown
// // in the console. This requires you to add an event listener to the
// // button, as well as an event listener for the enter/return key.

// // If either of the input fields does not have a value in it when the
// // user presses the enter key, or presses the button, then display an
// // alert stating that both fields must have a value.

// // Grow your tree



// // The "braces" are making an object literal, i.e. they create an object. It is one argument.

// // Example:

// // function someFunc(arg) {
// //     alert(arg.foo);
// //     alert(arg.bar);
// // }

// // someFunc({foo: "This", bar: "works!"});
// // You can create the object beforehand has well:

// // var someObject = {
// //     foo: "This",
// //     bar: "works!"
// // };

// // someFunc(someObject);

// // var myHeight = document.getElementById("height");
// // var userChar = document.getElementById("character");



// // var buildMe = {
// //   height: myHeight,
// //   builder: userChar,
// // }



// function repeatObject (num) {
//   var obj = {}
//   for (var i = 0; i < num; i++) {
//     obj[i] = repeatNumber(i)
//   }
//   return obj
// }

// console.log('#3:', repeatObject(5))

// function repeatNumber (num) {
//   //   var string = ''

//   //   for (var i = 0 ; i < num ; i++) {
//   //     string += num
//   //   }
//   //   return string
//   return num.toString().repeat(num)
// }

// console.log('#3.5', repeatNumber(7))



  // This is my tree function. It accepts one object as an argument. That object is build /

function tree(build) {

//  This is my empty object
  var build = {
    myHeight: " ",
    userChar: " ",
  };

  build.myHeight = document.getElementById("height").value;
   build.userChar = document.getElementById("character").value;


  var button = document.getElementById("button");
  var goTreeGo = "";

  for (var i = 0; i <= build.myHeight; i++)

  if (document.getElementById("height").value !== "" && document.getElementById("character") !== "") {
    goTreeGo += build.userChar;
    console.log(goTreeGo);

  } else if (document.getElementById("height").value === "" && document.getElementById("character").value === "") {
    alert("Both fields must have a value!");
  } else if (document.getElementById("height").value === "") {
    alert("Still one field is empty!");
  } else if (document.getElementById("character").value === "") {
    alert("Still one field is empty!");
  } else {
    alert("Something is wrong.");
  }
};

button.addEventListener("click", tree);

document.getElementById("height").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("button").click();
    }
});


document.getElementById("character").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("button").click();
    }
});