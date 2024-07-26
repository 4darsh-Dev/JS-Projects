
class Temperature{
    constructor(celcius){
        this.celcius = celcius;
    }

    get fahreheit(){
        return this.celcius * 1.8 + 32;
    }

    set fahreheit(value){
        this.celcius = (value - 32) / 1.8;
    }

    static fromFahrenheit(value){
        return new Temperature((value -32) / 1.8);
    }
}

let temp = new Temperature(22);
console.log(temp.fahreheit);

temp.fahreheit = 86;

console.log(typeof(Temperature), typeof(temp));

