

$(function(){
  $(".next").click(function(){
    var bla = $('.vd-select').val();
 $('#content-one').html(bla);
}); //this ends click f/n 
  
   $(".next").click(function(){
    var box = $('.vd-input').val();
  $('#content-two').html(box);
});
     
}); //this ends the doc ready f/n
