let person = {
    name : "Kwesi",
    age : 27,
    country : Ghana
}
function player(){
    console.log(person.name + "is " + person.age + "years old and lives in " + person.country)
}

let age = 15

if (age < 6){
    console.log ("free")
}else if (age < 18){
    console.log ("Child discount")
}else if (age < 27){
    console.log("student discount")
}else if (age < 67){
    console.log("Full price")
}
else{
    console.log("Senior citizen discount")
}


console.log("Largest counties in the world")
let largeCountries = ["China","India", "USA", "Indonesia", "Pakistan"]

for ( let i = 0; i < largeCountries.length; i++){
    console.log("- " + largeCountries(i))
}