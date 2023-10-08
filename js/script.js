// Owlcarousel
$(document).ready(function () {
    $(".four").owlCarousel({
        margin: 0,
        autoplay: true,
        loop:true,
        nav:true,
        rtl:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3.1
            }
        }
    });
})

