
function tree(build) {

var counter = 1;

  for (var i = 0; i < build.myHeight; i++)
  if (document.getElementById("height").value !== "" && document.getElementById("character") !== "") {
    console.log(" ".repeat(build.myHeight-i) + build.userChar.repeat(counter))
    counter += 2;
  }

};


function getSomeValues() {
var build = {};
build.myHeight = document.getElementById("height").value;
build.userChar = document.getElementById("character").value;
   if (document.getElementById("height").value === "" || document.getElementById("character").value === "") {
    alert("Still at least one field is empty!");
    }
    else {
      tree(build);
    }
}

var button = document.getElementById("button");
button.addEventListener("click", getSomeValues);

document.getElementById("height").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        button.click();
    }
});


document.getElementById("character").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        button.click();
    }
});
