const el = document.getElementById("checkbox1");

const func =()=>{
	const form = document.getElementsByClassName("main-block")[0]
	if (el.checked){
		form.style.backgroundColor = '#01291f'
	}
	else{
		form.style.backgroundColor = "red";	
	}
}


const el2 = document.getElementById("checkbox2");
const func2 =()=>{
	const form = document.getElementsByClassName("main-block")[0]
	if (el2.checked){
		form.style.display = 'block'
	}
	else{
		form.style.display = "none";	
	}
}
// while (1){
// 	func();
// }

