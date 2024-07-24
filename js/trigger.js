const navSlide = () => {
	const trigger = document.querySelector('.trigger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	
	trigger.addEventListener('click',() => {
		//Activador nav
		nav.classList.toggle('nav-active');
	
	//Animacion de los links
	navLinks.forEach((link, index) => {
		if(link.style.animation){
			link.style.animation ='';
		}else{
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
		}
		}); 
	

	//Activador de animación
	trigger.classList.toggle('toggle');

	});
}	


navSlide();


