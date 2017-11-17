jQuery(document).ready(function(){

  $('.slider').slick({
    dots: true,
    arrows: false
  });

  function showProduct (tab, cat1, cat2, cat3, img, background) {
    $(tab).click(function(){
      $(cat1).show("500");
      $(cat2).hide();
      $(cat3).hide();
      $('.products').css('background', 'url(img/' + img + ') no-repeat 50%,' + background );
    })
  };

  function changeActiveTab () {
    $(".products__tab").click(function(e) {
      e.preventDefault();
      $(".products__tab").removeClass('products__tab--active');
      $(this).addClass('products__tab--active');
    })
  }

  showProduct('.products__tab--mat', '.categories--materials', '.categories--final_product', '.categories--technology', 'pr1_bg.png', '#e0dede');
  showProduct('.products__tab--prod', '.categories--final_product', '.categories--materials', '.categories--technology', 'pr2_bg.png', '#ddddde');
  showProduct('.products__tab--tech', '.categories--technology', '.categories--final_product', '.categories--materials', 'pr3_bg.png', '#e8e8e8');
  changeActiveTab();
  
});
