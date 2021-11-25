addEventListener('DOMContentLoaded', () => {

	const btn_burguer = document.querySelector('.menu')

	if (btn_burguer){

		btn_burguer.addEventListener('click', () => {

			const elem_menu = document.querySelector('.enlaces')

			elem_menu.classList.toggle('show')

		})
	}
})


// addEvenListener('DOMContentLoaded', () => { 