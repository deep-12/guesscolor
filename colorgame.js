var num=6;
var colors = generatecolors(num);
function randomcolor()
{
	return colors[Math.floor(Math.random()*colors.length)];
}
var guess = document.querySelector("#givenclr"); 
var result = document.querySelector("#result"); 
guess.textContent=randomcolor();          
var picks = document.querySelectorAll(".color");
var buttons = document.querySelectorAll("button");
var heading = document.querySelector("#woncolor");
for(var i = 0;i<picks.length;i++)
{
	picks[i].style.background=colors[i];
    //console.log(picks[i].style.background);
	picks[i].addEventListener("click",function(){
		   var clickedclr=this.style.background;
           if(clickedclr==guess.textContent)
           {
              result.textContent="won";
              buttons[0].textContent="Play again?";
              heading.style.background=this.style.background;
              changecolor();
           }
           else{
           	   result.textContent="try again";
           	   this.style.background="black";
           }
	});
}
function changecolor()
{
	for(var i=0;i<colors.length;i++)
	{
		picks[i].style.background=guess.textContent;
	}
}
function generatecolors(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		var r = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		arr.push("rgb(" + r + ", " + g + ", " + b + ")");
	}
    return arr;
}
buttons[0].addEventListener("click",function()
{    
	 buttons[0].textContent="NEW COLORS";
	 result.textContent="";
     colors=generatecolors(num);
     guess.textContent=randomcolor(); 
     for(var i = 0;i<picks.length;i++)
     {
	  picks[i].style.background=colors[i];
	 } 
	 heading.style.background="steelblue";
});
buttons[1].addEventListener("click",function()
{
	 num=3;
	 buttons[2].classList.remove("selected");
	 buttons[1].classList.add("selected");
     colors=generatecolors(num);
     guess.textContent=randomcolor(); 
     for(var i = 0;i<picks.length;i++)
     {
      if(colors[i])
      {
      	picks[i].style.background=colors[i];
      }
	  else{
	  	picks[i].style.display="none";
	  	//picks[i].style.background="black";//OR picks[i].style.display="none";
	  }
	 } 
	 heading.style.background="steelblue";
});
buttons[2].addEventListener("click",function()
{
	 num=6;
	 buttons[2].classList.add("selected");
	 buttons[1].classList.remove("selected");
     colors=generatecolors(num);
     guess.textContent=randomcolor(); 
     for(var i = 0;i<picks.length;i++)
     {
	  picks[i].style.background=colors[i];
	  picks[i].style.display="block";
	 } 
	 heading.style.background="steelblue";
});