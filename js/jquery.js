$(function() {

  $('#aboutme').click(function(){

    $('.about-container').fadeIn();

  })
   
  $('.fa-times').click(function(){
    $('.about-container').fadeOut();
  })

  

  $('header').hover(
    function() {
      $('.hello').fadeIn(1500);

    },
    function() {
      $('.hello').fadeOut();
    }
  );

  $('.menu li').hover(

    function() {
      $(this).css('background-color', 'white').css('color', 'turquoise');
    },
    function() {
      $(this).css('background-color', 'turquoise').css('color', 'white');
    }
  );

  $('.menu a').click(function() {

    var id = $(this).attr('href');
    var position = $(id).offset().top;

    $('html, body').animate(
      {scrollTop: position}, 500);
  });

  

$(window).on('load scroll',function (){
  $('.animation').each(function(){
    //ターゲットの位置を取得
    var target = $(this).offset().top;
    //スクロール量を取得
    var scroll = $(window).scrollTop();
    //ウィンドウの高さを取得
    var height = $(window).height();
    //ターゲットまでスクロールするとフェードインする
    if (scroll > target - height){
      //クラスを付与
      $(this).addClass('active');
    }else{
      $(this).removeClass('active');
    }
  });
});

$('#scroll-btn').click(function() {

  $('html, body').animate({
    scrollTop: 0}, 500);
});


 
  $(window).scroll(function () {
    var ScrollStart = $('#scroll-btn');
    if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
        ScrollStart.fadeIn();
    } else {
        ScrollStart.fadeOut();
    };
});

$('#more').click(function() {

  $('.more').fadeIn();
  $('.greet').fadeOut();
  $('#more').fadeOut();
});

$('.close').click(function() {

  $('.more').fadeOut();
  $('.greet').fadeIn();
  $('#more').fadeIn();
});




});
