// console.log('GEC START');
// // window.setTimeout();
// function printpretty(elem)
// {
//     console.log('prettystart');
//     let ans = 2+3;
//     console.log(ans);
//     console.log('prettyend');
//     console.log('------------------');    
// }

// //time is in milliseconds
// setTimeout(printpretty,2000);
// console.log('GEC END');

// const btn = document.getElementById('btn')
// btn.addEventListener("click",printpretty)


//....promise...................................................................
// console.log('START');
// const req = fetch("https://api.github.com/users/kartikey");
// console.log(req);
// req.then(()=>console.log('fetched'));
// console.log('END');

//--------------------
//dummy json

console.log('START');
fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
.then(res => console.log(res))
// .then(json => console.log(json))
console.log('END');


//------ same thing but above but in peaces
// console.log('START');
// const req = fetch('https://dummyjson.com/products/1')
// const res = req.then(res=> res.json())
// res.then((data)=>console.log(data))

// console.log('END');

//--------------------------------------------------

//json site

// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(json => console.log(json))
            