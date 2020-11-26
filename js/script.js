$(function() {
    $('#components').load("components/components.html");
});

//Loader
document.body.onload = function() {
    $('.cover').css("top", "-100vh");
    setTimeout(function(){
        $('.loader').css("top", "100vh");
        $('.loader').css("pointer-events", "none");
    }, 300);
    // setTimeout(function(){
    //     $('.loader-logo-letter').css("opacity", ".75");
    //     $('.cover').css("top", "-100vh");
    // }, 0);
}

/*$(window).load(function() {
    $('.loader').css("top", "100vh");
    $('.loader').css("pointer-events", "none");
    // setTimeout(function(){
    //     $('.loader-logo-letter').css("opacity", "0");
    //     $('.loader').css("top", "100%");
    //     $('.loader').css("pointer-events", "none");
    //     //document.getElementsByTagName('html')[0].style.overflowY = "scroll";
    // }, 600);
});*/

$('.scroll').scroll(function() {
    scrollFunction()
});

function scrollFunction() {
    if ($('.scroll').scrollTop() > 20) {
        $('.menu-bg-desktop').css("top", "0");
        $('.menu-bg-mobile').css("top", "0");
        $('.nav-bar').css("height", '60px');
        $('.menu-button').css("top", '10px');
    } else {
        $('.menu-bg-desktop').css("top", "-80px");
        $('.menu-bg-mobile').css("top", "-60px");
        $('.nav-bar').css("height", '80px');
        $('.menu-button').css("top", '20px');
    }
}

jQuery(document).on('click', 'a', function (e) {
    $('.cover').css("transitionDuration", ".5s");
    $('.cover').css("top", '0');
    e.preventDefault();
    setTimeout(function(){
        if (document.querySelector('body').classList.contains('fade-out')) {
            document.location = e.target.href;
        }
    }, 550);
    document.querySelector('body').classList.add('fade-out');
});