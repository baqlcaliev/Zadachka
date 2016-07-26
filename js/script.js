

$(function () {
    console.log("Това е тест!!");
    $('[data-toggle="tooltip"]').tooltip(),
            $('#Билки').click(function (e) {
        e.preventDefault();
        $(this).tab('show'),
                $(document).ready(function ()
        {
            $("#scrollbar1").tinyscrollbar({thumbSize: 15});
        });
    });
});
jQuery(document).ready(function () {
    var offset = 250;
    var duration = 300;
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });
    jQuery('.back-to-top').click(function (event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    });
});


$(function () {
    $("#Slide").hide();
    $("#Slide").slideDown(600);

});
//*Скривам си съдържанието с hide, пускам слайд с slideDown//

$(function () {
    $(".carousel-indicators").bxSlider({
        $Duration: 800, $Delay: 300, $Cols: 8, $Rows: 4, $Clip: 15, $Formation: $JssorSlideshowFormations$.$FormationRectangleCross,
        $Easing: $JssorEasing$.$EaseInQuad
    });
});

// Progress bar on load page

setTimeout(function () {

    $('.progress .bar').each(function () {
        var me = $(this);
        var perc = me.attr("data-percentage");

        var current_perc = 0;

        var progress = setInterval(function () {
            if (current_perc >= perc) {
                clearInterval(progress);
            } else {
                current_perc += 1;
                me.css('width', (current_perc) + '%');
            }

            me.text((current_perc) + '%');

        }, 50);

    });

}, 300);
//End of progress bar









