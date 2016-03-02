function pulldown(name){
  var id = document.getElementById(name);
  var ul = id.getElementsByClassName("pull");
  id.onmouseover = function(){
    //this.style.opacity = 0.8;
    console.log("乗った");
    ul[0].style.display = "block";
  };
  id.onmouseout = function(){
    //this.style.opacity = 1.0;
    console.log("降りた");
    ul[0].style.display = "none";
  };
}
(function(){
  var id = document.getElementById("header");
  window.addEventListener("scroll", function(){
    id.style.left = -document.getElementsByTagName("body")[0].scrollLeft + "px";
  })
})()
