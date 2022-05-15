
$(document).ready(function () {

    $(".menuBar").click(function (e) {
        $(this).addClass('d-none')
        $('.navMenuMobile').removeClass("d-none")
    })
    $('section').click(function () {
        $('.menuBar').removeClass('d-none')
        $('.navMenuMobile').addClass("d-none")
    })

});