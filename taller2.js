   
   // **TALLER 2**
   
   // Ejercicios condicionales 1
   
   /*let numero = Number(prompt("Ingrese un número"));

      if (numero > 0){
            if( (numero % 2) ==0 ){
            alert("El número " + numero + " es positivo par");   
            }else{
            alert("El número " + numero + " es positivo impar");
            } 
        }else if (numero < 0){
            if( (numero % 2) ==0 ){
            alert("El número " + numero + " es negativo par");   
            }else{
            alert("El número " + numero + " es negativo impar");
            } 
        }else{
            alert("El número " + numero + " es neutro");
        } */

      // Ejercicios condicionales 2

    /*    let numero1 = Number(prompt("Ingrese el primer número"));
        let numero2 = Number(prompt("Ingrese el segundo número"));

        if(numero1 > numero2) {
        alert("El número mayor es: " + numero1 + "El número menor es: " + numero2);
        } else if(numero2 > numero1) {
        alert("El número mayor es: " + numero2 + "El número menor es: " + numero1);
        } else {
        alert("No hay un número mayor, son iguales: " + numero1 + "=" + numero2);
        } */

      // Ejercicios condicionales 3

    /*    let dia = Number(prompt("Ingrese un número del 1 al 7"));
            switch(dia){
                case 1: alert("El día 1 es lunes");
            break;
                case 2: alert("El día 2 es martes");
            break;
                case 3: alert("El día 3 es miércoles");
            break;
                case 4: alert("El día 4 es jueves");
            break;
                case 5: alert("El día 5 es viernes");
            break;
                case 6: alert("El día 6 es sábado");
            break;
                case 7: alert("El día 7 es domingo");
            break;
                default: alert("El valor ingresado no es válido")
            break;
            } */

      // Ejercicios condicionales 4

    /*    if( edad <= 18 ){
            alert("Es un adolecente");
        } else if(edad >18 && edad <= 28){
            alert("Es un adulto adolecente");
        } else if(edad >=29 && edad <= 49){
            alert("Es un adulto");
        }else{
            alert("El usuario es un adulto mayor")
        } */

      // Ejercicios condicionales 5

      /*

let producto1 = parseFloat(prompt("Ingrese el valor del producto 1:"));
let producto2 = parseFloat(prompt("Ingrese el valor del producto 2:"));
let producto3 = parseFloat(prompt("Ingrese el valor del producto 3:"));

let suma = producto1 + producto2 + producto3;

let tipoPago = prompt("Ingrese el medio de pago que desea usar (efectivo, cupon, credito): ").toLowerCase();

let pagoFinal;
if(tipoPago == "efectivo") {
    pagoFinal = suma;
} else if(tipoPago == "cupon") {
    pagoFinal = suma - (suma * 0.03);
} else if(tipoPago == "credito") {
    pagoFinal = suma + (suma * 0.05);
} else{
    alert("Medio de pago no válido");
}
if (pagoFinal !== undefined) {
    alert("Detalle factura\n" +
          "\n" +        
          "Producto 1: $" + producto1 + "\n" +
          "Producto 2: $" + producto2 + "\n" +
          "Producto 3: $" + producto3 + "\n" +
          "\n" +      
          "Total: $" + suma.toFixed(2) + "\n" +
          "\n" +      
          "Medio de pago: " + tipoPago + "\n" +
          "\n" +      
          "Valor final: $" + pagoFinal.toFixed(2));
} */

      // Ejercicios condicionales 6

   /* let nota1 = parseFloat(prompt("Digite la primer nota"));
    let nota2 = parseFloat(prompt("Digite la segunda nota"));
    let nota3 = parseFloat(prompt("Digite la tercera nota"));

    let promedio =  (nota1 + nota2 + nota3) / 3

    if( promedio <= 2.0 ){
            alert("Estudiante malo");
        } else if(promedio > 2.0 && promedio <= 2.9){
            alert("Estudiante debe recuperar");
        } else if(promedio > 2.9 && promedio <= 3.9){
            alert("Estudiante regular");
        } else if(promedio > 3.9 && promedio <= 4.4){
            alert("Estudiante bueno");
        } else if(promedio > 4.4 && promedio <= 5){
            alert("Estudiante muy bueno");
        }else{
            alert("Alguna de las notas ingresadas no está entre 0.0 y 5.0")
        }

        alert("El promedio final del estudiante es: " + promedio.toFixed(2));
    */

      // Ejercicios condicionales 7
    /*
    let dia = parseInt(prompt("Ingrese el día de nacimiento: "));
    let mes = parseInt(prompt("Ingrese el mes de nacimiento: "));
    let year = parseInt(prompt("Ingrese el año de nacimiento: "));

    let fechaNacimiento = new Date(year, mes - 1, dia);

    let fechaActual = new Date();

    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

    alert("Naciste el día " + dia + " del mes " + mes + " del año " + year)

    alert("La edad actual es: " + edad + " años");
    */

      // Ejercicios condicionales 8
    
