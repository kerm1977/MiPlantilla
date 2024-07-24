const form = document.querSelector(".contact_form"),

function sendMsg(e){
	e.preventDefault();
	
	const nombre = document.querSelector(".nombre"),
			tel = document.querSelector(".tel"),
			wapp = document.querSelector(".wapp"),
			email = document.querSelector(".email"),
			asunto = document.querSelector(".asunto"),
			msn = document.querSelector(".msn"),

	Email.send({
	    SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
	    To : 'clsantillos@gmail.com',
	    From : "email.value",
	    Subject : "Contact Form",
	    Body : "msn.value"
		}).then(
		  message => alert(message)
		);
	}


form.addEventList('submit', sendMsg);
