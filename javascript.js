$(function(){

  $("#homing").delay(2000).fadeIn();

  $('#homing_close, #no_cookie, #homing .overlay').click(function(){

    $('#homing').fadeOut(300);

  });

});