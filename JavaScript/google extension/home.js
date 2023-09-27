let myLeads = []
const inputEL = document.getElementById("input-el")
const ulEL = document.getElementById("ul-el")
const delAll = document.getElementById("del")

const inputBtn = document.getElementById("input-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    showLeads()
}

function showLeads(){
    let listItems = ""
    for (let i = 0; i < myLeads.length; i ++){
        listItems += `
        <li>
        <a target='_blank' href='${myLeads[i]}'>
            ${myLeads[i]}  </a>
        </li>`

}
ulEL.innerHTML = listItems
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEL.value)
    inputEL.value =""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
   
    console.log( localStorage.getItem("myLeads"))
    showLeads()
})







delAll.addEventListener("click", function(){
    localStorage.clear()
    myLeads = []
    console.log("Button clicked")
    showLeads()
})