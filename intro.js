//alert("Hola desde archivo externo");

// Comentario de 1 línea
/*
Conetario multi-línea
*/

// **Ventanas de salida de información**

// alert() -> ventana de salida rápida de información
// console.log() -> ventana para salida de consola
// document.write() -> salida de información por la página web

//alert("Hola desde alert");
//console.log("Hola desde la consola");
//document.writeln("<h1> Hola desde HTML </h1>");

// **Ventanas de entrada de información**

//confirm() -> confirmar una pregunda
//prompt() -> tomar un valor

//confirm("¿Llegaste tarde a clase?")
//prompt("¿Llegaste tarde a clase?")

// **Variables
//var, let, const

//let nombre = "Juan";
//let numero1 = 5;
//let numero2 = 8;
//let suma = numero1 + numero2;
//alert("La suma es: " + (numero1 + numero2))   
//alert("El resultado es: " + suma) 
//alert("El nombre es: " + nombre);

/*let respuesta = confirm("¿Llegaste tarde a clase?");
alert("Su respuesta: " + respuesta)*/

// let respuesta = prompt("¿Llegaste tarde a clase?");
// alert("Su respuesta: " + respuesta)

//Ejercicio

//Calcular el salario a pagar de un empleado que gana x sueldo
//Descontar en salud el 4% y en pensión el 6%

/*let sueldo = prompt("Digite el sueldo del empleado");
let salud;
let pension;
let salarioApagar;
// proceso o cálculos
salud = sueldo * 0.04;
pension = sueldo * 0.06;
salarioApagar = sueldo - (salud + pension);
//Datos de salida
alert(
    "El sueldo del empleado es: " + sueldo +"\n"+
    "El descuento en salud es: " + salud + "\n"+
    "El descuento en pension es: " + pension + "\n"+
    "El salario a pagar es: " + salarioApagar
);*/

/*console.log(
    "El sueldo del empleado es: " + sueldo +"\n"+
    "El descuento en salud es: " + salud + "\n"+
    "El descuento en pension es: " + pension + "\n"+
    "El salario a pagar es: " + salarioApagar
);*/

/*document.write(
    "El sueldo del empleado es: " + sueldo +"<br>"+
    "El descuento en salud es: " + salud + "<br>"+
    "El descuento en pension es: " + pension + "<br>"+
    "El salario a pagar es: " + salarioApagar
);*/

// **TALLER 1**

//Ejercicios lineales

//1. Realiza el cálculo del salario que debe recibir un trabajador que gana x salario con un descuento del 4% por salud y 7% por pensión.

let sueldo = prompt("Digite el sueldo del empleado");
let salud;
let pension;
let salarioApagar;
// proceso o cálculos
salud = sueldo * 0.04;
pension = sueldo * 0.07;
salarioApagar = sueldo - (salud + pension);
//Datos de salida
alert(
    "El sueldo del empleado es: " + sueldo +"\n"+
    "El descuento en salud es: " + salud + "\n"+
    "El descuento en pension es: " + pension + "\n"+
    "El salario a pagar es: " + salarioApagar
);


/*document.write(
    "El sueldo del empleado es: " + sueldo +"<br>"+
    "El descuento en salud es: " + salud + "<br>"+
    "El descuento en pension es: " + pension + "<br>"+
    "El salario a pagar es: " + salarioApagar
);*/

//2. Aplica la fórmula a = (b*h)/2 para calcular el área de un triángulo donde sus dimensiones base y altura se deben pedir al usuario que las digite.

let base = prompt("Digite la base del triángulo");
let altura = prompt("Digite la altura del triángulo");

area = (base*altura)/2;

alert(
    "La base del triángulo es: " + base +"\n"+
    "La altura del triángulo es: " + altura + "\n"+
    "El área del tríangulo es: " + area + "\n"   
);

//3. Realiza las operaciones de suma, resta, multiplicación, división, y módulo pidiéndole solo 2 números al usuario.

let numero1 = Number(prompt("Digite el primer número"));
let numero2 = Number(prompt("Digite el segundo número"));

suma = numero1 + numero2;
resta = numero1 - numero2;
multipicacion = numero1 * numero2;
division = numero1 / numero2;
modulo = numero1 % numero2;

alert(
    "La suma de los dos números es: " + suma +"\n"+
    "La resta de los dos números es: " + resta + "\n"+
    "La multiplicación de los dos números es: " + multipicacion + "\n" +   
    "La división de los dos números es: " + division + "\n" + 
    "El módulo de los dos números es: " + modulo + "\n" 
);

//4.  Calcule el sueldo mensual de un trabajador ingresando el número de horas trabajadas en el mes y el valor tanto como de las horas normales de trabajo y las horas extras.

let horasTrabajadas = Number(prompt("Digite las horas trabajadas en el mes"));
let horasExtras = Number(prompt("Digite las horas extras trabajadas en el mes"));
let salarioTotal;

tHorasTrabajadas = horasTrabajadas * 10000;
tHorasExtras = horasExtras * 15000;
salarioTotal = tHorasTrabajadas + tHorasExtras;

alert(
    "las horas trabajadas en el mes fueron: " + horasTrabajadas + " que equivalen a: " + tHorasTrabajadas + "\n"+
    "las horas extras trabajadas en el mes fueron: " + horasExtras + " que equivalen a: " + tHorasExtras + "\n"+
    "El salario total ganado es: " + salarioTotal + "\n"
);

//5. Digita el ingreso del precio de un producto y se debe calcular el IVA, mostrar cuanto es el IVA que seagrega, mostrar el precio del producto sin IVA y el total a pagar.

let precioProducto = Number(prompt("Digite el valor del producto"));

iva = precioProducto * 0.16;
totalProducto = precioProducto + iva;

alert(
    "El precio del producto es: " + precioProducto + "\n"+
    "El iva del producto es: " + iva + "\n"+
    "El precio total del producto es: " + totalProducto + "\n"
);

//6. Calcule el porcentaje de alumnos y alumnas de un salón de clase, digitando el total de alumnos hombres y mujeres.

let hombres = Number(prompt("Digite la cantidad de hombres del grupo"));
let mujeres = Number(prompt("Digite la cantidad de mujeres del grupo"));

totalAlumnos = hombres + mujeres;
PorcentajeHombres = (hombres / totalAlumnos)*100;
PorcentajeMujeres = (mujeres / totalAlumnos)*100;

alert(
    "El total de alumnos es: " + totalAlumnos +"\n"+
    "El total de hombres es: " + hombres + "\n"+
    "El total de mujeres es: " + mujeres + "\n" +   
    "El porcentaje de hombres es : " + PorcentajeHombres + "%" + "\n" + 
    "El porcentaje de mujeres es : " + PorcentajeMujeres + "%" + "\n" 
);

//7. Calcule el promedio de 3 notas de un alumno, el rango de cada nota es del 1 al 5.

let nota1 = Number(prompt("Digite la primer nota"));
let nota2 = Number(prompt("Digite la segunda nota"));
let nota3 = Number(prompt("Digite la tercera nota"));

if (
    nota1 < 1 || nota1 > 5 ||
    nota2 < 1 || nota2 > 5 ||
    nota3 < 1 || nota3 > 5
) {
    alert("Error: todas las notas deben estar entre 1 y 5");
} else {
    let promedio = (nota1 + nota2 + nota3) / 3;

    alert(
        "El valor de la primer nota es: " + nota1 + "\n" +
        "El valor de la segunda nota es: " + nota2 + "\n" +
        "El valor de la tercer nota es: " + nota3 + "\n" +
        "El promedio de las notas es: " + promedio.toFixed(2) + "\n"
    );
}
