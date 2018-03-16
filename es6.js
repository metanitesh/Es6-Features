//let/constant 
let name = "niyes "
{
	name  = "some"
}

const MA = 10;

console.log(name);

//fat arrow
let getPrice = () => 5.99;
let getPrice2 = count => count*2;
let getPrice3 = count => {
	let v1 = 10;
	return v1;
}
console.log(getPrice());
console.log(getPrice2(2));

//default.
var init = function(price = 20){
	console.log(price)
}
init();



//spread
let foo =  (...param) => param;
console.log(foo ("one", "two"))

let price = [12, 20, 14];
console.log(Math.max(...price));

console.log(..."1,2,3")
