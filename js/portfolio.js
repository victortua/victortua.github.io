
















// añade la clase "scroll" a header cuando haces scroll

$(function() {
	$("#grid").scroll(function() {
		if ($("#grid").scrollTop() > 50) {
			$("#header").addClass("scroll");
			}
		else {
			$("#header").removeClass("scroll");
			}
	});
});


// muestra y esconde el menú

$(function() {
	$("#menu").click(function() {
		$("#filters").addClass("in");
	});
	$("#filters").click(function() {
		$("#filters").removeClass("in");
	});
});














// filter functions

// esto no se que coño es, pero si lo quito no funciona
var filterFns = {  
};

// enlaza cada boton con su filtro correspondiente
$('#filters').on( 'click', 'button', function() {
	var filterValue = $( this ).attr('data-filter');
	// use filterFn if matches value
	filterValue = filterFns[ filterValue ] || filterValue;
	$grid.isotope({ filter: filterValue });
});

// mueve la clase .hide entre los botones
$('#filters').each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function() {
        $buttonGroup.find('.hide').removeClass('hide');
        $(this).addClass('hide');
    });
});












// cada bloque es para mostrar cada uno de los subtitulos de cada filtro
// lo sé, toda esta sección de abajo es un puto apaño, pero, si no como lo hago

$(function() {
	$("#filters > .nofilter").click(function() {
		$("#labels > .web").removeClass("show");
		$("#labels > .illust").removeClass("show");
		$("#labels > .product").removeClass("show");
		$("#labels > .photo").removeClass("show");
		$("#labels > .other").removeClass("show");
		$("#header").removeClass("filters");
	});

	$("#filters > .web").click(function() {
		$("#labels > .web").addClass("show");
		$("#labels > .illust").removeClass("show");
		$("#labels > .product").removeClass("show");
		$("#labels > .photo").removeClass("show");
		$("#labels > .other").removeClass("show");
		$("#header").addClass("filters");
	});
	$("#filters > .illust").click(function() {
		$("#labels > .web").removeClass("show");
		$("#labels > .illust").addClass("show");
		$("#labels > .product").removeClass("show");
		$("#labels > .photo").removeClass("show");
		$("#labels > .other").removeClass("show");
		$("#header").addClass("filters");
	});
	$("#filters > .product").click(function() {
		$("#labels > .web").removeClass("show");
		$("#labels > .illust").removeClass("show");
		$("#labels > .product").addClass("show");
		$("#labels > .photo").removeClass("show");
		$("#labels > .other").removeClass("show");
		$("#header").addClass("filters");
	});
	$("#filters > .photo").click(function() {
		$("#labels > .web").removeClass("show");
		$("#labels > .illust").removeClass("show");
		$("#labels > .product").removeClass("show");
		$("#labels > .photo").addClass("show");
		$("#labels > .other").removeClass("show");
		$("#header").addClass("filters");
	});
	$("#filters > .other").click(function() {
		$("#labels > .web").removeClass("show");
		$("#labels > .illust").removeClass("show");
		$("#labels > .product").removeClass("show");
		$("#labels > .photo").removeClass("show");
		$("#labels > .other").addClass("show");
		$("#header").addClass("filters");
	});
});













// opciones isotope

var $grid = $('#isotope').isotope({
	itemSelector: '#isotope > *',
	lashowutMode: 'packery',
	percentPosition: true,
	filter: '.ima',
});









//opciones owlcarousel

$(document).ready(function() {
	$(".owl-carousel").owlCarousel({
		singleItem : true,
		lazyLoad : true,
		navigation : true,
		navigationText : ["&#8678;","&#8680;"],
	});
});