//exercise 02    Christmass Tree


let drawChristmassTree = function(width,height){
for (let i = 0; i < width; i++) {
   for (let j=width-1; j>i; j--) {
      document.write("&nbsp&nbsp"); 
   }
   for (let k=0; k<=(i*2); k++) {
      document.write("*"); 
   }
   document.write("<br>");
}
for (let i=0; i<height; i++) {
    for (let j=0; j<(width*2)-3; j++) {
        document.write("&nbsp");
    }
    document.write("*<br>");
}
}
drawChristmassTree(15,5);