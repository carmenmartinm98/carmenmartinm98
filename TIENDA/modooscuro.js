addEventListener('DOMContentLoaded', () => {

	// buscamos el elemento checkbox por el ID
	const oscuro = document.querySelector(".luna")
	oscuro.addEventListener('click', () =>{

		const contenedor = document.querySelector(".contenedor")

		contenedor.classList.toggle('dark');
	});
})
