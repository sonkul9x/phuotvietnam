// $(".menu-left").find('.dropdown').find('a').removeAttr('data-toggle');
$('#menu-menu-top-container .toggle-submenu').click(function(e) {
    if ($(this).hasClass('open')) {
        $(this).next('.sub-menu').find('.sub-menu').slideUp();
        $(this).next('.sub-menu').slideUp();
        $(this).removeClass('open');
        $(this).next('.sub-menu').find('.open').removeClass('open');
    } else {
        $(this).parent().siblings().find('.sub-menu').slideUp();
        $(this).parent().siblings().find('.open').removeClass('open');
        $(this).next('.sub-menu').slideDown();
        $(this).addClass('open');
    }
});

if ($(".left .menu").find('.current-menu-item').length === 0) {
    $('.left .menu').find('.menu-item-has-children').first().find(".dropdown-menu").show();
    console.log('empty');
} else {
    console.log("ok");
}

$(".left").find('.search').addClass("hidden-lg hidden-md");
$(".left").find('.video').addClass("hidden-lg hidden-md");
$(".left").find('.certificate').addClass("hidden-lg hidden-md");
$("section").find('.newpaper').addClass("hidden-lg hidden-md");
$("section").find('.post-hot').addClass("hidden-lg hidden-md");

if ($(".list-agency").length) {
    $(".list-agency").find('.northern').prepend("<li class='region'>Miền bắc</li>");
    $(".list-agency").find('.central').prepend("<li class='region'>Miền trung</li>");
    $(".list-agency").find('.south').prepend("<li class='region'>Miền nam</li>");
    count_northern = $(".list-agency").find('.northern').find('li').length;
    count_central = $(".list-agency").find('.central').find('li').length;
    count_south = $(".list-agency").find('.south').find('li').length;
    remain_northern = count_northern - Math.floor(count_northern / 4) * 4;
    remain_central = count_central - Math.floor(count_central / 4) * 4;
    remain_south = count_south - Math.floor(count_south / 4) * 4;
    if (remain_northern > 0) {
        for (i = 0; i < (4 - remain_northern); i++) {
            $(".list-agency").find('.northern').append("<li>&nbsp</li>");
        }
    }
    if (remain_central > 0) {
        for (i = 0; i < (4 - remain_central); i++) {
            $(".list-agency").find('.central').append("<li>&nbsp</li>");
        }
    }
    if (remain_south > 0) {
        for (i = 0; i < (4 - remain_south); i++) {
            $(".list-agency").find('.south').append("<li>&nbsp</li>");
        }
    }

}