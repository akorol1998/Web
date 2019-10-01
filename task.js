let toRgb = (num) =>{
	let arr = [];
	let r = num>>16;
	arr.push(r);
	r = num << 16;
	r = r >>> 24;
	arr.push(r);
	r = num << 24;
	r = r >>> 24;
	arr.push(r);
	return (arr);
}

let toHex = (mass) => {
	let arr = []
	arr.push(mass[0].toString(16));
	arr.push(mass[1].toString(16));
	arr.push(mass[2].toString(16));
	arr = arr.map((value)=> value.length === 1 ? "0".concat(value) : value);
	return (arr);
}

let convert = (num)=>{
	if (typeof(num) === "number")
		return toRgb(num);
	else return toHex(num);
};


// let answer = (arr,num)=>{
// 	if (arr.length){
// 		for(i in arr){
// 			for(j in arr){
// 				if (j != i && arr[i] + arr[j] == num)
// 					return ([arr[i], arr[j]]);
// 			}
// 		}
// 	}
// }

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

// console.log(answer(arr, 20));




// let cleanArray = (arr) =>{
// 	let bufArr = [];
// 	let present = 0;
// 	for(item of arr){
// 		present = 0;
// 		console.log(bufArr.length);
// 		for(let i=0;i<bufArr.length;i++){
// 			// debugger;
// 			if (typeof(bufArr[i]) === "number" && bufArr[i] === item){
// 				present = 1;
// 				bufArr[i] = [bufArr[i], item]
// 			}
// 			else if (typeof(bufArr[i]) === 'string' && typeof(item) === 'string'){
// 				present = 1;
// 				bufArr[i] = [bufArr[i], item];
// 			}
// 			else if (typeof(bufArr[i]) === "object" && bufArr[i].includes(item)){
// 				present = 1;
// 				bufArr[i].push(item);
// 			}
// 			else if (typeof(bufArr[i]) === "object" && typeof(bufArr[i][0]) === 'string' && typeof(item) === 'string'){
// 				present = 1;
// 				bufArr[i].push(item);
// 			}
// 		}
// 		if (!present)
// 		{
// 			bufArr.push(item)
// 		}
		
// 	}
// 	return bufArr;
// }

// let arr = [1,2,4,591,392,391,'5', 2,5,10,2,1,1,'3',1,20,20];

// arr = cleanArray(arr);
// console.log(arr);