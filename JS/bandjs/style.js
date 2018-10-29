var headtwo = document.getElementsByClassName('head_two')[0];
 var oa = headtwo.getElementsByTagName("a")[0];
 var headbottom = document.getElementById("head_bottom");
 var oli = headtwo.getElementsByTagName("li");
 var ospan = headtwo.getElementsByTagName("span");
 var headbottom = document.getElementById("head_bottom");
 var headbottomtwo = document.getElementById("head_bottomtwo");
 oli[0].addEventListener("mouseenter",function(){
      headbottom.style.display = "block";
      oli[0].style.background = "#F8F8F8";
      ospan[0].style.transform = "rotate(-180deg)";
      ospan[0].style.transition = "0.5s";
 });
 oli[0].addEventListener("mouseleave",function(){
      headbottom.style.display = "none";
      oli[0].style.background = "#fff";
      ospan[0].style.transform = "none";
      ospan[0].style.transition = "0.5s";
 });
 headbottom.addEventListener("mouseenter",function(){
    headbottom.style.display = "block";
 });
 headbottom.addEventListener("mouseleave",function(){
  headbottom.style.display = "none";
 });
 oli[1].addEventListener("mouseenter",function(){
      headbottomtwo.style.display = "block";
      oli[1].style.background = "#F8F8F8";
      ospan[1].style.transform = "rotate(-180deg)";
      ospan[1].style.transition = "0.5s";
 });
 oli[1].addEventListener("mouseleave",function(){
      headbottomtwo.style.display = "none";
      oli[1].style.background = "#fff";
      ospan[1].style.transform = "none";
      ospan[1].style.transition = "0.5s";
 });
 headbottomtwo.addEventListener("mouseenter",function(){
    headbottomtwo.style.display = "block";
 });
 headbottomtwo.addEventListener("mouseleave",function(){
  headbottomtwo.style.display = "none";
 });
 var second2 = document.getElementsByClassName("second2")[0];
 var li = second2.getElementsByTagName("li");
 for(let i=0;i<li.length;i++){
  li[i].addEventListener("mouseenter",function(){
   for(let i =0;i<li.length;i++){
    li[i].style.opacity = "0.3";
   }
    li[i].style.opacity = "1";
  });
  li[i].addEventListener("mouseleave",function(){
    for(let i =0;i<li.length;i++){
       li[i].style.opacity = "1";
    }
    li[i].style.opacity = "1";
  });
}