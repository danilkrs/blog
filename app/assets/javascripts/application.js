//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap
//= require bootstrap.min
$(".nav a").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
});
(function(){
    $(window).scroll(function () {
        // значение, на которое сместилась страница при прокрутке
        var top = $(document).scrollTop();
        $('.splash').css({
            //задаём позицию фонового изображения
            'background-position': '0px -'+(top/3).toFixed(2)+'px'
        });
    });
})();

$(document).ready(function(){
    $("#navbar").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
