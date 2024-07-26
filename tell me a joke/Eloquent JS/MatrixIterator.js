// Matrix with iterator interface

class Matrix{
    constructor(width, height, element=(x,y)=>undefined){
        this.width = width;
        this.height = height;
        this.content = [];

        for(let y=0; y<height; y++){
            for(let x=0; x<width; x++){
                this.content[y* width + x] = element(x, y);
            }
        }
    }

    get(x,y){
        return this.content[y * this.width +x];
    }

    set(x, y, value){
        this.content[y * this.width +x] = value;
    }


}

// iterator class

class MatrixIterator{
    constructor(matrix){
        this.x = 0; 
        this.y =0;
        this.matrix = matrix;

    }

    next(){
        if(this.y == this.matrix.height) return {done:true};
        let value = {
            x: this.x,
            y: this.y,
            value : this.matrix.get(this.x, this.y)
        }
        this.x++;
        if(this.x == this.matrix.width){
            this.x = 0;
            this.y++;
        }
        return {value, done:false};

    }
}

// setting up matrix class to be iterable

Matrix.prototype[Symbol.iterator]  = function(){
    return new MatrixIterator(this);
}


// looping through the matrix
// function as arg , callback
let matrix = new Matrix(2,2, (x, y) => `Value ${x}, ${y}`);

for(let {x, y, value}  of matrix){
    console.log(x, y, value);

}

// Inheritance

class SymmetricMatrix extends Matrix{
    constructor(size, element = (x,y) => undefined){
        super(size, size, (x,y) =>{
            if(x < y) return element (y, x);
            else return element(x, y);
        });
    }

    set(x,y, value){
        super.set(x, y, value);
        if(x != y){
            super.set(y, x, value);
        }
    }
}


let symMat = new SymmetricMatrix(5, (x, y) => `${x}, ${y}`);
console.log(matrix.get(2, 3));