// $(document).ready(function () {
//   $('body').html('<h1>Hello jQuery!!</h1>')
// });

// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });


// // スライドダウン
// $(document).ready(function(){
//   $('.box1').slideDown();
// });


// // スライドアップ
// $(document).ready(function(){
//   $('.box1').slideUp();
// });

// // 隠す
// $(function(){
//   $('.box1').hide();
// });


// 確認問題
$(function(){
  $('.box1').slideDown(function (){
    $('.box1').css({
      'background-color': '#0000FF',
      'height': '100px',
      'width': '200px'
    }).slideUp();
  });
});

// 回答
// $(function (){
//   $('.box1').slideDown(function (){
//     $('.box1').css({
//       'background-color': '#0000FF',
//       'width': '200px',
//       'height': '100px'
//     }).slideUp();
//   });
// });
