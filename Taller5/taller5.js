//---------- ** Taller arrays y manipulación de datos ** ----------

// Dataset de ejemplo - Sistema de Reservas de Hotel

/*
let reservas = [
    {
        "huesped": "María González",
        "habitacion": "101",
        "noches": 3,
        "checkIn": "2025-01-15",
        "precioNoche": 120,
        "estado": "activa"
	    },
	    {
	        "huesped": "Carlos López",
	        "habitacion": "205",
	        "noches": 5,
	        "checkIn": "2025-01-20",
	        "precioNoche": 150,
	        "estado": "pendiente"
	    },
	    {
	        "huesped": "Ana Martínez",

			"habitacion": "102",
	        "noches": 2,
	        "checkIn": "2025-01-18",
	        "precioNoche": 100,
	        "estado": "activa"
	    },
	    {
	        "huesped": "Pedro Sánchez",
	        "habitacion": "301",
	        "noches": 7,
	        "checkIn": "2025-01-25",
	        "precioNoche": 200,
	        "estado": "cancelada"
	    }
	];

// 1. Ordenar reservas por precio por noche (de mayor a menor)
document.write("<h1> Orden reservas de mayor a menor: </h1>");
reservas.sort(function(a, b){
    if(a.precioNoche > b.precioNoche){
        return -1;
    }
});
reservas.forEach(function(habitacion){
document.write(`Habitación número: ${habitacion.habitacion} Precio por noche: ${habitacion.precioNoche} <br>`);
});

// 2. Filtrar solo las reservas activas
let Activas = reservas.filter(function(reserva){
    return reserva.estado == "activa";
});
document.write("<h1> Estas son las reservas activas: </h1>");
 Activas.forEach(reserva => {
     document.write(`<br> Huésped: ${reserva.huesped}, Habitación: ${reserva.habitacion}, Estado: ${reserva.estado} <br>`);
 });

 
 // 3. Calcular el total a pagar por cada huésped
reservas.forEach(calculo => {
  calculo.total = calculo.noches * calculo.precioNoche;
});

document.write("<h1>Este es el valor total a pagar por huésped:</h1>");
reservas.forEach(reserva => {
  document.write(`${reserva.huesped} - Total: $${reserva.total}<br>`);
});

// 4. Reserva más larga
document.write("<h1>Esta es la reserva más larga por cantidad de noches:</h1>");
let masLarga = reservas.reduce((max,r)=>r.noches>max.noches?r:max);
document.write("Nombre huésped: " + masLarga.huesped + " ("+masLarga.noches+" noches)<br>");

// 5. Agrupar por estado
document.write("<h1>Esta es la agrupacíon de reservas por estado:</h1>");
let agrupadas = reservas.reduce((acc,r)=>{
  if(!acc[r.estado]) acc[r.estado]=[];
  acc[r.estado].push(r);
  return acc;
}, {});
document.write("Estados:<br>");
for(let estado in agrupadas){
  document.write(estado + ": " + agrupadas[estado].map(r=>r.huesped).join(", ") + "<br>");
}
*/

