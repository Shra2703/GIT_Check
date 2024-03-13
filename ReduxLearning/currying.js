// console.log("SHraddha")

function sum(x){
    return function (y){
        return x + y
    }
}

let sumOf2 = sum(2);
console.log(sumOf2(3))
console.log(sumOf2(4))