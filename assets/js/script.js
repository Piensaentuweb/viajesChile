

//Inicio JS Menu cambia de color al scroll
$(function () {
    $(window).scroll(function() { 
        if ($(document).scrollTop() > 50) { 
          $(".fixed-top").css("background-color", "#00a3b9","color","#999"); 
        } else {
          $(".fixed-top").css("background-color", "transparent"); 
        }
      });
    });
//Fin JS Menu cambia de color al scroll


//Inicio JS Tooltips 
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
//Fin JS Tooltips


//Inicio Smooth Scrolling
$(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });
});
//Fin Smooth Scrolling
