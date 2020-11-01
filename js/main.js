$(function(){
    // sidebar display
    $(".navbar .nav_items .fa-bars").click(function(){
        $(".sidebar").css({"right": "0"})
    })
    $(".sidebar #close .fa-times, .sidebar .items a").click(function(){
        $(".sidebar").css({"right": "-100%"})
    })

    // navbar background color change on scroll
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });
})