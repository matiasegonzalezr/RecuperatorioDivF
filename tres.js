/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,
lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/


function mostrar() {
	let nombre;
	let lugar;
	let temporada;
	let cantidad;
	let contBariloche = 0;
	let contCataratas = 0;
	let contSalta = 0;
	let seguir;
	let lugarPreferido;
	let nombreMayorCantidad;
	let mayorCantidad;
	let flag = 0;
	let contadorInvierno = 0;
	let promedio = 0;
	let acumuladorPersonasInvierno = 0;

	do {

		nombre = prompt('Ingrese su nombre: ');
		while (!isNaN(nombre)) { //la conjunción es &&, no ||!!! 
			nombre = prompt('Por favor, ingrese un nombre válido.');
		}

		lugar = prompt('Ingrese lugar (bariloche/cataratas/salta): ');
		while (lugar != "bariloche" && lugar != "cataratas" && lugar != "salta") { //la conjunción es &&, no ||!!! 
			lugar = prompt('Por favor, ingrese un lugar válido  (bariloche/cataratas/salta)');
		}

		temporada = prompt('Ingrese temporada (verano/otoño/primavera/invierno): ');
		while (temporada != "verano" && temporada != "otoño" && temporada != "primavera" && temporada != "invierno") { //la conjunción es &&, no ||!!! 
			temporada = prompt('Por favor, ingrese un temporada válida  (verano/otoño/primavera/invierno)');
		}

		cantidad = parseInt(prompt('Ingrese cantidad de pasajeros: '));
		while (cantidad <= 1 || isNaN(cantidad)) {
			cantidad = parseInt(prompt('Error. Ingrese una edad válida por favor: '));
		}

		switch (lugar) {
			case "bariloche":
				contBariloche++;
				break;
			case "cataratas":
				contCataratas++;
				break;
			case "salta":
				contSalta++;
				break;
		}

		if (flag == 0 || cantidad > mayorCantidad) {
			mayorCantidad = cantidad;
			nombreMayorCantidad = nombre;
			flag = 1;
		}

		if (temporada == "invierno") {
			acumuladorPersonasInvierno += cantidad;
			contadorInvierno++;
		}


		seguir = prompt("Desea ingresar más datos?: ");
	} while (seguir == 'si');

	if (contBariloche > contCataratas && contBariloche > contSalta) {
		lugarPreferido = "bariloche";
	}
	else if (contCataratas >= contBariloche && contCataratas > contSalta) {
		lugarPreferido = "cataratas";
	}
	else {
		lugarPreferido = "salta";
	}

	
	if (contadorInvierno != 0) {
		promedio = acumuladorPersonasInvierno / contadorInvierno;
	}


	console.log(`A)El lugar más elegido es ${lugarPreferido}`);
	console.log(`B)La persona que llevó más pasajeros es ${nombreMayorCantidad} con una cantidad de ${mayorCantidad} pasajeros`);
	if (contadorInvierno == 0) {
		console.log('No se registran datos de viajes en invierno');
	} else {
		console.log(`C)El promedio de personas por viaje, que viajan en invierno es ${promedio}`);
	}
}
