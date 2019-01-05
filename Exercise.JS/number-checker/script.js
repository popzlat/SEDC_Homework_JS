


//exercise 04  Number checker


let num = $(`.numberInput`).val();

let  myNumber = {
    isEven  : function (num) {
    if(num % 2 === 0){
        
    return "Even";
    }
    else{
        return "Odd";

    }
 },
 
 isPositive  : function (num) {

    

    if (num >= 0) {
        return" Positive";
    }  if (num < 0) {
       return " Negative";
    }
    
},
numDigits : function (num){
    return num.toString().length;
}
}


$(document).ready(function(){
    $( ".btn" ).click(function() {
       $("body").append(`<p> The Number${num}is a ${myNumber.numDigits(num)} its ${myNumber.isEven(num)}
       and its a ${myNumber.isPositive(num)} </p>`);

    })})
