$(function(){
  /* Include html Files */
  $('.detail-header-include').load('../include/detail-header.html')
  $('.gnb-include').load('../include/gnb.html')
  /* Front Slider */
  $('.front-slider').slick({
    slidesToShow: 1,
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 4000,
  });
  /* Main page */
  $('.front-back .btn-market').click(function(){
    $(this).addClass('active')
    $(this).siblings('.btn-beauty').removeClass('active')
    
  })
  $('.front-back .btn-beauty').click(function(){
    $(this).addClass('active')
    $(this).siblings('.btn-market').removeClass('active')
  })
  /* Item Suggestion Slider */
  $('.good-deal-items').slick({
    slidesToShow: 3,
    dots: false,
    arrows: true,
    slideToScroll: 2,
  });
  /* Product Accodian */
  $('.product-accodian-more .detail').eq(0).show()
  $('.product-accodian-more .title').click(function(){
    $(this).next().toggle();
    $(this).toggleClass('active')
  })
  /* Log Insta Main img Slider */
  $('.insta-main-img .items').slick({
    slidesToShow: 1,
    dots: true,
  });
  /* Category Accordian */
  $('.category-menu-accordian .detail').eq(0).show()
  $('.category-menu-accordian .title').click(function(){
    $(this).next().stop().slideDown()
    $(this).siblings('.category-menu-accordian .title').next().
    stop().slideUp()
    $(this).addClass('active')
    $(this).siblings('.category-menu-accordian .title').removeClass('active')
  })
  /* product-order */
  $('.btn-order-choice').click(function(){
    $('.product-order-choice').hide()
    $('.product-order-info').show()
    $('.overlay-fold').show()
  })
  $('.btn-fold, .overlay-fold').click(function(){
    $('.product-order-choice').show()
    $('.product-order-info').hide()
    $('.overlay-fold').hide()
  })
  /* Search Result */
  $('.search-term .title .btn-all-clear').click(function(){
    $(this).parent().siblings('.search-term .history').hide()
  })

  /* Cart */
  $('.cart-header-inner .btn-all-close').click(function(){
    $(this).parent().siblings('.cart-items').hide()
  })
  $('.cart-item .title .btn-clear').click(function(){
    $(this).parent().parent('.cart-item').hide()
  })
  $('.cart-header-inner.fail .btn-clear').click(function(){
    $(this).parent().parent('.cart-item.fail').hide()
  })
})