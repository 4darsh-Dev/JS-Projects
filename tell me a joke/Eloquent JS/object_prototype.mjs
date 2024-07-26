console.log(Object.getPrototypeOf({"key": []}))

console.log(Array.prototype)

// GODS programming 
let protoHuman = {
    greet(line){
        console.log(`The ${this.type} Human says ${line}`);
    }
}

function makeHuman(type){
    let newHuman = Object.create(protoHuman);
    newHuman.type = type;
    return newHuman;
}

console.log((manyHumans = ["Beautiful", "Arrogrant", "Selfish"].map((humanType) =>{
    return makeHuman(humanType);

}))
)

function Human(type){
    this.type = type;
}

let weirdHuman = new Human("weird");
console.log(weirdHuman)


export {protoHuman, makeHuman};