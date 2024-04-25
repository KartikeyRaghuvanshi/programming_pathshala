// const arr = [10,12,14]
// const ans = arr.forEach((a)=>{
//     console.log(a);
// });

// console.log(ans);


//------------------using map in array to print new arrya-------------------------
// map function create 
// const arr = [10,12,14]
// const ans = arr.map((a)=>{
//     console.log(a);
//     return a;
// });


// const ans2=arr.map(a=>a*2)
// console.log(ans);
// console.log(ans2);


//-----------------using parseInt in array--------------------------

// const arr = [10,12,14];
// const arr2 = [10,12,14];

// const arr3 = arr.map(a=>parseInt(a))

// -----------------pushing value in array---------------------------
// const arr = [10,12,34]

// const ans = arr.push(99)
// // arr.push(99)
// console.log(arr)

// -----------use of filter in array---------------------------------

// const arr = [10,12,34];
// const ans = arr.filter((a)=>{
//     if(a>20) return arr;
//     else return false;
// })

// console.log(arr);
// console.log(ans);

//---------------------------------------------
// -------filter on string array and selecting only name wchih contain letter i----------------------
// const arr = [
//     'delhi, india','mumbai, india','chennai, india','kolkata, india','pune,india','india','russia','texas,usa','shanghai,china','beijing, china'
// ]

// const ans = arr.filter((s)=>{
//     if(s.includes('i')){
//         return true;
//     }
//     else false;
// })
// console.log(ans);


// ----------------only city which is in india-------------------------------------


// const arr = [
//     'delhi, india','mumbai, india','chennai, india','kolkata, india','pune,india','india','russia','texas,usa','shanghai,china','beijing, china'
// ]

// const ans= arr.filter((a)=>{
//     const ns = a.toUpperCase();
// })
// console.log(ns);

//--------------------------------------
// const asn= arr.filter((a)=>{
//     const ns = a.toLowerCase();
//     if(ns.includes('india')){
//         return true;
//     }
//     else{
//         return false;
//     }
// });

//----------------------------------------

// const asn1= arr.filter((a)=>{
    
//     if(a.toLowerCase().includes('india')){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(ans);



//..............reduce..................................

// const arr = [10,22,34,50];
// const ans = arr.reduce((a,b,c,d)=>{
//     console.log(a,b,c,d);
//     return a+b;
// });


