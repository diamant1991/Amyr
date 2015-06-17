var divsFilter = new Array('.residential','.commercial','.buildings');

function changeFilter(arr, e){
    if ($(e).css('display') == 'none'){
        for(var i in arr){   
           $(arr[i]).hide();     
        }
        $(e).show();       
    }
}

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

jQuery("#area-сommercial").slider({
	min: 10,
	max: 100,
	values: [10,100],
	range: true,
	stop: function(event, ui) {
		jQuery("#min-area-сommercial").val(jQuery("#area-сommercial").slider("values",0));
		jQuery("#max-area-сommercial").val(jQuery("#area-сommercial").slider("values",1));
    },
    slide: function(event, ui){
		jQuery("#min-area-сommercial").val(jQuery("#area-сommercial").slider("values",0));
		jQuery("#max-area-сommercial").val(jQuery("#area-сommercial").slider("values",1));
    }
});

jQuery("#area-residential").slider({
	min: 15,
	max: 60,
	values: [10,100],
	range: true,
	stop: function(event, ui) {
		jQuery("#min-area-residential").val(jQuery("#area-residential").slider("values",0));
		jQuery("#max-area-residential").val(jQuery("#area-residential").slider("values",1));
    },
    slide: function(event, ui){
		jQuery("#min-area-residential").val(jQuery("#area-residential").slider("values",0));
		jQuery("#max-area-residential").val(jQuery("#area-residential").slider("values",1));
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

jQuery("#price-commercial").slider({
	min: 200000,
	max: 20000000,
	values: [200000,20000000],
	range: true,
	stop: function(event, ui) {
		jQuery("#min-price-commercial").val(jQuery("#price-commercial").slider("values",0));
		jQuery("#max-price-commercial").val(jQuery("#price-commercial").slider("values",1));
    },
    slide: function(event, ui){
		jQuery("#min-price-commercial").val(jQuery("#price-commercial").slider("values",0));
		jQuery("#max-price-commercial").val(jQuery("#price-commercial").slider("values",1));
    }
});

jQuery("#price-residential").slider({
	min: 500000,
	max: 50000000,
	values: [500000,50000000],
	range: true,
	stop: function(event, ui) {
		jQuery("#min-price-residential").val(jQuery("#price-residential").slider("values",0));
		jQuery("#max-price-residential").val(jQuery("#price-residential").slider("values",1));
    },
    slide: function(event, ui){
		jQuery("#min-price-residential").val(jQuery("#price-residential").slider("values",0));
		jQuery("#max-price-residential").val(jQuery("#price-residential").slider("values",1));
    }
});


$( document ).ready(function() {
	$('.room-list li').click(function() {
	    $('.room-list li').removeClass('active');
	    $(this).addClass('active');
  	});
})