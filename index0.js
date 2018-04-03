function myScalingBtn() {
  
  var x = document.getElementById("scale-demo");
  var a = document.getElementById("scale-demo1");
  var b = document.getElementById("scale-demo2");
  var y = document.getElementById("the-btn0");
  
  
  if(x.classList.contains("scale-out")){
     x.classList.remove("scale-out");
     a.classList.remove("scale-out");
     b.classList.remove("scale-out");
     y.classList.remove("red");
     y.classList.add("green");
    
     }
  else {
    x.classList.add("scale-out");
    a.classList.add("scale-out");
    b.classList.add("scale-out");
    y.classList.add("red");
    y.classList.remove("green");
  }
}
