// import {protoHuman, makeHuman} from "./object_prototype.mjs";
// symbols

let newSym = Symbol("name");

// let newHuman = makeHuman("good");

// protoHuman.prototype[newSym] = 55;

// console.log(newHuman[newSym]);

console.log(newSym)


// iterators interface

// for/of loop

let newIter = "Adarsh"[Symbol.iterator]();

// buggy 
const iterFunc = ((myobj, iter)=>{
    console.log("I am called")
    while(iter.next().value != undefined){
        console.log(iter.next())

    }
})
iterFunc("Adarsh", newIter);

console.log((newIter))

