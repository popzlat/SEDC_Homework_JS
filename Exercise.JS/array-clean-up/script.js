// exercise 01        Array Clean Up


let array = [NaN, 0, 15, true, -22, false, '',undefined, 47, null];

let cleanUp = array.filter(function (x) {
    return x === 0 || x ;
});

console.log(cleanUp);