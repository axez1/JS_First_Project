$(document).ready(function(){
    $('.tab-content').hide();
    $('.tab:first').addClass('tab-active');
    $('.tab-content:first').fadeIn();
    $('.link').click(function(e){
		//console.log(e);
        e.preventDefault();
        $('.tab-content').hide();
        $('.tab-active').removeClass('tab-active');

        $(this).addClass('tab-active');
		console.log($(this).attr('data-title'));
        $('#'+$(this).attr('data-title')).fadeIn();

    });
});