/*
	// Dataset de ejemplo - Inventario de Supermercado
	
	let productos = [
	    {
	        "nombre": "Leche Entera",
	        "categoria": "Lácteos",
	        "precio": 2.50,
	        "stock": 45,
	        "proveedor": "Lactosa SA"
	    },
	    {
	        "nombre": "Pan Integral",
	        "categoria": "Panadería",
	        "precio": 1.80,
	        "stock": 30,
	        "proveedor": "Panadería Moderna"
	    },
	    {
	        "nombre": "Arroz Premium",
	        "categoria": "Granos",
	        "precio": 3.20,
	        "stock": 15,
	        "proveedor": "Arrocera Nacional"
	    },
	    {
	        "nombre": "Yogurt Natural",
	        "categoria": "Lácteos",
	        "precio": 1.95,
	        "stock": 0,
	        "proveedor": "Lactosa SA"
	    },
	    {
	        "nombre": "Aceite de Oliva",
	        "categoria": "Aceites",
	        "precio": 8.75,
	        "stock": 22,
	        "proveedor": "Aceites del Sur"
	    }
	];
	
	// Ejercicios propuestos:

	// 1. Ordenar productos por precio (de menor a mayor)
	
	document.write(" <h1> Ordenados por precio, de menor a mayor: </h1>");
	productos.sort((a,b)=>a.precio-b.precio);
	productos.forEach(p=>document.write(`${p.nombre} - $${p.precio}<br>`));

	// 2. Filtrar productos sin stock
	document.write("<br> <h1> Productos sin stock </h1>");
	let sinStock = productos.filter(p=>p.stock===0);
	document.write(sinStock.map(p=>p.nombre).join(", "));

	// 3. Calcular el valor total del inventario (precio * stock)
	document.write("<br> <h1> Valor total inventario </h1>");
	let valorTotal = productos.reduce((sum,p)=>sum+p.precio*p.stock,0);
	document.write("<b>Total inventario:</b> $" + valorTotal.toFixed(2) + "<br>");

	// 4. Agrupar productos por categoría
	document.write("<br> <h1> Productos agrupagos por categoría </h1>");
	let porCategoria = productos.reduce((acc,p)=>{
  	if(!acc[p.categoria]) acc[p.categoria]=[];
  	acc[p.categoria].push(p);
  	return acc;
	}, {});
	for(let cat in porCategoria){
  	document.write(cat + ": " + porCategoria[cat].map(p=>p.nombre).join(", ") + "<br>");
	}

	// 5. Encontrar el producto más caro
	document.write("<br> <h1> Productos más costoso </h1>");
	let masCaro = productos.reduce((max,p)=>p.precio>max.precio?p:max);
	document.write("<b>El producto más costoso es:</b> " + masCaro.nombre + " ($"+masCaro.precio+")<br>");

	// 6. Filtrar productos de un proveedor específico
	document.write("<br> <h1> Productos por proveedor </h1>");
	let aceite = productos.filter(p=>p.proveedor==="Aceites del Sur");
	document.write("<b>Productos de Aceites del Sur:</b> " + aceite.map(p=>p.nombre).join(", ") + "<br>");
	let lactosa = productos.filter(p=>p.proveedor==="Lactosa SA");
	document.write("<b>Productos de Lactosa SA:</b> " + lactosa.map(p=>p.nombre).join(", ") + "<br>");
	let granos = productos.filter(p=>p.proveedor==="Arrocera Nacional");
	document.write("<b>Productos de Arrocera Nacional:</b> " + granos.map(p=>p.nombre).join(", ") + "<br>");
	let pan = productos.filter(p=>p.proveedor==="Panadería Moderna");
	document.write("<b>Productos de Panadería Moderna:</b> " + pan.map(p=>p.nombre).join(", ") + "<br>");
	*/

	/*
	// Dataset de ejemplo - Estudiantes y Calificaciones
	let estudiantes = [
	    {
	        "nombre": "Laura Méndez",
	        "grado": "10°",
	        "edad": 15,
	        "calificaciones": [85, 92, 78, 90],
	        "asistencia": 95
	    },
	    {
	        "nombre": "Diego Ramirez",
	        "grado": "9°",
	        "edad": 14,
	        "calificaciones": [70, 65, 80, 75],
	        "asistencia": 88
	    },
	    {
	        "nombre": "Sofía Castro",
	        "grado": "10°",
	        "edad": 16,
	        "calificaciones": [95, 98, 92, 96],
	        "asistencia": 98
	    },
	    {
	        "nombre": "Javier López",
	        "grado": "9°",
	        "edad": 14,
	        "calificaciones": [60, 72, 68, 65],
	        "asistencia": 82
	    }
	];
	
	
	// Ejercicios propuestos:

	// 1. Ordenar estudiantes por promedio de calificaciones
	document.write("<br> <h1> Orden estudiantes por promedio </h1>");
	estudiantes.forEach(e=>e.promedio=e.calificaciones.reduce((s,c)=>s+c,0)/e.calificaciones.length);
	estudiantes.sort((a,b)=>b.promedio-a.promedio);
	estudiantes.forEach(e=>document.write(`${e.nombre} - ${e.promedio}<br>`));

	// 2. Filtrar estudiantes con asistencia menor al 90%
	document.write("<br> <h1> Asistencia menor al 90% </h1>");
	let bajaAsistencia = estudiantes.filter(e=>e.asistencia<90);
	document.write(bajaAsistencia.map(e=>e.nombre).join(", ") + "<br>");

	// 3. Calcular el promedio de cada estudiante
	document.write("<br> <h1> Promedio por estudiante </h1>");
	estudiantes.forEach(e=>document.write(`${e.nombre} - ${e.promedio}<br>`));

	// 4. Encontrar al estudiante con mejor promedio
	document.write("<br> <h1> Estudiante con mejor promedio </h1>");
	let mejor = estudiantes[0];
    document.write( mejor.nombre + " ("+mejor.promedio+")<br>");

	// 5. Agrupar estudiantes por grado
	document.write("<br> <h1> Estudiantes por grado </h1>");
	let porGrado = estudiantes.reduce((acc,e)=>{
  	if(!acc[e.grado]) acc[e.grado]=[];
  	acc[e.grado].push(e);
  	return acc;
	}, {});
	for(let g in porGrado){
  	document.write(g + ": " + porGrado[g].map(e=>e.nombre).join(", ") + "<br>");
	}

	// 6. Filtrar estudiantes mayores de 15 años
	document.write("<br> <h1> Estudiantes mayores a 15 años </h1>");
	let mayores15 = estudiantes.filter(e=>e.edad>15);
	document.write(mayores15.map(e=>e.nombre).join(", ") + "<br>");
	*/

	// Dataset de ejemplo - Recursos Humanos

	/*
	let empleados = [
	    {
	        "nombre": "Roberto Jiménez",
	        "departamento": "Ventas",
	        "salario": 35000,
	        "antiguedad": 3,
	        "cargo": "Ejecutivo de Ventas"
	    },
	    {
	        "nombre": "Elena Torres",
	        "departamento": "TI",
	        "salario": 55000,
	        "antiguedad": 7,
	        "cargo": "Desarrolladora Senior"
	    },
	    {
	        "nombre": "Miguel Ángel Ruiz",
	        "departamento": "Ventas",
	        "salario": 42000,
	        "antiguedad": 5,
	        "cargo": "Gerente de Ventas"
	    },
	    {
	        "nombre": "Claudia Reyes",
	        "departamento": "TI",
	        "salario": 48000,
	        "antiguedad": 2,
	        "cargo": "Desarrolladora Junior"
	    }
	];
	
	// Ejercicios propuestos:

	// 1. Ordenar empleados por salario (de mayor a menor)
	document.write("<br> <h1> Empleados por salario, de mayor a menor </h1>");
	empleados.sort((a,b)=>b.salario-a.salario);
	empleados.forEach(e=>document.write(`${e.nombre} - $${e.salario}<br>`));

	// 2. Filtrar empleados con antigüedad mayor a 4 años
	document.write("<br> <h1> Empleados con antigüedad mayor a 4 años </h1>");
    let veteranos = empleados.filter(e=>e.antiguedad>4);
	document.write(veteranos.map(e=>e.nombre).join(", ") + "<br>");

	// 3. Calcular el salario promedio por departamento
	document.write("<br> <h1> Salario promedio por departamento </h1>");
	let promedioDepto = empleados.reduce((acc,e)=>{
  	if(!acc[e.departamento]) acc[e.departamento]={total:0,count:0};
  	acc[e.departamento].total+=e.salario;
  	acc[e.departamento].count++;
  	return acc;
	}, {});
	for(let depto in promedioDepto){
  	promedioDepto[depto].promedio=promedioDepto[depto].total/promedioDepto[depto].count;
	}
	for(let depto in promedioDepto){
  	document.write(`${depto}: $${promedioDepto[depto].promedio}<br>`);
	}
	
	// 4. Encontrar el empleado mejor pagado
	document.write("<br> <h1> Empleado mejor pago </h1>");
	let mejorPagado = empleados[0];
	document.write(mejorPagado.nombre + " ($" + mejorPagado.salario + ")<br>");

	// 5. Agrupar empleados por departamento
	document.write("<br> <h1> Empleados por departamento </h1>");
	let porDepto = empleados.reduce((acc,e)=>{
  	if(!acc[e.departamento]) acc[e.departamento]=[];
  	acc[e.departamento].push(e);
  	return acc;
	}, {});
	for(let d in porDepto){
  	document.write(`${d}: ${porDepto[d].map(e=>e.nombre).join(", ")}<br>`);
	}
	
	// 6. Filtrar empleados por cargo
	document.write("<br> <h1> Empleados por cargo </h1>");
	let eventas = empleados.filter(e=>e.cargo.includes("Ejecutivo de Ventas"));
	document.write("<b>Ejuecutivo de ventas:</b> " + eventas.map(e=>e.nombre).join(", ") + "<br>");
	let gventas = empleados.filter(e=>e.cargo.includes("Gerente de Ventas"));
	document.write("<b>Gerente de ventas:</b> " + gventas.map(e=>e.nombre).join(", ") + "<br>");
	let desajnior = empleados.filter(e=>e.cargo.includes("Desarrolladora Junior"));
	document.write("<b>Desarrolladora Junior:</b> " + desajnior.map(e=>e.nombre).join(", ") + "<br>");
	let desasenior = empleados.filter(e=>e.cargo.includes("Desarrolladora Senior"));
	document.write("<b>Desarrolladora Senior:</b> " + desasenior.map(e=>e.nombre).join(", ") + "<br>");
	*/
	
	/*
	// Dataset de ejemplo - Catálogo de Videojuegos
	let videojuegos = [
	    {
	        "titulo": "The Legend of Zelda: Breath of the Wild",
	        "plataforma": "Nintendo Switch",
	        "precio": 59.99,
	        "genero": "Aventura",
	        "rating": 97,
	        "stock": 25
	    },
	    {
	        "titulo": "Call of Duty: Modern Warfare",
	        "plataforma": "PlayStation 4",
	        "precio": 49.99,
	        "genero": "FPS",
	        "rating": 85,
	        "stock": 40
	    },
	    {
	        "titulo": "FIFA 25",
	        "plataforma": "Xbox Series X",
	        "precio": 54.99,
	        "genero": "Deportes",
	        "rating": 82,
	        "stock": 0
	    },
	    {
	        "titulo": "Super Mario Odyssey",
	        "plataforma": "Nintendo Switch",
	        "precio": 49.99,
	        "genero": "Plataformas",
	        "rating": 96,
	        "stock": 15
	    }
	];
	
	// Ejercicios propuestos:

	// 1. Ordenar juegos por rating (de mayor a menor)
	document.write("<br> <h1> Juegos por rating, de mayor a menor </h1>");
	videojuegos.sort((a,b)=>b.rating-a.rating);
	videojuegos.forEach(j=>document.write(`${j.titulo} - ${j.rating}<br>`));

	// 2. Filtrar juegos disponibles (con stock)
	document.write("<br> <h1> Juegos por disponibles (con stock) </h1>");
	let disponibles = videojuegos.filter(j=>j.stock>0);
	document.write(disponibles.map(j=>j.titulo).join(", ") + "<br>");

	// 3. Filtrar juegos por plataforma
	document.write("<br> <h1> Juegos por plataforma </h1>");
	let nintendo = videojuegos.filter(j=>j.plataforma==="Nintendo Switch");
	document.write("<b>Nintendo Switch:</b> " + nintendo.map(j=>j.titulo).join(", ") + "<br>");
	let playStation = videojuegos.filter(j=>j.plataforma==="PlayStation 4");
	document.write("<b>PlayStation 4:</b> " + playStation.map(j=>j.titulo).join(", ") + "<br>");
	let xbox = videojuegos.filter(j=>j.plataforma==="Xbox Series X");
	document.write("<b>Xbox:</b> " + xbox.map(j=>j.titulo).join(", ") + "<br>");

	// 4. Encontrar el juego más caro
	document.write("<br> <h1> Juegos más caro </h1>");
	let masCaroJuego = videojuegos.reduce((max,j)=>j.precio>max.precio?j:max);
	document.write(masCaroJuego.titulo + " ($" + masCaroJuego.precio + ")<br>");

	// 5. Agrupar juegos por género
	document.write("<br> <h1> Juegos por género </h1>");
	let porGenero = videojuegos.reduce((acc,j)=>{
  	if(!acc[j.genero]) acc[j.genero]=[];
  	acc[j.genero].push(j);
  	return acc;
	}, {});
	for(let g in porGenero){
  	document.write(`${g}: ${porGenero[g].map(j=>j.titulo).join(", ")}<br>`);
	}
	
	// 6. Calcular el valor total del inventario
	document.write("<br> <h1> Valor total del inventario </h1>");
	let valorInventario = videojuegos.reduce((sum,j)=>sum+j.precio*j.stock,0);
	document.write(valorInventario.toFixed(2) + "<br>");
	*/
	
	/*
	// Dataset de ejemplo - Datos de un Banco
	let banco = [
	    {
	        "nombre": "Banco Santander",
	        "direccion": "Av. de la Independencia, 100",
	        "telefono": "12345678",
	        "correo": "banco@santander.com",
	        "saldo": 1000000,
	        "dia_mora": 10
	    },
	    {
	        "nombre": "Banco BBVA",
	        "direccion": "Av. de la Independencia, 200",
	        "telefono": "98765432",
	        "correo": "banco@bbva.com",
	        "saldo": 2000000,
	        "dia_mora": 15
	    },
	    {
	        "nombre": "Bancolombia",
	        "direccion": "Av. de la Independencia, 300",
	        "telefono": "12345678",
	        "correo": "banco@santander.com",
	        "saldo": 3000000,
	        "dia_mora": 20
	    },
	    {
	        "nombre": "Davivienda",
	        "direccion": "Av. de la Independencia, 400",
	        "telefono": "98765432",
	        "correo": "banco@bbva.com",
	        "saldo": 4000000,
	        "dia_mora": 25
	    }
	];
	
	// Ejercicios propuestos:

	// 1. Ordenar bancos por saldo (de mayor a menor)
	document.write("<br> <h1> Bancos por saldo, de mayor a menor </h1>");
	banco.sort((a,b)=>b.saldo-a.saldo);
	banco.forEach(b=>document.write(`${b.nombre} - $${b.saldo}<br>`));

	// 2. Filtrar bancos con saldo mayor a 2000000
	document.write("<br> <h1> Bancos por saldo mayor a 2000000 </h1>");
	let ricos = banco.filter(b=>b.saldo>2000000);
	document.write(ricos.map(b=>b.nombre).join(", ") + "<br>");

	// 3. Calcular el saldo promedio por banco
	document.write("<br> <h1> Saldo promedio por banco </h1>");
	let promedioSaldo = banco.reduce((sum,b)=>sum+b.saldo,0)/banco.length;
	document.write(promedioSaldo + "<br>");

	// 4. Encontrar el banco con mayor dia mora
	document.write("<br> <h1> Bancos con mayor día de mora </h1>");
	let mayorMora = banco.reduce((max,b)=>b.dia_mora>max.dia_mora?b:max);
	document.write(mayorMora.nombre + " ("+mayorMora.dia_mora+" días)<br>");

	// 5. Agrupar bancos por nombre
	document.write("<br> <h1> Bancos por nombre </h1>");
	let porNombre = banco.reduce((acc,b)=>{
  	if(!acc[b.nombre]) acc[b.nombre] = [];
  	acc[b.nombre].push(b);
  	return acc;
	}, {});
	for(let n in porNombre){
  	document.write(`${n}: ${porNombre[n].map(b=>b.saldo).join(", ")}<br>`);
	}

	// 6. Filtrar bancos por correo
	document.write("<br> <h1> Bancos por correo </h1>");
	let bbva = banco.filter(b=>b.correo==="banco@bbva.com");
	document.write("<b> Bancos con correo banco@bbva.com:</b> " + bbva.map(b=>b.nombre).join(", ") + "<br>");
	let santander = banco.filter(b=>b.correo==="banco@santander.com");
	document.write("<b> Bancos con correo banco@santander.com:</b> " + santander.map(b=>b.nombre).join(", ") + "<br>");
	*/
