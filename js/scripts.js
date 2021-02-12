$(document).ready(function() {
    // mobile menu
    $('.sidebar_btn-menu').on('click', function() {
        $('body').toggleClass('menu-open');
    });

    // tabs
    $(".tabs a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
        var tab = $(this).attr("href");
        $(".tabs-one").not(tab).css({"display": "none"});
        $(tab).fadeIn();
    });


    // accordion
    $('.toggle').click(function(e) {
        e.preventDefault();

        var $this = $(this);

        if ($this.next().hasClass('show')) {
            $this.removeClass('active');
            $this.next().removeClass('show');
            $this.next().slideUp(350);
        } else {
            $this.parent().parent().find('.toggle').removeClass('active');
            $this.parent().parent().find('li .inner').removeClass('show');
            $this.parent().parent().find('li .inner').slideUp(350);
            $this.next().toggleClass('show');
            $this.next().slideToggle(350);
            $this.addClass('active');
        }
    });
});
