//class | constructor | inheritance

class Project {
	constructor (param){
		this.name = "project"
		console.log("constructor" + param);
	}

	static getDefualtId (){
		return 1;
	}

	getTaskCount (){
		return 50;
	}
}

class Software extends Project{

	constructor (param) {
		super(param);	
		this.name = this.name + "software";
		console.log("software constructor", this.name);
	}
	getTaskCount (){
		return 70;
	}
	getTaskCount (){
		return super.getTaskCount() + 10;
	}
}

let p = new Software("hello");
console.log(p.getTaskCount())

//object inheritance.
let project = {
	getTaskCount (){
		return 50;
	}
}

let softwareProject = {
	getTaskCount(){
		return super.getTaskCount() + 7;
	}
}

Object.setPrototypeOf(softwareProject, project);
console.log(softwareProject.getTaskCount())
console.log(Project.getDefualtId())