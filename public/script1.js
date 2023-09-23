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
  localStorage.setItem("bata",document.querySelector(".notes").innerHTML);
}

function showdata()
{
  document.querySelector(".notes").innerHTML=localStorage.getItem("bata");
}
showdata();