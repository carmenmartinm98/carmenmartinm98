addEventListener('DOMContentLoaded', () => {

	const btn_burguer = document.querySelector('.menu')

	if (btn_burguer){

		btn_burguer.addEventListener('click', function(e) {

			const elem_menu = document.querySelector('.enlaces')

			e.stopPropagation()

			elem_menu.classList.toggle('show')

		})
	}

	document.addEventListener('click', function(e){

		var clic = e.target;
		var show = elem_menu.classList.contains('show');

		if(clic != menu_item && show != false){

			elem_menu.classList.toggle('show')
		}
	}, false);
})
