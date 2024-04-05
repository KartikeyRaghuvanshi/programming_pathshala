// console.log("hello")
// let a = new String("new")           //declaring string using string object
// let b = "neew"
// if(a==b){
//     console.log('same')
// }
// else{
//     console.log('not same')
// }

//...........................................................................
// const obj = {
//     anme: 'ajay',
//     last: 'singh',
// }

// console.log(obj)
// document.write("hello")


//json............................................................
// const obj = {
//     "name": "ajay",
//     "last": "singh"

// }

// obj.age = 20;
// console.log(obj)




// .................................................................
// const arr = [1,2,3,4]
// arr[1] = 88

// // arr[20] = 87
// arr.push(12)
// console.log(arr)



// check if it is array array ..................................................................
// const obj = {
//     "name": "ajay",
//     "last": "singh"

// }
// const arr = [1,2,3,4]
// console.log(Array.isArray(obj))
// console.log(Array.isArray(arr))

// checkIfObject([1,2,3,4])
// checkIfObject({"name":"ajay"})

// console.log(typeof(obj))
// console.log(typeof(arr))



// .........................................................................................
// const obj = {
//     "name": "ajay",
//     "last": "singh"

// }
// function checkifobj(x)              //check if argument is object or not
// {
//     if(Array.isArray(x))
//     {
//         console.log("not obj")
//     }
//     else if(typeof(x)== "object")
//     {
//         console.log("object")
//     }
//     else{
//         console.log("not object")
//     }
// }

// checkifobj(obj)


// ...............................................................................................

// const arr = ['name',2]
// const obj ={
//     'name':"ajay",
//     1:'else'
// };

// for(i=0;i<2;i++){

//     console.log(obj(i))
// }

// ..........................................................................................
// .....................................DOM........................................


// console.log(window)
// console.log(innerHeight)
// console.log(innerWidth)

// console.log(window.innerHeight)
// console.log(windowinnerWidth)

// console.log(window.document)
// console.log(window)


// console.dir(window.document)
// console.dir(window)


// selectors..................................................................................
// const res = document.getElementsByTagName('h3')
// console.log(res)


// const res = document.getElementById('he');
// console.log(res);


// query selector
// const res= document.querySelectorAll('h3#first');
// console.log(res)


// const res = document.getElementById('first')
// res.innerText = "hello world"
// console.log(res)


// const res = document.getElementsByTagName("div")
// res[0].innerHTML = "<h3>hello world</h3>"
// // res[0].innerHTML = "<p>hello world</p>"
// console.log(res)

// insert whole document using js....................................................................

// const ne = document.createElement("h3")
// console.log(ne);
// ne.innerText = "dynamic text"
// document.body.appendChild(ne)

// const firstdiv = document.getElementsByTagName('h3')
// firstdiv[0].appendChild(ne)


// remove child form html using js..............................................

//by using id
// const parentDiv= document.getElementById('first')
// var childtoremove = parentDiv.children[0]
// parentDiv.removeChild(childtoremove)


//by using tag name........not completed
// const me = document.getElementsByTagName('p')
// const remove = me.children[0]
// me.removeChild(remove)

//.........................................................................................

