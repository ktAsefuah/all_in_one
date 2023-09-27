let myLeads = []
const inputEL = document.getElementById("input-el")
const ulEL = document.getElementById("ul-el")
const delAll = document.getElementById("del")
const save = document.getElementById("save-btn")
const inputBtn = document.getElementById("input-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    show(myLeads)
}

save.addEventListener("click", function(){

    chrome.tabs.query({active: true, currentWindow: true}, function(tab){
    myLeads.push(tab[0].url)
    localStorage.setItem("myleads", JSON.stringify(myLeads))
    show(myLeads)

})    })

function show(leads){
    let listItems = ""
    for (let i = 0; i < leads.length; i ++){
        listItems += `
        <li>
        <a target='_blank' href='${leads[i]}'>
            ${leads[i]}  </a>
        </li>`

}
ulEL.innerHTML = listItems
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEL.value)
    inputEL.value =""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
   
    console.log( localStorage.getItem("myLeads"))
    show(myLeads)
})








delAll.addEventListener("click", function(){
    localStorage.clear()
    myLeads = []
    console.log("Button clicked")
    show(myLeads)
})