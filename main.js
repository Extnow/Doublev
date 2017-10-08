jQuery(document).ready(function(){

  function showProduct (tab, cat1, cat2, cat3, img, background) {
    $(tab).click(function(){
      $(cat1).show("500");
      $(cat2).hide();
      $(cat3).hide();
      $('.section__products').css('background', 'url(img/' + img + ') no-repeat 50%,' + background );
    })
  };

  function changeActiveTab () {
    $(".tab").click(function(e) {
      e.preventDefault();
      $(".tab").removeClass('tab-active');
      $(this).addClass('tab-active');
    })
  }

  showProduct('#tab-mat', '#materials', '#final_product', '#technology', 'pr1_bg.png', '#e0dede');
  showProduct('#tab-prod', '#final_product', '#materials', '#technology', 'pr2_bg.png', '#ddddde');
  showProduct('#tab-tech', '#technology', '#final_product', '#materials', 'pr3_bg.png', '#e8e8e8');
  changeActiveTab();

  // $('#catalog').click(function(e) {
  //   $('.menu').css('visibility', 'visible');
  // });
  
});
