class Humans{
    constructor(type="stranger"){
        this.type = type;
    }

     speak(line){
        console.log(`The ${this.type} Human says ${line}`);

    }
}

let h1 = new Humans("body-builder");
h1.speak("hello")
console.log(typeof(h1.speak("love")))


// overriding properties 
// added / override if exists automatically 
Humans.prototype.size = "small";

console.log(h1.size);