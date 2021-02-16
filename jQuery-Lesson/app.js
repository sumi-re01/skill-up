// $(document).ready(function () {
//   $('body').html('<h1>Hello jQuery!!</h1>')
// });

// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });



// ５章

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



// // 確認問題
// $(function(){
//   $('.box1').slideDown(function (){
//     $('.box1').css({
//       'background-color': '#0000FF',
//       'height': '100px',
//       'width': '200px'
//     }).slideUp();
//   });
// });

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



// 6章

// // mouseover Event
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000FF'});
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color': '#FF0000'});
//   });
// });

// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });


// CLICK
// $(function(){
//   $('.box1').click(function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });
    // ↑と↓がどう違うのかわからない〜〜！！onの効果が掴めない
// $(function(){
//   $('.box1').on('click', function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });



// ７章

