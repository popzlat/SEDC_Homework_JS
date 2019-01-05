// exercise 06   Range


let range = (start, end) => {

    const length = end - start;
    return Array.from({ length }, (_, i) => start + i);
}