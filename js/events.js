//define functions here
$(document).ready(function(){

// call functions here
getIt();
frameIt();
submitIt();
pressIt();

});

<<<<<<< HEAD
function getIt(){
  $('p').on('click',function(){
    alert("Hey!");
  });
}

function frameIt(){
  $('img').on('load',function(){
    $(this).addClass('tasty');
  })
}

function submitIt(){
  $('form').on('submit',function(){
    alert('Your form is going to be submitted now.');
  });
}

function pressIt(){
  $('#typing').on('keydown', function(key){
    if(key.which == 71 )
    {
      alert('You pressed G');
    }
    
  });
}
=======
function getit(){
  &(document).on(’click’,function(){
    alert("Hey!");
  }
}
>>>>>>> dad277dfdebb5e087398c5b02d52bd83a0cae117
