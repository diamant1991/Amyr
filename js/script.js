var mydivs=new Array('.proj-desc','.proj-maps','.current-proj','.competed-proj');

function opcl(arr, e){
    if ($(e).css('display') == 'none'){
        for(var i in arr){   
           $(arr[i]).hide();
        }
        $(e).show();       
    }
}

$( document ).ready(function() {

	$('input,textarea').focus(function(){
	  $(this).data('placeholder',$(this).attr('placeholder'))
	  $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
	  $(this).attr('placeholder',$(this).data('placeholder'));
	});

    $('.leave-application').click(function(){
    	$('.form-mask').fadeIn(400);
    	$('#application').fadeIn(400);
    })

    $('.form-mask,.closed').click(function(){
  	 $('.modal,.form-mask').fadeOut(400);
  })
	$(document).keyup(function(d) {
	    if (d.keyCode == 27) {
	        $('.form-mask').fadeOut(400);
	        $('.modal').fadeOut(400);
	    }
	});

	$('.proj-link a').click(function() {
	    $('.proj-link a').removeClass('active');
	    $(this).addClass('active');
  	});
});