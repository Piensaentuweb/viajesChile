

//Inicio JS ScrollTop 
$(function () {
    $(document).scroll(function () {
        var $nav = $(".menu-color-fijo-scroll");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
//Fin JS ScrollTop 



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
