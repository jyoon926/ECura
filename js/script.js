//Loader
$(window).load(function() {
    setTimeout(function(){
        $('.loader-logo-letter').css("opacity", "0");
        $('#loader').css("opacity", "0");
        setTimeout(function(){
            $('#loader').css("pointer-events", "none");
            document.getElementsByTagName('html')[0].style.overflowY = "scroll";
        }, 1000);
    }, 800);
});

function fadeIn() {
    setTimeout(function(){
        $('.loader-logo-letter').css("opacity", ".75");
    }, 100);
}

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $('.nav-desktop').css("background-color", 'white');
        $('.nav-bar').css("background-color", 'white');
        $('.nav-bar').css("height", '60px');
        $('.menu-button').css("top", '10px');
    } else {
        $('.nav-desktop').css("background-color", 'rgba(255,255,255,0)');
        $('.nav-bar').css("background-color", 'rgba(255,255,255,0)');
        $('.nav-bar').css("height", '80px');
        $('.menu-button').css("top", '20px');
    }
}