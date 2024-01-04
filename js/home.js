$(function () {
    $(".slide").slick();
    $(".slide-feeback").slick({
        infinite: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    });
});
