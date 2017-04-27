<script>
	function myFunction(){
		var nombre = documentElementById('name').value;
		var email = documentElementById('email').value;
		var mostrarNombre = document.getElementById('mostarNombre');
		var mostrarMail = document.getElementById('mostarMail');
		mostrarNombre.innerHTML = "<h3>Datos de Formulario</h3>El nombre ingresado es:" + nombre;
		mostrarMail.innerHTML = "El email ingresado es:" + email;
	};

</script>