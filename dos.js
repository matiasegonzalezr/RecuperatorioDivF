/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/
function mostrar() {
  let marca;
  let precio;
  let peso;
  let tipo;
  let acumuladorPeso;
  let marcaLiquidoCaro;
  let precioLiquidoCaro;
  let flagLiquido = 0;
  let marcaSolidoLiviano;
  let pesoSolidoLiviano;
  let flagSolido = 0;
  let seguir;

  do {

    marca = prompt('Ingrese la marca del producto: ');
    while (!isNaN(marca)) {
      marca = prompt('Marca inválida. Ingrese la marca: ');
    }

    precio = parseFloat(prompt('Ingrese el precio: '));
    while (peso < 0 || isNaN(precio)) {
      precio = prompt('Ingrese un precio válido');
    }

    peso = parseFloat(prompt('Ingrese su peso: '));
    while (peso < 0 || isNaN(peso)) {
      peso = prompt('Ingrese un peso válido');
    }

    tipo = prompt('Ingrese tipo (solido o liquido): ');
    while (tipo != 'solido' && tipo != 'liquido') {
      tipo = prompt('Por favor, ingrese un tipo válido (solido o liquido)');
    }

    acumuladorPeso += peso;

    // b)la marca del más caro de los líquidos 

    if (flagLiquido == 0 || precio > precioLiquidoCaro) {
      precioLiquidoCaro = precio;
      marcaLiquidoCaro = marca;
      flagLiquido = 1;
    }
    else {
      if (flagSolido == 0 || peso < pesoSolidoLiviano) {
        pesoSolidoLiviano = peso;
        marcaSolidoLiviano = marca;
        flagSolido = 1;
      }


      seguir = prompt('Desea ingresar más productos? (si/no):')
    } while (seguir == 'si');


    console.log(`A) El peso total de la compra es ${acumuladorPeso}kgs`);
    if (flagLiquido == 0) {
      console.log(`No se ingresó ningún producto líquido.`);
    }
    else {
      console.log(`B)La marca del más caro de los líquidos es ${marcaLiquidoCaro} y su precio es $${precioLiquidoCaro}`);
    }
    if (flagSolido == 0) {
      console.log(`No se ingresó ningún producto sólido.`);
    }
    else {
      console.log(`C)La marca del más liviano de los sólidos es ${marcaSolidoLiviano} y su peso es de $${pesoSolidoLiviano}. `);
    }

  }
