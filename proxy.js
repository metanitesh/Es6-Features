class Employee {

}

var e = new Employee();

var p = new Proxy(e, {
	get : function(e, prop, reciever){
		return "attampted access"
	}
})

console.log(p.salary)