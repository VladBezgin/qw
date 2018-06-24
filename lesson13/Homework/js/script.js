$(document).ready(function() {
    function clickBtn(btn) {
        $(btn).on('click', function() {
            $('.overlay').animate({
                opacity: 'toggle'
            }, 3000);
            $('.modal').slideDown(3000);
        });
    }

    $('.close').on('click', function() {
    	$('.overlay').animate({
                opacity: 'toggle'
            }, 3000);
    	 $('.modal').slideUp(3000);
    });

    clickBtn('.main_btn')
    clickBtn('.main_btna')
    clickBtn('.schedule')
});