$(document).ready(function(){
  
  
  $('.container').mousemove(function(e){

    var x = e.pageX + 'px';
    var y = e.pageY + 'px';

    $('.cursor').css({'top':y, 'left':x});

});

  // var images = new Array('image_one.jpg', 'image_two.jpg', 'image_three.jpg', 'image_four.jpg', 'image_five.jpg');

  // setInterval(function(){

  //   var random = images[Math.floor(Math.random() * images.length )];
  //   $('.image').css('background','url(' + random + ')');

  // },2500);

});




