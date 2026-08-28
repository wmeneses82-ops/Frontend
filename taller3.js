
//******** Taller 3 - Ciclos ********//

// 1.	Hacer un programa que calcule la suma de los N números naturales, dónde N es el número límite ingresado. 

/*
let N = parseInt(prompt("Ingrese el límite para N"));
let suma = 0;

for (let i = 1; i <= N; i++) {
    suma += i;
}
alert("La suma de los " + N + " números naturales es: " + suma);
*/

// 2.	Hacer un programa que pida el nombre de un estudiante y N notas, calcular el promedio de las notas y determinar si el estudiante aprueba o reprueba; (Aprueba con un promedio de 3).

/*
let nombre = prompt("Ingrese el nombre del estudiante:");
let N = parseInt(prompt("Digite la cantidad de notas:"));

let suma = 0;

for (let i = 1; i <= N; i++) {
    let nota = parseFloat(prompt("Ingrese la nota " + i ));
    suma += nota;
}

let promedio = suma/N;

if (promedio >= 3) {
    alert( nombre + " prueba su promedio fue de " + promedio.toFixed(2));
} else {
    alert(nombre + " reprueba su promedio fue de " + promedio.toFixed(2));
}
*/

// 3.	Ingrese varios números enteros, muestre la cantidad de números ingresados y la suma de los mismos. Realice esta acción hasta que el usuario ingrese la palabra FIN.

/*
let cantNum = 0;
let suma = 0;

while (true) {
    let entrada = prompt("Ingresa números enteros y/o escriba 'FIN' para terminar.");

    if (entrada.toLowerCase() === "fin") {
        break;
    }

    let numero = parseInt(entrada);

    if (!isNaN(numero)) {
        suma += numero;
        cantNum++;
    } else {
        alert("Este valor no es válido, por favor ingrese un número entero o FIN.");
    }
}

alert("Ingresaste " + cantNum + " números" + 
      "\nla suma de los números ingresados es: " + suma);
*/

// 4.	realice una tabla de multiplicar con cualquier número ingresado hasta el 30.

/*
let numero = parseInt(prompt("Ingrese un número que sea menor o igual a 30"));

if (numero <= 30) {
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += numero + " x " + i + " = " + (numero * i) + "\n";
    }
    alert(resultado);
} else {
    alert("El número debe ser menor o igual a 30.");
}
*/

// 5.	Cree la tabla de multiplicar de cualquier número ingresado de manera descendente.

/*
let numero = parseInt(prompt("Ingrese un número"));

    let resultado = "";
    for (let i = 10; i >= 1; i--) {
        resultado += numero + " x " + i + " = " + (numero * i) + "\n";
    }
    alert(resultado);
*/

// 6.	Cree un ciclo que cuente del 1 al 30 en intervalos el número ingresado.

/*
let intervalo = parseInt(prompt("Ingrese un número que a su vez será el intervalo que sume"));

let resultado = "";
for (let i = 1; i <= 30; i += intervalo) {
    resultado += i + "\n";
}
alert(resultado);
*/

// 7.	Cree un ciclo que cuente del 1 al 30 en intervalos el número ingresado, de manera regresiva.

/*
let intervalo = parseInt(prompt("Ingrese un número que a su vez será el intervalo que sume de forma descendente"));

let resultado = "";
for (let i = 30; i >= 1; i -= intervalo) {
    resultado += i + "\n";
}
alert(resultado);
*/

// 8. Cree un programa que pida la edad a 10 estudiantes y determine cuántos son menores de edad y cuales son mayores de edad.
/*
let menores = 0;
let mayores = 0;

for (let i = 1; i <= 10; i++) {
    let edad = parseInt(prompt("Ingrese la edad del estudiante " + i + ":"));
    
    if (edad < 18) {
        menores++;
    } else {
        mayores++;
    }
}

alert("Menores de edad: " + menores + "\nMayores de edad: " + mayores);
*/

// 9.	Utiliza la función Math.ramdon() para generar un número aleatorio y compararlo con el que el usuario digite. tienes 3 intentos para acertar. 

let intentos = 3;
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let acierto = false;

while (intentos > 0 && !acierto) {
    let numUsuario = parseInt(prompt("Adivina el número (entre 1 y 10). Intentos restantes: " + intentos));

    if (numUsuario === numeroAleatorio) {
        alert("¡Correcto! El número era " + numeroAleatorio);
        acierto = true;
    } else {
        alert("Incorrecto.");
        intentos--;
    }
}

if (!acierto) {
    alert("Se acabaron los intentos. El número era " + numeroAleatorio);
}
