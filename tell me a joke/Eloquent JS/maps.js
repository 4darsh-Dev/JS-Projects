// maps in js

let ages = new Map();

ages.set("Ajay", 42);
ages.set("Adarsh", 19);
ages.set("Astha", 22);

console.log("Astha age ", ages.get("Astha"))

if(!(ages.has("julia"))){
    ages.set("julia", 32);
}

console.log("Julia age ", ages.get("julia"))
console.log(typeof(ages))