var css = document.querySelector("h3")
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementsByTagName("Body")[0];

function getBackgroundGradient(el,prop){
	var style = getComputedStyle(el, prop) ?
	getComputedStyle(el, null).getPropertyValue(prop)
	: el.style.background;
	console.log(style);
	
	css.textContent = (style.slice(style.search("linear-gradient"),
		style.indexOf("repeat")));
	var idx = style.search("to right");
	style = style.slice(idx + 10, -1);
	
	var part1 = style.slice(0,style.indexOf(','));
	style = style.slice(style.indexOf(',') + 2, style.indexOf(')'));
	color1.value = "#ff0000";
	color2.value = "#0000FF";
};


function setGradient(){
	body.style.background = "linear-gradient(to right,"
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";
	css.innerText = body.style.background;
};

function rndcolor(){
	var letters = "0123456789ABCDEF";
	var color_1 = "#";
	var color_2 = "#";


	for(var i=0;i<6;i++)
	{
		color_1 += letters[Math.floor(Math.random() * 16)];
		color_2 += letters[Math.floor(Math.random() * 16)];
	}
	color1.value = color_1;
	color2.value = color_2;
	setGradient();
}

var btn = document.createElement("button");
btn.addEventListener("click", rndcolor);
btn.innerText = "generate";
body.appendChild(btn);

getBackgroundGradient(body, "background");
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
