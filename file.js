



//-------------------------- Start Scroll To Top------------------------------
window.onscroll = function() {
    (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
    ?(document.getElementById("scroll-top").style.display = "block")
    :(document.getElementById("scroll-top").style.display = "none")
    

    document.getElementById("scroll-top").onclick = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
};
//-------------------------- End Scroll To Top------------------------------
