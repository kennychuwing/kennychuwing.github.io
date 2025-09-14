var buttons = document.getElementById("container");
var button1 = document.createElement("button");
button1.onclick = onbuttonclicked;
buttons.appendChild(button1);

function onbuttonclicked() {
  if (onbuttonclicked) {
    button1.style.backgroundColor = "red";
    button1.disabled = true;
  } else {
    button1.style.backgroundColor = "green";
    button1.disabled = false;
  }
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}