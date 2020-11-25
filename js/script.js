$(function() {
    $('#components').load("components/components.html");
});

//Loader
$(window).load(function() {
    setTimeout(function(){
        $('.loader-logo-letter').css("opacity", "0");
        $('.loader').css("top", "100%");
        $('.loader').css("pointer-events", "none");
        //document.getElementsByTagName('html')[0].style.overflowY = "scroll";
    }, 600);
});

document.body.onload = function() {
    setTimeout(function(){
        $('.loader-logo-letter').css("opacity", ".75");
        $('.cover').css("top", "-100%");
    }, 0);
}

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
    $('.cover').css("top", '0');
    e.preventDefault();
    setTimeout(function(){
        if (document.querySelector('body').classList.contains('fade-out')) {
            document.location = e.target.href;
        }
    }, 750);
    document.querySelector('body').classList.add('fade-out');
});

// let links = document.querySelectorAll('a');
// if (links) {
//     links.forEach (link => {
//         link.onclick = e => {
//             $('.cover').css("top", '0');
//             let body = document.querySelector('body');
//             e.preventDefault();
//             setTimeout(function(){
//                 if (body.classList.contains('fade-out')) {
//                     window.location = e.srcElement.href;
//                 }
//             }, 750);
//             body.classList.add('fade-out');
//         }
//     });
// }