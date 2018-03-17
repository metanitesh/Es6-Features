//iterator
let ids = [1, 2, 4];
let itr = ids[Symbol.iterator]()

console.log(itr.next())

//generator
function* process() {
    yield 8000;
    yield 8001;
}

var it = process();
console.log(it.next());

//promises
function doAsync() {
    let p = new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("resolving")
            resolve();
        }, 2000);
    })
    return p;
};

console.log(doAsync().then(function(){
	console.log("done")
}));

