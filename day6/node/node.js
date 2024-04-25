// function sum(a,b)
// {
//     console.log(a+b);
// }

// module.exports = sum;

//--------------------------------------
function sum(a,b){
    console.log(a+b);
}
function sub(a,b){
    console.log(a-b);
}

// module.exports = {
//     sum: sum,
//     sub: sub,
// }

const name = 'ajay'
module.exports = {
    sum,
    // 'name':name,
    name, //both 'name':name, and name, are equal
}