let myLeads = []
const inputEL = document.getElementById("input-el")
const ulEL = document.getElementById("ul-el")


const inputBtn = document.getElementById("input-btn")
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEL.value)
    inputEL.value =""
    showLeads()
})

function showLeads(){
    let listItems = ""
    for (let i = 0; i < myLeads.length; i ++){
        listItems += "<li><a href='#'>" + myLeads[i] + "</a></li>" 

}
ulEL.innerHTML = listItems
}



const delAll = document.getElementById("del")
delAll.addEventListener("click", function(){
    console.log("Button clicked")
})