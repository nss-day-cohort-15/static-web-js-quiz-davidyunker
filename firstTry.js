function tree(build) {

//  This is my empty object
  var build = {
    myHeight: " ",
    userChar: " ",
  };


  build.myHeight = document.getElementById("height").value;
  build.userChar = document.getElementById("character").value;

  var button = document.getElementById("button");
  var counter = 1;

  for (var i = 0; i = build.myHeight; i++)
  if (document.getElementById("height").value !== "" && document.getElementById("character") !== "") {
    console.log(" ".repeat(build.myHeight-i) + build.userChar.repeat(counter))
    counter += 2;
  }

  if (document.getElementById("height").value === "" ) {
    alert("Still one field is empty!");
    }
  if (document.getElementById("character").value === "") {
    alert("Still one field is empty!");
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