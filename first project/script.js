console.log("..app started...");

function callAPI(){
    // fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=804802ad8e8d4549a7ee5b2ca8b227a8")           //api for tesla news
    // fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=804802ad8e8d4549a7ee5b2ca8b227a8")   //api for major headlines in india
    // .then((res)=>{
    //     console.log(res);
    // })

    ///........json
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=804802ad8e8d4549a7ee5b2ca8b227a8")   //api for major headlines in india
    
    
    // .then((res)=>{
    //     res.json().then((data)=>(renderUI(data)
    //     ));
    // }) 


    .then((res)=>{
        return res.json();
    }) 
    .then ((data)=>{
        renderUI(data)
    })
}


function renderUI(data){
    const root = document.getElementById("root");
    
    //getting data from article
    const articles = data.articles;   
    // console.log(data);

    //getting first article


    for(let i = 0;i<articles.length;i++){

        const ar = articles[i]; 
        console.log(ar);


        // creating parent div
        const div = document.createElement("div");
        div.setAttribute("class","news-card");
        // div.innerHTML = "card"
    
        //creating h3 heading for article
        const h3 = document.createElement("h3");
        h3.innerText = ar.title;
        div.appendChild(h3);
    
        //creating image in div
        const img = document.createElement("img");
        img.src = ar.urlToImage;
        div.appendChild(img);
    
        // div.innerText = ar.title;
        const a = document.createElement("a");
        a.innerText = "read more...."
        // a.href= ar.url;
        
        root.appendChild(div);
    }
}
// renderUI();
callAPI();
