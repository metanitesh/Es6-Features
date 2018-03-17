'use strict';

var  arr = [1,2];
// arr.fill(900)

console.log(arr)

arr.copyWithin(1,0)
console.log(arr)

//Map and WeakMap.
let employee = {name : "nitesh "}
let employee2 = {name : "sanjeev "}

let employees = new Map();
employees.set(employee, "abc");
employees.set(employee2, "ab");

console.log(employees);

let employeesWeak = new WeakMap([[employee, 'abcd'], [employee2, 'abcde']]);
console.log(employeesWeak);

//Set and WeakSet.
let perk = new Set(['car', 'boat']);
console.log(perk)

let perkWeak = new WeakSet([{
	name: 'car'
}, {
	name: 'boat'
}])

//subclass.
class perkSub extends Array{

}

let a = new  perkSub([1,2,4])

console.log(a instanceof perkSub);