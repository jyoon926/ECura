$(function() {
    $('#components').load("components/components.html");
});

//Loader
document.body.onload = function() {
    changeScrollBarHeight()
    setTimeout(function(){
        $('.cover').css("opacity", "0");
    }, 200);
}
$(window).load(function() {
    setTimeout(function(){
        $('.loader-logo').css("opacity", "1");
        setTimeout(function(){
            $('.loader-logo').css("opacity", "0");
            setTimeout(function(){
                $('.loader').css("opacity", "0");
                $('.loader').css("pointer-events", "none");
            }, 500);
        }, 1000);
    }, 500);
});
$('.scroll').scroll(function() {
    scrollFunction();
    scrollBar();
});

//Hiding header
function scrollFunction() {
    if ($('.scroll').scrollTop() > 20) {
        //$('.menu-bg-desktop').css("top", "0");
        //$('.menu-bg-mobile').css("top", "0");
        //$('.nav-bar').css("height", '60px');
        //$('.menu-button').css("top", '10px');
    } else {
        //$('.menu-bg-desktop').css("top", "-80px");
        //$('.menu-bg-mobile').css("top", "-60px");
        //$('.nav-bar').css("height", '80px');
        //$('.menu-button').css("top", '20px');
    }
}

//Page transitions
jQuery(document).on('click', 'a', function (e) {
    $('.cover').css("transitionDuration", ".5s");
    $('.cover').css("opacity", '100');
    e.preventDefault();
    setTimeout(function(){
        if (document.querySelector('body').classList.contains('fade-out')) {
            document.location = e.target.href;
        }
    }, 550);
    document.querySelector('body').classList.add('fade-out');
});

//Scrollbar
window.onresize = changeScrollBarHeight;
let padding = 8;
function changeScrollBarHeight() {
    pageHeight = document.getElementById('scroll').offsetHeight;
    windowHeight = window.innerHeight;
    thumbRatio = (windowHeight / pageHeight);
    thumbHeight = 0;
    if (thumbRatio < 1) {
        thumbHeight = thumbRatio * windowHeight;
        $('#thumb').css('opacity', '1');
        $('#thumb').css('height', thumbHeight - padding + 'px');
    } else {
        $('#scrollbar').css('display', 'none');
    }
    if (window.innerWidth < 800) {
        $('#scrollbar').css('display', 'none');
    }
}
function scrollBar() {
    scrollPos = document.getElementById('scroll-container').scrollTop;
    offset = document.getElementById('scroll').offsetHeight - window.innerHeight;
    space = window.innerHeight - document.getElementById('thumb').offsetHeight - padding;
    $('#thumb').css('margin-top', (scrollPos / offset) * space + 'px');
}

const content = document.getElementById('scroll-container');
const scroll = document.getElementById('scroll');
const anchor = document.getElementById('anchor');
const scrollbar = document.getElementById('scrollbar');
const thumb = document.getElementById('thumb');
const inside = document.getElementById('inside');
let y = 0;
let start = 0;
let move = false;
let topPos = 1;
dark = 'rgba(0, 0, 0, 1)';
light = 'rgba(0, 0, 0, 0.25)';
$('#thumb').mousedown(function(e){
    move = true;
    y = e.clientY;
    topPos = $('#scroll-container').scrollTop();
    inside.style.backgroundColor = dark;
});
$('#thumb').mouseover(function(e){
    inside.style.backgroundColor = dark;
});
$('#thumb').mouseout(function(e){
    inside.style.backgroundColor = light;
});
$('body').mouseup(function(){
    move = false;
    inside.style.backgroundColor = light;
});
window.onmousemove = function(e){
    if (move) {
        space = window.innerHeight - document.getElementById('thumb').offsetHeight - padding;
        dy = e.clientY - y;
        scrollHeight = (dy / space) * (scroll.offsetHeight - window.innerHeight);
        content.scrollTop = topPos + scrollHeight;
        inside.style.backgroundColor = dark;
    }
}