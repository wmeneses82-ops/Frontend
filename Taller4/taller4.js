
//**Taller 4 -funciones **//

// 1. Crea y llama una función que recibe el ancho y el alto de un rectángulo y calcula su superficie.  Fórmula: superficie = ancho * alto

/*
function calcularSuperficie(ancho, alto) {
  return ancho * alto;
}

let ancho = parseFloat(prompt("Ingrese el ancho del rectángulo"));
let alto = parseFloat(prompt("Ingrese el alto del rectángulo"));
let superficie = calcularSuperficie(ancho, alto);

 document.write("<p>La superficie del rectángulo es: " + superficie + "</p>");
*/

 // 2.	Crea y llama las funciones necesarias para recibir la velocidad en Kilómetros y mostrarlas en metros y millas.

 /*
    function convertirKmAMetros(velKm) {
      return velKm * 1000 / 3600;
    }

    function convertirKmAMillas(velKm) {
      return velKm * 0.621371;
    }

    let velocidadKm = parseFloat(prompt("Ingresa la velocidad en km/h:"));

    let velocidadMs = convertirKmAMetros(velocidadKm);
    let velocidadMph = convertirKmAMillas(velocidadKm);

    document.write("<p>Velocidad en km/h: " + velocidadKm + "</p>");
    document.write("<p>Velocidad en m/s: " + velocidadMs.toFixed(2) + "</p>");
    document.write("<p>Velocidad en mph: " + velocidadMph.toFixed(2) + "</p>");
    */

 // 3. por medio de una función calcula la circunferencia de un círculo utilizando la siguiente fórmula: 

/*
 function circunferencia(radio) {
  return 2 * Math.PI * radio;
}

function cubo(numero) {
  return Math.pow(numero, 3);
}

let radio = parseFloat(prompt("Ingresa el radio del círculo:"));
let numero = parseFloat(prompt("Ingresa un número para calcular su cubo:"));

let resultadoCircunferencia = circunferencia(radio);
let resultadoCubo = cubo(numero);

document.write("<p>La circunferencia del círculo es: " + resultadoCircunferencia.toFixed(2) + "</p>");
document.write("<p>El cubo del número es: " + resultadoCubo + "</p>");
*/

// 4. Crea una función donde pases como parámetro un nombre y muéstralo en el navegador; Validar que el dato ingresado no sea un número, de ser así se debe decir en pantalla ingrese un nombre válido. (lo puedes hacer con la función isNaN

/*
    function mostrarNombre(nombre) {
      if (isNaN(nombre)) {
        document.write("<p>El nombre ingresado es: " + nombre + "</p>");
      } else {
        document.write("<p>Ingrese un nombre válido</p>");
      }
    }

    let dato = prompt("Ingresa tu nombre:");

    mostrarNombre(dato);
*/

// 5. Muestra todas las operaciones básicas(suma, resta, multi, división), pidiendo al usuario 2 números por medio de una función. 
 
/*
function operaciones() {
    
    let numero1 = Number(prompt("Digite el primer número"));
    let numero2 = Number(prompt("Digite el segundo número"));

    let suma = numero1 + numero2;
    let resta = numero1 - numero2;
    let multiplicacion = numero1 * numero2;
    let division = numero1 / numero2;

    alert("Suma: " + suma +
          "\nResta: " + resta +
          "\nMultiplicación: " + multiplicacion +
          "\nDivisión: " + division);
}

operacionesBasicasAlert();
*/

// 6.	Cree un conversor de temperatura

/*
function conversorTemperatura() {
    
    let valor = Number(prompt("Digite la temperatura"));
    let unidad = prompt("Digite la unidad (C para Celsius, F para Fahrenheit)");

    let cel, fahr;

    if (unidad.toUpperCase() === "C") {
        cel = valor;
        fahr = (cel * 9/5) + 32; // Fórmula: °F = (°C × 9/5) + 32
    } else if (unidad.toUpperCase() === "F") {
        fahr = valor;
        cel = (fahr - 32) * 5/9; // Fórmula: °C = (°F − 32) × 5/9
    } else {
        alert("Unidad inválida. Use C o F.");
        return;
    }

    document.write("Temperatura en Celsius: " + cel.toFixed(2) + "°C<br>");
    document.write("Temperatura en Fahrenheit: " + fahr.toFixed(2) + "°F<br>");

   
    if (cel < 0 || fahr <= 32) {
        document.write("Nos congelamos");
    } else if ((cel >= 5 && cel <= 15) || (fahr >= 33 && fahr <= 50)) {
        document.write("Está haciendo frío");
    } else if ((cel >= 16 && cel <= 25) || (fahr >= 51 && fahr <= 77)) {
        document.write("Está templado el día");
    } else if (cel >= 26 || fahr >= 78) {
        document.write("Tiene fiebre o es el apocalipsis");
    }
}

conversorTemperatura();
*/

