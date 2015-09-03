$(document).ready(function(){

  var count = 0;

  $("div").click(function(){
    // console.log($(this).html());

    if(!$(this).hasClass('highlighted')){
      count += parseInt($(this).html());
    }
    else{

      count -= parseInt($(this).html());

    }
    $(this).toggleClass('highlighted');



    console.log(count);
    $('#count').html(count);

  });
  //  $('div').mouseenter(function() {
  //      $(this).animate({
  //          height: '+=10px'
  //      });
  //  });
  //  $('div').mouseleave(function() {
  //      $(this).animate({
  //          height: '-=10px'
  //      });
  //  });
  //  $('div').click(function() {
  //      $(this).toggle(1000);
  //  });
});
