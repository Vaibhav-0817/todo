const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var d = new Date();
var dayName = days[d.getDay()];
var month= monthNames[d.getMonth()];
var dt=d.getDate();

document.querySelector("#opener").textContent=`${dayName}, ${month} ${dt}`;

function add()
{
  var s=document.querySelector("input").value;
  var li=document.createElement("li");
  var node = document.createTextNode(s);
  li.appendChild(node);
  
  
  
  document.querySelector("input").value="";
  document.querySelector(".notes").appendChild(li);
  li.classList.add("list-group-item");
  let span=document.createElement("span");
  span.innerHTML="\u00d7";
  li.appendChild(span);
  savedata();
}
document.querySelector(".notes").addEventListener("click",function(e){
  if(e.target.tagName==="LI")
  {
    e.target.classList.toggle("checked");
    savedata();
  }
  else if(e.target.tagName==="SPAN")
  {
    e.target.parentElement.remove();
    savedata();
  }
},false);
function savedata()
{
  localStorage.setItem("data",document.querySelector(".notes").innerHTML);
}
function showdata()
{
  document.querySelector(".notes").innerHTML=localStorage.getItem("data");
}
showdata();
