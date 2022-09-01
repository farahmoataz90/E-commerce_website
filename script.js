// To make the ham icon clickable
const bar=document.getElementById("bar");
const close=document.getElementById("close");
const nav=document.getElementById("navbar");

if(bar){    

 //if someone click on the ham. icon ,then i want to show the side menu
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })    
}


if(close){    

    //if someone click on the close icon ,then i want to remove the side menu
       close.addEventListener('click',()=>{
           nav.classList.remove('active');
       })    
   }



// start of dark theme

var moon =document.getElementById("moon"); 
var logo =document.getElementById("logo"); 
var bag =document.getElementById("bag"); 
var logo2=document.getElementById("logo2");

moon.onclick =function() //when clicking on the icon
{
  document.body.classList.toggle("blackTheme"); //add the dark theme and change some icons
 

  if(document.body.classList.contains("blackTheme"))
  {
      moon.style.color = "#ffffff"; //white
      bag.style.color = "#ffffff"; //white
      logo.src="logo2.png"; 
      logo2.src="logo2.png";
  }
  else
  {
      moon.style.color = "#010101";//black
      bag.style.color = "#010101";//black
      logo.src="logo.png"; 
      logo2.src="logo.png";

  }
}
//end of dark theme