 $(function($) {
     $('.container').fullpage({
         // 设置侧边导航栏
         navigation: true,
         // 设置背景颜色
         sectionsColor: ["rgb(250, 221, 103)", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
         //设置屏幕内容对齐的方式
         verticalCentered: false,
         // 页面结构生成后/页面初始化完成后，点击更多，切换到下一页
         afterRender: function() {
             $('.more').on('click', function() {
                 // fullpage插件的封装：$.fn.fullpage=function () {}
                 // fullpage的插件方法：本身没有的方法，可以通过$.fn.fullpage追加
                 $.fn.fullpage.moveSectionDown();
             });
             $('.screen04 .cart').on('transitionend', function() {
                 $('.screen04 .address').show(1000, function() {
                     $(this).find('img:last').fadeIn(1000);
                     $('.screen04').addClass('show');
                 });
             });
             // 第八屏功能 1.手随着鼠标动 2.点击再来一次，动画重置，回到第一页；
             $('.screen08').on('mousemove',function (e) {
                $(this).find('.hand').css({
                    left:e.clientX-120,
                    top:e.clientY
                })
             }).find('.again').on('click',function () {
                 // 1.类样式 show load leaved 2.css属性 .css() 3.jQuery方法 show() fadeIn()
                 $('.show, .load, .leaved').removeClass('.show').removeClass('.load').removeClass('.leaved');
                 $('.content[style]').removeAttr('style');
                 $.fn.fullpage.moveTo(1);
             })
         },
         // 滚动到第一屏后，启动第一屏动画
         afterLoad: function(link, index) {
             $('.section').eq(index - 1).addClass('load');
         },
         //离开第二屏时 ，滚动前的回调函数
         scrollingSpeed: 1000,
         onLeave: function(index, nextIndex, derection) {
             // 第二屏滚动到第三屏
             var current = $('.section').eq(index - 1)
             if ((index == 2 && nextIndex == 3) || (index == 3 && nextIndex == 4)) {
                 current.addClass('leaved');
             }
             if (index == 5 && nextIndex == 6) {
                 current.addClass('leaved');
                 $('.screen06 .box').addClass('show');
             }
             if(index == 6 && nextIndex == 7){
                $('.screen07 .star').addClass('show')
                $('.screen07 .text').addClass('show')
                $('.screen07 .star img').each(function (i,item) {
                    // console.log(i*0.5*1000);
                    // $(this).delay(i*0.5*1000).fadeIn();
                    $(this).css('transition-delay',i*0.5+'s');
                })
             }
         }
     })
 })