let myLeads = ["psdhvav", "vahudvhavhahv", "vjd"]
const inputEL = document.getElementById("input-el")
const ulEL = document.getElementById("ul-el")


const inputBtn = document.getElementById("input-btn")
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEL.value)
    console.log(myLeads)
})

for (let i = 0; i < myLeads.length; i ++){
    ulEL.innerHTML += "<li>" + myLeads[i] + "</li>" 

}



const delAll = document.getElementById("del")
delAll.addEventListener("click", function(){
    console.log("Button clicked")
})