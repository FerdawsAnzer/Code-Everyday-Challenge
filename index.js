
const decreaseBtn=document.getElementById("decreasebtn");
const resetBtn=document.getElementById("resetbtn");
const increaseBtn=document.getElementById("increasebtn");
const countLabel=document.getElementById("countLabel");
let count=0;
increaseBtn.onclick=function(){
  count++;
  document.getElementById("countLabel").textContent=count;
}
decreaseBtn.onclick=function(){
  count--;
  document.getElementById("countLabel").textContent=count;
}
resetBtn.onclick=function(){
  count=0;
  document.getElementById("countLabel").textContent=count;
}