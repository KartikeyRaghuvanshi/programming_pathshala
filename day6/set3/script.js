// console.log("start")

// setTimeout(() => { console.log("timeout1...")}, 0)
// console.log("end")
// console.log("second")
// console.log("second")

//.....set time out within set time out........
// setTimeout(() => { setTimeout(() => { console.log("timeout2...")}, 0)}, 0)


// //..........call back function..............
// function createOrder(x,fn){
//     console.log(x)
//     // fn('123Id');
//     setTimeout(() => { fn('123Id')}, 2000)
// }

// function makePayment(orderId){
//     console.log(orderId);
// }

// createOrder('soap',makePayment);


//........create new promise ..................
// const pr = new Promise((resolve,rejected)=>{
//     //logic
//     if(true)
//     {
//         setTimeout(() => { resolve();}, 10000)
//         // resolve();
//     }
//     else{
//         rejected()
//     }
// });


// console.log(pr)




//---------------------------


// setTimeout(() => {console.log('first timeout')
    
// }, 0);

// const pr = new Promise((resolve,reject)=>{
    
//         //for resolved------------------
//     // setTimeout(() => {resolve("done");}, 5000);

//         //for rejected------------------
//     setTimeout(() => {reject("error is detected");}, 0);
// });

// setTimeout(() => {console.log('first timeout')
    
// }, 0);

// // console.log(pr);

// pr.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
    
//        //to print in console------------------- 
//     console.log(err);

//        // to show dialog box----------------------
//     // alert(err);
// })

//..............................................................
setTimeout(function abc() {
    console.log('i am one')
}, 0);

const pr = new Promise((res , rej)=>{
    setTimeout(()=>{
        res('done')
    },0);
})

pr.then(function b(res){
    console.log('promise completed',res);
});

setTimeout(function xyz() {
    console.log('i am two')
}, 0);