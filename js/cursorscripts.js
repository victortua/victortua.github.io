	$(document).ready(function() {
	$("#landpage").mousemove(function(event) {

		cx = Math.ceil($("#landpage").width() / 2.0);
		cy = Math.ceil($("#landpage").height() / 2.0);
		dx = event.pageX - cx;
		//dy = event.pageY - cy;
		dy = -(event.pageY - cy); //modificado para que las coordenadas de y sean correctas
		

		//console.log(cx,cy,dx,dy);

		tiltx = (dy / cy);
		tilty = (dx / cx);
		radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
		degree = (radius * 15);


		// suma de las dos coordenadas
		xplusy = ((Math.abs(tilty) + Math.abs(tiltx)) / 2).toFixed(3);
		// angulo del triangulo formado entre el cursor y las coordenadas 0,0
		angulo = (Math.atan2(dx, dy) * 57.2958);
		// angulo del triangulo formado entre el cursor y las coordenadas 0,0
		hptnusa = (Math.sqrt(Math.pow((Math.abs(dx)), 2) + Math.pow((Math.abs(dy)), 2)));
		// radio del cursor
		cursoradius = (0.75 + (hptnusa / 80));

		
		$('#frame')
			.css('opacity', + (1 - (hptnusa / 300)))
			;
		$('#closer')
			.css('opacity', + (1.5 - (hptnusa / 300)))
			;

		$('#cursor')
			.css('left', + event.pageX + 'px')
			.css('top', + event.pageY + 'px')
			.css('width', + (cursoradius * 2) + 'em')
			.css('height', + (cursoradius * 2) + 'em')
			.css('margin-top', - (cursoradius) + 'em')
			.css('margin-left', - (cursoradius) + 'em')
			;

		// la linea que rota

		$('#cursor > div')
			.css('top', + event.pageY + 'px')
			.css('left', + event.pageX + 'px')
			.css('transform','rotate(' + angulo + 'deg')
			;

		$('#cursor > div > div')
			.css('height','calc(' + (hptnusa) + 'px - ' + (cursoradius * 2) + 'em')
			.css('margin-top', + (cursoradius) + 'em')
			;

		


		// rotación del eje
		$('#axis').css('transform','rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');


		// estrellas
		$('#diamond div img')
			.css('margin-top', + ((tiltx * 20)) + '%')
			.css('margin-left', + (- (tilty * 20)) + '%')
			;
		$('.stars')
			.css('margin-top', + ((tiltx * 10)) + '%')
			.css('margin-left', + (- (tilty * 10)) + '%')
			;
		






		// mostrar coordenadas //

		// dimensiones landpage
		$("#coordenates #one .x").text("x: " + $("#landpage").width());
		$("#coordenates #one .y").text("y: " + $("#landpage").height());
		// coordenadas cursor
		$("#coordenates #two .x").text("x: " + event.pageX);
		$("#coordenates #two .y").text("y: " + event.pageY);
		// coord. desde punto central
		$("#coordenates #three .x").text("x: " + dx);
		$("#coordenates #three .y").text("y: " + dy);
		// coord. desde punto cntral porcentuales
		$("#coordenates #four .x").text("x: " + tilty);
		$("#coordenates #four .y").text("y: " + tiltx);
		// coord. desde punto cntral porcentuales 3 decimales
		$("#coordenates #five .x").text("x: " + tilty.toFixed(3));
		$("#coordenates #five .y").text("y: " + tiltx.toFixed(3));
		// coord. desde punto cntral porcentuales 3 decimales positivos
		$("#coordenates #six .x").text("x: " + Math.abs(tilty).toFixed(3));
		$("#coordenates #six .y").text("y: " + Math.abs(tiltx).toFixed(3));
		// suma de los dos ejes
		$("#coordenates #seven .x").text("positivo:" + xplusy);
		$("#coordenates #seven .y").text("negativo:" + (1 - xplusy).toFixed(3));
		// hipotenusa
		$("#coordenates #hipote .x").text(hptnusa);
		// sandbox
		sandbox = 2;
		$("#coordenates #sandbox .x").text(sandbox);
	});
});