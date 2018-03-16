'use strict';

//Let, const and block.
let proudctId = 1;
const MAX = 50;
{
	let proudctId = 60;
}
console.log(proudctId, MAX)

//arrow function, this refers to context.
let getPrice = (count) => count*2;
console.log(getPrice(3))

//setting default to parameters.
let getPriceDefault = (count = 30) => count*2;
console.log(getPriceDefault());

//rest and spread parameter.
let showCategories = (proudctId, ...categories)=> {
	return categories;
}
console.log(showCategories(1, "clothes", "shoes"));

let price = [12,4,5];
console.log(Math.max(...price))


//object literal extension.
let method = "prop";
let productView = {
	[method + '--001'] (){
		console.log(method);
	}
}
productView['prop--001']();

//for of loop
var count = 0;
for (let code of [1,2,4]){
	count++;
}
console.log(count);

//template literal
let invoice1 = '1243';
console.log(`invoice : ${invoice1}`);

//destructuring.
let salary = [32, 4, 40, 5];
let [low, high] = salary;

console.log(low);

