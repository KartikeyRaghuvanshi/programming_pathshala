// const firstnamechange = ()=>{
//     console.log('firstname')
// }

// const firstnamechange = (e)=>{
//     console.log(e);
// }

// .........................................................
// const firstnamechange = (e)=>{
//     const val = e.target.value;
//     if(val.length>3)
//     {
//         console.log('correct')
//     }
// }


//........................................................
// function submitform(e) {
//     e.preventDefault();
//     console.log(e.target.value);

// }

// function submitform(e) {
//     e.preventDefault();
//     const hello = e.target.value;
//     console.log(e);

// }


// .....................................................
// function submitform(e) {
//     e.preventDefault();
//     // console.log(e.target.value);
//     const t = e.target
//     for(let i=0; i<t.length;i++)
//     {
//         console.dir(t[i].value)    //all input values
//     }

// }

//...............................................................

// function submitform(e) {
//     e.preventDefault();
//     // console.log(e.target.value);
//     const t = e.target
//     const res = {
//         hobbies: [],
//     };
//     for(let i=0; i<t.length;i++)
//     {

//         const ty = t[i].type;
//         if(ty!='submit'){
//             const vl = t[i].value
//             const nm = t[i].name

//             if(ty == 'checkbox' && t[i].checked){
//                 res.hobbies.push(vl)
//             }
//             if(ty!='checkbox'){
//                 res(nm)=vl;
//             }
//         }
//         // console.log(t[i].type)
//         // console.log(t[i].value)

//         // console.log(t[i].type,t[i].value);

//         // const ty = t[i].type
//         // const vl = t[i].value
//         // const nm = t[i].name
//         // console.log(ty,vl)
//         // if(ty=='checkbox')
//         // {
//         //     console.log(t[i].checked)
//         // }

        
//     }
//     console.log(res)

// }
function submitform(e) {
    e.preventDefault();
   
    const t = e.target
    const res = {
        hobbies: [],
    };
    for(let i=0; i<t.length;i++)
    {

        const ty = t[i].type;
        if(ty!='submit'){
            const vl = t[i].value
            const nm = t[i].name

            if(ty == 'checkbox' && t[i].checked){
                res.hobbies.push(vl)
            }
            if(ty!='checkbox'){
                res(nm)=vl;
            }
        }
     
    }
    console.log(res)

}