var parent = document.getElementById("background");
var container = document.getElementById("container");
var containerChildren;
var width = window.innerWidth;
var height = parent.clientHeight - 100;
var diff = (width - parent.clientWidth) / 2;
var H_0 = document.getElementById("H_0");
var H_1 = document.getElementById("H_1");
var I_0 = document.getElementById("I_0");
var I_1 = document.getElementById("I_1");
var update = document.getElementById("update");

function index(){
  H_0.style.opacity = 0;
  H_1.style.opacity = 0;
  I_0.style.opacity = 0;
  I_1.style.opacity = 0;
  H_0.style.left = ((parent.clientWidth / 2) - H_0.clientWidth) + "px";
  H_0.style.top = ((parent.clientHeight / 2) - H_0.clientHeight) + "px";
  H_1.style.left = (parent.clientWidth / 2) + "px";
  H_1.style.top = (parent.clientHeight / 2) + "px";
  I_0.style.left = ((parent.clientWidth / 2) - H_0.clientWidth) + "px";
  I_0.style.top = (parent.clientHeight / 2) + "px";
  I_1.style.left = (parent.clientWidth / 2) + "px";
  I_1.style.top = ((parent.clientHeight / 2) - H_0.clientHeight) + "px";

  var file = ["A","B","C","D","E","F","G",
              "H","I","J","K","L","M","N","O","P","Q","R",
              "S","T","U","V","W","X","Y","Z"];
  for(var i=0; i<file.length;i++){
    var posX = Math.floor((Math.floor( Math.random() * width ))) - diff - 190;
    var posY = Math.floor((Math.floor( Math.random() * height )));
    console.log("posX[" + i + "]:" + posX);
    console.log("posY[" + i + "]:" + posY);
    var element = document.createElement("img");
    element.className = "card";
    element.style.width = 100 + "px";
    element.style.height = 100 + "px";
    element.style.position = "absolute";
    element.style.zIndex = 0;
    element.style.top = posY + "px";
    element.style.left = posX + "px";
    element.style.opacity = 0.3;
    element.src = "HIchainFonts/png/Normal/" + file[i] + ".png";
    console.log(file[i]);
    parent.appendChild(element);
  }
  dynamics.animate(H_0, {
    opacity: 1
    }, {
    type: dynamics.easeOut,
    duration: 2000,
    friction: 400
  });
  dynamics.animate(H_1, {
    opacity: 1
    }, {
    type: dynamics.easeOut,
    duration: 2000,
    friction: 400
  });
  dynamics.animate(I_0, {
    opacity: 1
    }, {
    type: dynamics.easeOut,
    duration: 2000,
    friction: 400
  });
  dynamics.animate(I_1, {
    opacity: 1
    }, {
    type: dynamics.easeOut,
    duration: 2000,
    friction: 400
  });
  dynamics.animate(update, {
    opacity: 1
    }, {
    type: dynamics.easeOut,
    duration: 1000,
    friction: 400
  });
}

window.onload = index();
function jump(link){
  location.href = link;
}
