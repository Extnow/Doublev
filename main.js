jQuery(document).ready(function(){

  $('#tab-mat').click(function(){
    $('#materials').show("500");
    $('#final_product').hide();
    $('#technology').hide();
    $('.section__products').css('background', 'url(img/pr1_bg.png) no-repeat 50%, #e0dede');
  })

  $('#tab-prod').click(function(){
    $('#materials').hide();
    $('#final_product').show("500");
    $('#technology').hide();
    $('.section__products').css('background', 'url(img/pr2_bg.png) no-repeat 50%, #ddddde');
  })

  $('#tab-tech').click(function(){
    $('#materials').hide();
    $('#final_product').hide();
    $('#technology').show("500");
    $('.section__products').css('background', 'url(img/pr3_bg.png) no-repeat 50%, #e8e8e8');
  })

  $(".tab").click(function(e) {
    e.preventDefault();
    $(".tab").removeClass('tab-active');
    $(this).addClass('tab-active');
  })

  $('#catalog').hover(function(e) {
    $('.menu').css('visibility', 'visible');
  });
  

});
