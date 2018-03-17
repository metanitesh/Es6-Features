//reflect API.
console.log(typeof Reflect) 

class Resturant {
	constructor (param){
		console.log(param)
	}
}

let r = Reflect.construct(Resturant, ["one"]);

console.log(r instanceof Resturant);

//Reflect.apply