/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar() {
	let acumuladorEdad = 0;
	let contadorMujeres = 0;
	let contadorHombres = 0;
	let flag = 0;
	let edad;
	let edadPromedio;
	let mujerMayorTemperatura;
	let nombre;
	let sexo;
	let temperatura;
	let temperaturaMayor;



	for (i = 0; i < 5; i++) {

		nombre = prompt('Ingrese su nombre: ');
		while (!isNaN(nombre)) {
			nombre = prompt('No es un nombre válido. Ingrese su nombre: ');
		}

		temperatura = parseFloat(prompt('Ingrese su temperatura: '));
		while (temperatura < 35 || temperatura > 41 || isNaN(temperatura)) { //(entre 35 y 40 calculo que son temperaturas válidas) 
			temperatura = parseFloat(prompt('Ingrese una temperatura válida'));
		}

		sexo = prompt('Ingrese su sexo (f ó m): ');
		while ((sexo != 'f' && sexo != 'm' && !isNaN(sexo))) {
			sexo = prompt('Por favor, ingrese un sexo válido (f o m)');
		}

		edad = parseInt(prompt('Ingrese su edad'));
		while (edad < 0 || isNaN(edad)) {
			edad = parseInt(prompt('Error. Ingrese una edad válida: '));
		}

		if (sexo == 'm') {
			contadorHombres++;
		}
		else {

			if (flag == 0 || temperatura > temperaturaMayor) {
				temperaturaMayor = temperatura;
				mujerMayorTemperatura = nombre;
				flag = 1;
				contadorMujeres++;
			}
		}

		acumuladorEdad += edad;
	}

	edadPromedio = acumuladorEdad / 5;

	if (flag == 0) {
		console.log(`No han ingresado mujeres`);
	} 
	else {
		console.log(`A)Ingresaron ${contadorMujeres} mujeres.`);
	}

	console.log(`A)Ingresaron ${contadorHombres} hombres.`);
	console.log(`B)La edad promedio es ${edadPromedio}`);

	if (flag == 0) {
		console.log(`No han ingresado mujeres`);
	} else {
		console.log(`C)La mujer con mayor temperatura es ${mujerMayorTemperatura} y su temperatura es de ${temperaturaMayor}°`);

	}

}
