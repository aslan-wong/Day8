//console.log(document.getElementById("textInput").value)
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", addContent);


function addContent(){
    console.log("it's working");
    const text = document.getElementById("textInput").value;
    /*const result = document.getElementById("result");
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode(text);
    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById("result");
    document.body.insertBefore(newDiv, currentDiv);*/
    result.innerHTML += `<h1>${text}</h1>`
    

}
//API endpoint
/*fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))*/

async function fetchData(){
    const data =  await fetch('https://jsonplaceholder.typicode.com/todos/')
    console.log(data)
    const  json = await data.json()
    console.log(json)
    console.log(json.length)

    const titleList = document.getElementById("titleList")
    for(let i=0; i<json.length; i++){
        titleList.innerHTML += `<h3>${json[i].title}</h3>`
        
    }
}

fetchData()
