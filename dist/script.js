let t = false

function tog(){

if(!t){	document.querySelector(".center__br1").style.top = "25px";
	document.querySelector(".center__br3").style.top = "-25px";
	document.querySelector(".center__br2").style.left = "50px";
document.querySelector(".center__br2").style.width = "0";
setTimeout(rota,200);
t = true;
} else {
	
	document.querySelector(".center__br1").style.transform = "rotate(0deg)";	document.querySelector(".center__br3").style.transform = "rotate(0deg)";
	
	setTimeout(desrota,200);
t = false;
}
	
}

function rota(){
document.querySelector(".center__br1").style.transform = "rotate(45deg)";	document.querySelector(".center__br3").style.transform = "rotate(135deg)";
}

function desrota(){
document.querySelector(".center__br1").style.top = "0";
	document.querySelector(".center__br3").style.top = "0";
	document.querySelector(".center__br2").style.left = "0";
document.querySelector(".center__br2").style.width = "100px";
}