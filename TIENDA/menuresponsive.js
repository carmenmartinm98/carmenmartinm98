addEventListener('DOMContentLoaded', () => {



	const btn_burguer = document.querySelector('.menu')

	if (btn_burguer){

		console.log(btn_burguer)

		btn_burguer.addEventListener('click', () => {

			const elem_menu = document.querySelector('.lista')

			console.log(elem_menu)

			elem_menu.classList.toggle('show')

		})
	}
})


// addEvenListener('DOMContentLoaded', () => { 