jQuery("#area").slider({
	min: 1,
	max: 80,
	values: [1,80],
	range: true,
	stop: function(event, ui) {
		jQuery("#min-area").val(jQuery("#area").slider("values",0));
		jQuery("#max-area").val(jQuery("#area").slider("values",1));
    },
    slide: function(event, ui){
		jQuery("#min-area").val(jQuery("#area").slider("values",0));
		jQuery("#max-area").val(jQuery("#area").slider("values",1));
    }
});

	jQuery("#floor").slider({
	min: 1,
	max: 20,
	values: [1,20],
	range: true,
	stop: function(event, ui) {
		jQuery("#min-floor").val(jQuery("#floor").slider("values",0));
		jQuery("#max-floor").val(jQuery("#floor").slider("values",1));
    },
    slide: function(event, ui){
		jQuery("#min-floor").val(jQuery("#floor").slider("values",0));
		jQuery("#max-floor").val(jQuery("#floor").slider("values",1));
    }
});

	jQuery("#price").slider({
	min: 100000,
	max: 10000000,
	values: [100000,10000000],
	range: true,
	stop: function(event, ui) {
		jQuery("#min-price").val(jQuery("#price").slider("values",0));
		jQuery("#max-price").val(jQuery("#price").slider("values",1));
    },
    slide: function(event, ui){
		jQuery("#min-price").val(jQuery("#price").slider("values",0));
		jQuery("#max-price").val(jQuery("#price").slider("values",1));
    }
});

$( document ).ready(function() {
	$('.room-list li').click(function() {
	    $('.room-list li').removeClass('active');
	    $(this).addClass('active');
  	});
})