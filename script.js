





// "Array".padStart(10);
// "Array".padEnd(10);

// const fun = (a,
// 	b,
// 	c,
// 	d,
// 	) => {
// 	console.log(a);
// }


// let obj = {
// 	usr:"Me",
// 	name:"Artem",
// 	Surname:"Pidr",
// 	object:{inside:"hidden"}
// }

// Object.keys(obj).forEach((key, index)=>{
// 	console.log(key, obj[key], index);
// });


// Object.values(obj).forEach(value => {
// 	console.log(value);
// });


// Object.entries(obj).forEach(value => {
// 	console.log(value);
// });



// // Two different types of copy: shallow copy and deep copy

// let obj = {
// 	a: 'a',
// 	b:'b',
// 	c:{
// 		deep:"try and copy me"
// 	}
// };

// let clone = Object.assign({}, obj);
// let clone2 = {...obj};
// let superClone = JSON.parse(JSON.stringify(obj));

// obj.c.deep = "ha-ha-ha";

// console.log(obj);
// console.log(clone);
// console.log(clone2);
// console.log(superClone);










// Context vs scope
// Context tells us where we are in the object
// const object4 = {
// 	a: function(){
// 		console.log(this);
// 	}
// }


// class Player {
// 	constructor(name, type) {
// 		console.log(this);
// 		this.name = name;
// 		this.type = type;
// 	}
// 	itroduce (){
// 		console.log(`Hi a am ${this.name} i have ${this.type} type`);
// 	}
// }

// class Wizard extends Player {
// 	constructor(name, type){
// 		super(name, type)
// 	};
// 	play(){
// 		console.log(`Weeeeee i am a ${this.type}`);
// 	};
// };



// const wizard = new Wizard("Shelly", "Healer");
// const wizard2 = new Wizard("Shawn", "Dark Magic");

















// const double = []
// const newArray = array.forEach((num)=>{
// 	double.push(num * 2);
// });

// Map MUST have return statement;
// Map - returns all the elements in the original array, but also modifying them
// const array = [2,3,4,5,6];
// const mapArray = array.map(num => num * 2 );
// console.log(mapArray);


//Filter - filters by a condition what elements to return to array and what not
// const array = [22,13,14,55,36];
// const filterArray = array.filter(num => num > 15);
// console.log(filterArray);
// filterArray.forEach(num => console.log(num));

// Reduce
// accumulator can be specified as the first number  to deal with,
// that remembers the result of the former iteration


// const array = [2,3,4,5,6];
// const reduceArray = array.reduce((accumulator, num) =>{
// 	return accumulator + num;
// }, 1);
// console.log(reduceArray);



// // Closures
// const first = ()=>{
// 	const greet = "HI";
// 	const second = () =>{
// 		alert(greet);
// 	}
// 	return second;
// }

// const newFunc = first();
// newFunc();

// // Currying
// const multiply = (a, b) => a * b;
// const curriedMultiply = (a) => (b) => `New ${a} has ${b}`

// let res = curriedMultiply("Dog");
// let res2 = res("fluffy toy");
// console.log(res2);

// // Compose
// const compose = (f,g) => (a) => f(g(a));
// const output = (arg) => `The result is ${arg}`;
// const square = (a) => a**2:
// console.log(compose(output,square)(12));
