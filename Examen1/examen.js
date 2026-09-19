
//** */ Evaluación programación web 1 **//


//Ejercicio 1

/*
let numeros = [];
for (let i = 0; i < 6; i++) {
    let num = parseFloat(prompt("Ingrese el número " + (i + 1) + ":"));
    numeros.push(num);
}

let mayor = Math.max(...numeros);
let menor = Math.min(...numeros);
let suma = numeros.reduce((acc, val) => acc + val, 0);
let promedio = suma / numeros.length;

alert(
    "Números ingresados: " + numeros.join(", ") + "\n" +
    "Mayor: " + mayor + "\n" +
    "Menor: " + menor + "\n" +
    "Promedio: " + promedio.toFixed(2)
);
*/


//Ejercicio 2

/*
let dia = prompt("Ingrese el día de la semana, entre lunes y viernes:").toLowerCase();
let placa = prompt("Ingrese el número de la placa del vehículo:");

let ultimoNumero = parseInt(placa.charAt(placa.length - 1));

    if (dia == "lunes"){
    if (ultimoNumero == 0 || ultimoNumero == 1 || ultimoNumero == 2 || ultimoNumero == 3){
        alert("El vehículo tiene pico y placa el lunes");
    } else {
        alert("El vehículo no tiene pico y placa el lunes.");     
    }} else if (dia == "martes"){
    if (ultimoNumero == 4 || ultimoNumero == 5 || ultimoNumero == 6 || ultimoNumero == 7){
        alert("El vehículo tiene pico y placa el martes");
    } else {
        alert("El vehículo no tiene pico y placa el martes.");    
    }} else if (dia == "miércoles") {
    if (ultimoNumero == 8 || ultimoNumero == 9 || ultimoNumero == 0 || ultimoNumero == 1){
        alert("El vehículo tiene pico y placa el miércoles");
    } else {
        alert("El vehículo no tiene pico y placa el miércoles.");    
    }} else if (dia == "jueves") {
    if (ultimoNumero == 2 || ultimoNumero == 3 || ultimoNumero == 4 || ultimoNumero == 5){
        alert("El vehículo tiene pico y placa el jueves");
    } else {
        alert("El vehículo no tiene pico y placa el jueves");    
    }} else if (dia == "viernes") {
    if (ultimoNumero == 6 || ultimoNumero == 7 || ultimoNumero == 8 || ultimoNumero == 9){
        alert("El vehículo tiene pico y placa el viernes");
    } else{
        alert("El vehículo no tiene pico y placa el viernes");
    }} else{
    alert("EL día que intenta ingresar no es válido.");
    }
    */

    //Ejercicio 3

    const estudiantes = [{ 
    id: 1, 
    nombre: "Juan", 
    apellido: "Pérez", 
    edad: 20, 
    carrera: "Ingeniería", 
    promedio: 8.5 
  }, 
  { 
    id: 2, 
    nombre: "María", 
    apellido: "González", 
    edad: 22, 
    carrera: "Medicina", 
    promedio: 9.2 
  }, 
  { 
    id: 3, 
    nombre: "Pedro", 
    apellido: "Rodríguez", 
    edad: 21, 
    carrera: "Derecho", 
    promedio: 7.8 
  }, 
  { 
    id: 4, 
    nombre: "Ana", 
    apellido: "Martínez", 
    edad: 20, 
    carrera: "Ingeniería", 
    promedio: 9.5 
  }, 
  {  
    id: 5, 
    nombre: "Luis", 
    apellido: "Hernández", 
    edad: 23, 
    carrera: "Medicina", 
    promedio: 8.2
    }];


 // Filtrar estudiante de ingenieria   
document.write("<br> <h1> Filtro estudiantes ingeniería </h1>");
let carrera = estudiantes.filter(e => e.carrera == "Ingeniería");
carrera.forEach(e => {
document.write(e.nombre + " " + e.apellido + " - " + e.carrera + "<br>");
});

 // Obtener promedio de todos los estudiantes
document.write("<br> <h1> Promedio de los estudiantes </h1>");
estudiantes.forEach(e=>document.write(`${e.nombre} - ${e.promedio}<br>`));

 // Encontrar el estudiante con el promedio mas alto
document.write("<br> <h1> Estudiante con el promedio más alto </h1>");
let promalto = estudiantes.reduce((max,p)=>p.promedio>max.promedio?p:max);
document.write("<b>El promedio más alto es:</b> " + promalto.nombre + " ("+promalto.promedio+")<br>");

 // Agrega un nuevo estudiante de a la carrera de deportes, (datos los puedes agregar tu) 

estudiantes.push({
  id: 6,
  nombre: "Wilmer",
  apellido: "Meneses",
  edad: 35,
  carrera: "Deportes",
  promedio: 7.7
});

document.write("<h1> Lista de estudiantes actualizada: </h1>");
estudiantes.forEach(e => {
  document.write(
    "ID: " + e.id + " - " +
    e.nombre + " " + e.apellido +
    " | Edad: " + e.edad +
    " | Carrera: " + e.carrera +
    " | Promedio: " + e.promedio + "<br>"
  );
});

 // Ordenar estudiantes por promedio en orden descendente
document.write("<h1> Orden promedio de mayor a menor: </h1>");

estudiantes.sort(function(a, b){
    if(a.promedio > b.promedio){
        return -1;
    }
});
estudiantes.forEach(function(notas){
document.write(`Nombre estudiante: ${notas.nombre} - Promedio: ${notas.promedio} <br>`);
});


	