let edad = Number(prompt("Digite la edad del paciente"));
let dias = Number(prompt("Digite los días de hospitalización"));

let dias1 = 20000;
let dias2 = 30000;
let dias3 = 25000 + 25000 * 0.05;
let dias4 = 15000 + 15000 * 0.10;
let dias5 = 25000;
let dias6 = 15000 + 15000 * 0.15;
let dias7 = 25000 + 25000 * 0.15;
let dias8 = 15000 + 15000 * 0.20;

let valorDia = 0;
let recargo = 0;
let total = 0;

if (edad <= 10 && dias <= 1) {
    valorDia = dias1;
    recargo = 0;
    total = valorDia;
} else if (edad <= 10 && dias > 1 && dias <= 4) {
    valorDia = dias2;
    recargo = 0;
    total = valorDia * dias;
} else if (edad <= 10 && dias > 4 && dias <= 7) {
    valorDia = 25000;
    recargo = valorDia * 0.05;
    total = (valorDia + recargo) * dias;
} else if (edad <= 10 && dias > 7) {
    valorDia = 15000;
    recargo = valorDia * 0.10;
    total = (valorDia + recargo) * dias;

} else if (edad > 10 && edad <= 17 && dias <= 1) {
    valorDia = dias1;
    recargo = 0;
    total = valorDia;
} else if (edad > 10 && edad <= 17 && dias > 1 && dias <= 4) {
    valorDia = dias2;
    recargo = 0;
    total = valorDia * dias;
} else if (edad > 10 && edad <= 17 && dias > 4 && dias <= 7) {
    valorDia = dias5;
    recargo = 0;
    total = valorDia * dias;
} else if (edad > 10 && edad <= 17 && dias > 7) {
    valorDia = 15000;
    recargo = valorDia * 0.10;
    total = (valorDia + recargo) * dias;

} else if (edad >= 18 && edad <= 49 && dias <= 1) {
    valorDia = dias1;
    recargo = 0;
    total = valorDia;
} else if (edad >= 18 && edad <= 49 && dias > 1 && dias <= 4) {
    valorDia = dias2;
    recargo = 0;
    total = valorDia * dias;
} else if (edad >= 18 && edad <= 49 && dias > 4 && dias <= 7) {
    valorDia = dias5;
    recargo = 0;
    total = valorDia * dias;
} else if (edad >= 18 && edad <= 49 && dias > 7) {
    valorDia = 15000;
    recargo = valorDia * 0.15;
    total = (valorDia + recargo) * dias;

} else if (edad >= 50 && dias <= 1) {
    valorDia = dias1;
    recargo = 0;
    total = valorDia;
} else if (edad >= 50 && dias > 1 && dias <= 4) {
    valorDia = dias2;
    recargo = 0;
    total = valorDia * dias;
} else if (edad >= 50 && dias > 4 && dias <= 7) {
    valorDia = 25000;
    recargo = valorDia * 0.15;
    total = (valorDia + recargo) * dias;
} else if (edad >= 50 && dias > 7) {
    valorDia = 15000;
    recargo = valorDia * 0.20;
    total = (valorDia + recargo) * dias;
}

alert("La edad del paciente es: " + edad + " años\n" +
    "Los días de hospitalización son: " + dias + "\n" +
    "El valor de la hospitalización por día es: $" + valorDia + "\n" +
    "Los recargos totales son: $" + recargo + "\n" +
    "El total a pagar es: $" + total);

      