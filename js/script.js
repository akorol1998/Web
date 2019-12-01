const DOM = {
	usr:null,
	email:null,
	pass:null,
	color:null
};

const delUser = function(){
	if (DOM.usr === null){
		let el = document.querySelector("#user_box");
		document.querySelector(".btn-usr").innerHTML = "Add user"
		document.querySelector(".btn-usr").classList.toggle("bckgrnd");
		el.remove();
		DOM.usr = el;
	}
	else{
		const form = document.querySelector(".wrapper");
		form.appendChild(DOM.usr);
		document.querySelector(".btn-usr").innerHTML = "Del user";
		document.querySelector(".btn-usr").classList.toggle("bckgrnd");
		DOM.usr = null;

	}
	console.log(DOM.usr);
}

const delPass = function(){
	if (DOM.pass === null){
		let el = document.querySelector("#pass_box");
		document.querySelector(".btn-pass").innerHTML = "Add pass"
		document.querySelector(".btn-pass").classList.toggle("bckgrnd");
		el.remove();
		DOM.pass = el;
	}
	else{
		const form = document.querySelector(".wrapper");
		form.appendChild(DOM.pass);
		document.querySelector(".btn-pass").innerHTML = "Del pass";
		document.querySelector(".btn-pass").classList.toggle("bckgrnd");
		DOM.pass = null;
	}
	console.log(DOM.pass);
}

const delEmail = function(){
	if (DOM.email === null){
		let el = document.querySelector("#email_box");
		document.querySelector(".btn-email").innerHTML = "Add email"
		document.querySelector(".btn-email").classList.toggle("bckgrnd");
		el.remove();
		DOM.email = el;
	}
	else{
		const form = document.querySelector(".wrapper");
		form.appendChild(DOM.email);
		document.querySelector(".btn-email").innerHTML = "Del email";
		document.querySelector(".btn-email").classList.toggle("bckgrnd");
		DOM.email = null;
	}
	console.log(DOM.email);
}
const delColor = function(){
	if (DOM.color === null){
		let el = document.querySelector("#color_box");
		document.querySelector(".btn-color").innerHTML = "Add color"
		document.querySelector(".btn-color").classList.toggle("bckgrnd");
		el.remove();
		DOM.color = el;
	}
	else{
		const form = document.querySelector(".wrapper");
		form.appendChild(DOM.color);
		document.querySelector(".btn-color").innerHTML = "Del color";
		document.querySelector(".btn-color").classList.toggle("bckgrnd");
		DOM.color = null;
	}
	console.log(DOM.color);
}