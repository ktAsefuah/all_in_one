let myLeads = []
const inputEL = document.getElementById("input-el")
const ulEL = document.getElementById("ul-el")


const inputBtn = document.getElementById("input-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    showLeads()
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEL.value)
    inputEL.value =""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
   
    console.log( localStorage.getItem("myLeads"))
    showLeads()
})


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



const delAll = document.getElementById("del")
delAll.addEventListener("click", function(){
    console.log("Button clicked")
    localStorage.clear
})