
const btn_burguer = document.querySelector('.menu')

if (btn_burguer){

	console.log(btn_burguer)

	btn_burguer.addEventListener('click', () => {

		const elem_menu = document.querySelector('.lista')

		console.log(elem_menu)

		elem_menu.classList.toggle('show')

	})
}

//menu lateral aside desplegable
const boton_lateral = document.querySelector('.boton-lateral')

const propiedad_background = "background: rgba( 224, 222, 255, 0.8 );"
const propiedad_shadow = "box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);"

const flecha = document.querySelector('.flecha-menu-lateral')


if (boton_lateral){

	console.log(boton_lateral)

	boton_lateral.addEventListener('click', () => {

		const elem_menu = document.querySelector('.menu-lateral')

		console.log(elem_menu)

		elem_menu.classList.toggle('show')

		flecha.classList.toggle('rotacion')

		//elem_menu.setAttribute('style',propiedad_background+" "+propiedad_shadow)

	})
}

