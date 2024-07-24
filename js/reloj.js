/*Script del Reloj */
	function actualizaReloj() {
	/* Capturamos la Hora, los minutos y los segundos */
	marcacion = new Date()
	/* Capturamos la Hora */
	Hora = marcacion.getHours()
	/* Capturamos los Minutos */
	Minutos = marcacion.getMinutes()
	/* Capturamos los Segundos */
	Segundos = marcacion.getSeconds()
	/*variable para el apóstrofe de am o pm*/
	dn = "a.m"
	if (Hora > 12) {
	dn = "p.m"
	Hora = Hora - 12
	}
	if (Hora == 0)
	Hora = 12
	/* Si la Hora, los Minutos o los Segundos son Menores o igual a 9, le añadimos un 0 */
	if (Hora <= 9) Hora = "0" + Hora
	if (Minutos <= 9) Minutos = "0" + Minutos
	if (Segundos <= 9) Segundos = "0" + Segundos
	/* Termina el Script del Reloj */

	/*Script de la Fecha */

	var Dia = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo");
	var Mes = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
	"Oct", "Noviembre", "Diciembre");
	var Hoy = new Date();
	var Anio = Hoy.getFullYear();
	var Fecha = Dia[Hoy.getDay()] + ", " + Hoy.getDate() + "<strong>"+ " " + Mes[Hoy.getMonth()] + " </strong> " + " / " + Anio + ". ";

	/* Termina el script de la Fecha */

	/* Creamos 2 variables para darle formato a nuestro Script */
	var Script, Total

	/* En Reloj le indicamos la Hora, los Minutos y los Segundos */
	Script = Fecha + Hora + ":" + Minutos + ":" + Segundos + " " + dn +"          "

	/* En total Finalizamos el Reloj uniendo las variables */
	Total = Script

	/* Capturamos una celda para mostrar el Reloj */
	document.getElementById('Fecha_Reloj').innerHTML = Total

	/* Indicamos que nos refresque el Reloj cada 1 segundo */
	setTimeout("actualizaReloj()", 1000)
	}