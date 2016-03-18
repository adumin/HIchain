(function(){
  var width = window.innerWidth;
  var height = window.innerHeight;
  var diff = (width - document.body.clientWidth) / 2;
  console.log("width:" + width);
  console.log("height:" + height);
  console.log("diff:" + diff);
  var parent = document.getElementById("background");
  var file = ["！","？","＊","A","B","C","D","E","F","G",
              "H","I","J","K","L","M","N","O","P","Q","R",
              "S","T","U","V","W","X","Y","Z"];
  for(var i=0; i<file.length;i++){
    var posX = Math.floor((Math.floor( Math.random() * width ))) - diff;
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
    element.src = "HIChain Fonts ver2/png/Normal/" + file[i] + ".png";
    console.log(file[i]);
    parent.appendChild(element);
  }

  var H_0 = document.getElementById("H_0");
  var H_1 = document.getElementById("H_1");
  var I_0 = document.getElementById("I_0");
  var I_1 = document.getElementById("I_1");

  H_0.style.left = ((parent.clientWidth / 2) - H_0.clientWidth) + "px";
  H_0.style.top = ((parent.clientHeight / 2) - H_0.clientHeight) + "px";
  H_1.style.left = (parent.clientWidth / 2) + "px";
  H_1.style.top = (parent.clientHeight / 2) + "px";
  I_0.style.left = ((parent.clientWidth / 2) - H_0.clientWidth) + "px";
  I_0.style.top = (parent.clientHeight / 2) + "px";
  I_1.style.left = (parent.clientWidth / 2) + "px";
  I_1.style.top = ((parent.clientHeight / 2) - H_0.clientHeight) + "px";
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
    console.log("pppposX[" + i + "]:" + posX);
    elements[i].style.left = posX;
  }
};
