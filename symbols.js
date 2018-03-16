'use string'

values = [8, 10, 12]
values[Symbol.isConctaSpreadable] = false;
console.log([].concat(values));


