	const noche = document.querySelector(".luna")
	noche.addEventListener('click', function(e) {
		const night = document.querySelector(".luna")
	if (night.classList.contains('material-icons-outlined') )
		{
			night.innerHTML = "dark_mode";
			night.classList.replace('material-icons-outlined','material-icons');
		}
		else{
			night.innerHTML = "dark_mode";
			night.classList.replace('material-icons','material-icons-outlined');
		}
	});