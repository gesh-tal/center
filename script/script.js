$(document).ready(function(){
	$('.slider1').owlCarousel({
		items:1,
		loop:true,
		dots:false,
		pagination:false,
		autoplay:true
	});
	// accordion
	//прикрепляем клик по заголовкам acc-head
		$('#accordeon .acc-head').on('click', f_acc);
	});

		function f_acc(){
		//скрываем все кроме того, что должны открыть
			$('#accordeon .acc-body').not($(this).next()).slideUp(1000);
		// открываем или скрываем блок под заголовоком, по которому кликнули
			$(this).next().slideToggle(500);
}

		$('#mobile_menu_link').on('click',function(){
			$('#caret2').toggleClass('rotateCaret');
			$(this).next().slideToggle(500);
		});