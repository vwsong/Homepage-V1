$(window).scroll(function () {
    var wH = ($(window).height()),
        wS = $(this).scrollTop(),
        size = (wH-(2*wS))/(wH)
    $('.fixedDiv').css({
        'opacity': size
    });
    console.log(size);
});