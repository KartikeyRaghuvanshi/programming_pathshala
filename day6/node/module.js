// const now = require("./node");
// now(20,3);

//---------use with obj.---------------
// const obj = require("./node");
// obj.sum(2,4)
// console.log(obj.name);

//.............using without obj call(de-structuring)..........................
const {sum,name} = require("./node");
sum(2,4);
console.log(name);