// intro..............................................................................
// var message= 'hello world';
// console.log(message);

// var age = 19;
// age = 'done';
// console.log(age); //this is the example of losely type language

// console.log(helow)

// console.log(message);
// console.log('hello');


//functions...........................................................................
// function env(){
//     var message= 'hello world';
//     console.log(message);
    
//     var age = 19;
//     age = 'done';
//     console.log(age);
// }
// env();


//let.............................................................................
// {

//     let message = "hello";
//     message = 12;
//     console.log(message);
// }
// console.log(message)



// const..............................................................................
// alert("hello");
// const messag='hello';
// messag = 'skip';
// console.log(message);


// check datatype
// let age = 29
// console.log(typeof(age))


//  Note:JS have 8 types of datatypes..................................................



//array in js..........................................................................
// let arr = ['a','b']
// arr[0] = 'abcd'
// console.log(arr)

// type conversion in js...............................................
// let a = '23';
// let b = 12;
// let c = b+a;
// console.log(c);

// let aa = 23;
// let bb = '12';
// let cc = aa - bb;
// console.log(cc)


// let aaa = '23';
// let bbb = 12;
// let ccc = b - (-a);
// console.log(ccc);


// type checking in js.............................................................
// let a = '12'
// let b = 123

// let c = ['a','b']
// let cpy = [...c];    //this provide the address of new array which he make
// console.log(cpy)

// if(a=b)
// {
//     console.log('yes')
// }
// else
// {
//     console.log('no')
// }
// if(a==b)
// {
//     console.log('yes again')
// }
// else
// {
//     console.log('no again')
// }


// template literals.........................................................................

// let str = 'khan';
// let usrname = `my name is: ${str}`; // this $ and ` ` is used because it is the efficient way then use of + sign for concatination
// console.log(usrname)



// fucntion in js.............................................................................
// function print(str){
//     console.log(str);
// }
// const s = 'hello';
// print(s);


// function sum(a, b){


    // console.log(a+b);         //output of this line is NaN
//     if(a&&b){
//         console.log(a+b);
//     }
//     else{
//         console.log(a);
//     }

// }
// sum(10);


// arrow function............................................................................
// function declaration
// function print()
// {
//     console.log('--');
// }

// // fucntion assignment (named)
// const b = function print()
// {
//     console.log('--');
// }

// // fucntion assignment (anonymous)
// const bb = function ()
// {
//     console.log('--');
// }

//arrow fucntion assignment....................................................................
                                                      // question: written a value from arrow function
// const bbb =  () => 
// {
//     console.log('bbb');
// }

// bbb();


//switch case in js.................................................................

// let a = 2;
//  switch(a)
//  {
//     case 1:
//         {
//             console.log('one');
//         }
//     case 2:
//         {
//             console.log('two');
//             break;
//         }
//     case 3:
//         {
//             console.log('three');
//         }
//     default:
//         {
//             console.log('enter none');
//         }
// }
// object in js...........................................................................


// const obj = new Object();
// obj[12] = 'twelve';
// obj[1] = 'one';
// obj[2] = 'two';
// obj[3] = 'three';
// console.log(obj);


// const obj = {};          //another wayh to declare object in js
// obj[12] = 'twelve';
// obj[1] = 'one';
// obj[2] = 'two';
// obj[3] = 'three';
// console.log(obj);


// const obj = {                       //another way to declare object and put values in it
//     1:'one',                            
//     'name':'kartikey',
//     12:'twelve'
// };
// console.log(obj);



const obj = {                       //another way to declare object and put values in it
    1:'one',                            
    'firstname':'kartikey',
    'lastname':'raghuvanshi'
};

const fulname1 = obj.firstname + ' ' + obj.lastname;
console.log(fulname1);
// const fulname2 = `${firstname} + ${lastname};`
// console.log(fulname2);



//prompt..................................................................................

const x = prompt('please enter name');
console.log(x);
console.log(obj[x]);          //take input from object