// 7.	Calcule el índice de masa muscular de una persona con la siguiente fórmula 

/*
function calcularIMC() {
    
    let peso = Number(prompt("Digite su peso en kilogramos"));
    let altura = Number(prompt("Digite su altura en metros"));

    let imc = peso / (altura * altura);

    document.write("Su IMC es: " + imc.toFixed(2) + "<br>");

    if (imc < 18.5) {
        document.write("Bajo peso, debe ir al nutricionista");
    } else if (imc >= 18.5 && imc <= 24.9) {
        document.write("Normal");
    } else if (imc >= 25.0 && imc <= 29.9) {
        document.write("Sobrepeso");
    } else if (imc >= 30.0) {
        document.write("Obeso, debe ir al nutricionista");
    }
}

// Llamar a la función
calcularIMC();
*/

// 8.	 Cree una función que pida el nombre del usuario, y por medio de otra función imprima el nombre y un mensaje que diga Bienvenido + nombre.

/*
function pedirNombre() {
    let nombre = prompt("Digite su nombre");
    mostrarBienvenida(nombre);
}

function mostrarBienvenida(nombre) {
    document.write("Bienvenido " + nombre);
}

pedirNombre();
*/

//9. Cree una función que pida el precio de N productos y  por medio de otra función aumente el iva del 19

/*
function pedirPrecios() {
    let n = Number(prompt("¿Cuántos productos desea ingresar?"));
    let productos = [];

    for (let i = 0; i < n; i++) {
        let precio = Number(prompt("Digite el precio del producto " + (i + 1)));
        productos.push(precio);
    }

    calcularTotal(productos);
}

function calcularTotal(productos) {
    let subtotal = 0;

    for (let i = 0; i < productos.length; i++) {
        subtotal += productos[i];
    }

    let iva = subtotal * 0.19;
    let total = subtotal + iva;

    for (let i = 0; i < productos.length; i++) {
        document.write("Producto " + (i + 1) + " = $" + productos[i].toFixed(2) + "<br>");
    }
    document.write("---------------------------------<br>");
    document.write("Subtotal = $" + subtotal.toFixed(2) + "<br>");
    document.write("IVA (19%) = $" + iva.toFixed(2) + "<br>");
    document.write("Total a pagar = $" + total.toFixed(2) + "<br>");
}

pedirPrecios();
*/

//10. Cree una función que pida la fecha actual y por medio de otra función calcule cuántos días y semanas faltan para terminar el año.

function pedirFechaUsuario() {
    // Pedir datos al usuario
    let dia = Number(prompt("Digite el día actual (1-31)"));
    let mes = Number(prompt("Digite el mes actual (1-12)"));
    let anio = Number(prompt("Digite el año actual (ejemplo: 2026)"));

    // Crear objeto con la fecha ingresada
    let fechaActual = new Date(anio, mes - 1, dia);

    // Pasar la fecha a la función que calcula los días restantes
    calcularDiasRestantes(fechaActual);
}

function calcularDiasRestantes(fechaActual) {
    // Último día del año (31 de diciembre)
    let finAnio = new Date(fechaActual.getFullYear(), 11, 31);

    // Diferencia en milisegundos
    let diferencia = finAnio - fechaActual;

    // Convertir a días
    let diasRestantes = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

    // Calcular semanas
    let semanasRestantes = Math.floor(diasRestantes / 7);

    // Mostrar resultados
    document.write("<h3>Cálculo de tiempo restante del año</h3>");
    document.write("Fecha actual: " + fechaActual.toLocaleDateString() + "<br>");
    document.write("Días restantes para terminar el año: " + diasRestantes + "<br>");
    document.write("Semanas restantes para terminar el año: " + semanasRestantes + "<br>");
}

// Llamar a la función principal
pedirFechaUsuario();


