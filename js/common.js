$(window).scroll(function () {
    var st = $(this).scrollTop();

    $(".parallax_text").css({
        "transform": "translate(0%, " + st / 2.5 + "%"

    });

    $(".parallax_text_up").css({
        "transform": "translate(0%, -" + st / 2 + "%"

    });

    $(".parallax_text_slow").css({
        "transform": "translate(0%, " + st / 4 + "%"

    });
    $(".parallax_img").css({
        "transform": "translate(0%, -" + st / 10 + "%"

    });
});
$(document).ready(function () {

    $(function () {
        $("#back-top").hide();

        $(window).scroll(function () {
            if ($(this).scrollTop() > 700) {
                $("#back-top").fadeIn();
            } else {
                $("#back-top").fadeOut();
            }
        });

        $("#back-top").click(function () {
            $("body,html").animate({
                scrollTop: 0
            }, 700);
            return false;
        });
    });

    $(function () {
        $('#modal').focus(function () {
            $(this).blur();
        });
    });
});