


//exercise 04  Number checker


var num = $(`.numberInput`);

let  myNumber = {
    isEven  : function (num) {
    if(num % 2 === 0){
        
    return "Even";
    }
    else{
        return "Odd";

    }
 },
 
 isPositive  : function () {

    let result;

    if (num >= 0) {
        result = " Positive";
    } else if (num < 0) {
        result = " Negative";
    }
    return result;
},
numDigits : function (){
    return num.toString().length;
}
}

// function getNumberStats(number){
//     document.write(myNumber.isEven());
    
//     document.write(myNumber.isPositive());
//     document.write(myNumber.numDigits());
// };

$(document).ready(function(){
    $( ".btn" ).click(function() {
       $("body").append(`<p> The Number${num}is a ${myNumber.numDigits(122)} its ${myNumber.isEven(122)}
       and its a ${myNumber.isPositive(122)} </p>`);

    })})