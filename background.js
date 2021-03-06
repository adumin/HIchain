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

(function(){
  if(container){
    container.style.left = parent.clientWidth / 2 + "px";
    container.style.top = parent.clientHeight /2  + "px";
    containerChildren = container.children;
  }

  H_0.style.opacity = 1;
  H_1.style.opacity = 1;
  I_0.style.opacity = 1;
  I_1.style.opacity = 1;
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

})();

function move(className){
  var width = window.innerWidth;
  var elements = document.getElementsByClassName(className);
  var diff = -(width - document.body.clientWidth) / 2;

  for(var i=0; i<elements.length; i++){
    var posX = elements[i].style.left;
    if(diff <= posX && posX < width){
      posX += 10;
    }else if(width <= posX){
      posX = diff;
    }
    elements[i].style.left = posX;
  }
}

function open(){
  dynamics.animate(H_0, {
    translateX: -(parent.clientWidth / 2) + H_0.clientWidth,
    translateY: -(parent.clientHeight / 2) + H_0.clientHeight + 77 + 5,
    rotateZ: 180
  }, {
    type: dynamics.easeOut,
    duration: 1000,
    friction: 400
  });
  dynamics.animate(H_1, {
    translateX: (parent.clientWidth / 2) - H_1.clientWidth,
    translateY: (parent.clientHeight / 2) - H_1.clientHeight,
    rotateZ: 180
  }, {
    type: dynamics.easeOut,
    duration: 1000,
    friction: 400
  });
  dynamics.animate(I_0, {
    translateX: -(parent.clientWidth / 2) + I_0.clientWidth,
    translateY: (parent.clientHeight / 2) - I_0.clientHeight,
    rotateZ: 180
  }, {
    type: dynamics.easeOut,
    duration: 1000,
    friction: 400
  });
  dynamics.animate(I_1, {
    translateX: (parent.clientWidth / 2) - I_1.clientWidth,
    translateY: -(parent.clientHeight / 2) + I_1.clientHeight + 77 + 5,
    rotateZ: 180
  }, {
    type: dynamics.easeOut,
    duration: 1000,
    friction: 400
  });
  if(container){
    dynamics.animate(container, {
      left: H_0.clientWidth,
      top: 148,
      width: (parent.clientWidth - (H_0.clientWidth * 2)) - 16,
      minHeight: parent.clientHeight - 154,
      opacity: 1
      }, {
      type: dynamics.easeOut,
      duration: 1000,
      friction: 400
    });
  }
}

function containerChildrenAvailable(){
  for(var i = 0; i < containerChildren.length; i++){
    containerChildren[i].style.display = "block";
    dynamics.animate(containerChildren[i], {
      opacity: 1
      }, {
      type: dynamics.easeOut,
      duration: 1000,
      friction: 400
    });
  }
}
window.setTimeout("containerChildrenAvailable()", 1000)




function jump(link){
  location.href = link;
}
