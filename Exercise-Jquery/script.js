$(() => {

    // exercise 1

    $(document).ready(()=>{
        $(document).mousemove((event)=>{ 
          $(`.mouse`).text("X: " + event.pageX + ", Y: " + event.pageY); 
        });
      });


    // exercise 2

    //  $(document).ready(function(){
    //     $("#input01").focusout(function() { // focusout method to bind function
    //       $(this).css("background-color", "#FFFFCC");
    // });
        
    // });
    
    //   exercise 3

    $( ".par" ).click(function() {
        $( this ).fadeTo( "slow" , .500 );
      });

// exercise 4

clicked = true;
$( ".btn" ).click(function() {
    
    $( ".div1" ).fadeToggle( 1600, "linear" );
    $( ".div2" ).fadeToggle( 2000, "linear" );
    $( ".div3" ).fadeToggle( 3000, "linear" );
    if(clicked){
        $(this).val('Show Divs');
        clicked  = false;
    } else {
        $(this).val('Hide Divs');
        clicked  = true;
    }   
  });



// exercise 5

    $(document).ready(function(){
        $(".divv").mouseenter(function(){
          $(".divv").animate({width: '200px'}, 1000)
        });
        $(".divv").mouseleave(function(){
          $(".divv").animate({width:'400px'},1000)
        });
      });


    //   exercise 6

   let inputVal = $(`.val`);
   let tblBody =  $(`.tbody`);
    let firsName = $(`#firstName`);
    let lastName = $(`#lastName`);
    let password = $(`#password`);
    let email = $(`#emailInput`);
    $(document).ready(function(){
        $(".btn2").click(function(){
                if(!inputVal.val()){
                    $(`.error`).append(`<p>***all fields are required***</p>`)
                }
                else{
                    tblBody.append(`<tr><td>${firsName.val()}</td>
                    <td>${lastName.val()}</td>
                    <td>${password.val()}</td>
                    <td>${email.val()}</td>
                    </tr>`)
                    
                }
            })})









})

   