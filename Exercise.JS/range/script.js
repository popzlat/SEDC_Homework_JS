// exercise 06   Range


let range = (start, end) => {

    const length = end - start;
    return Array.from({ length }, (_, i) => start + i);
}

// Test 
console.log(range(20,30));
console.log(range(10,40));
console.log(range(55,65));
