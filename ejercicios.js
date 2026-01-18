const ejercicio1 = document.getElementById("ejercicio1");
const ejercicio2 = document.getElementById("ejercicio2");
const ejercicio3 = document.getElementById("ejercicio3");
const ejercicio4 = document.getElementById("ejercicio4");
const ejercicio5 = document.getElementById("ejercicio5");
const ejercicio6 = document.getElementById("ejercicio6");
const ejercicio7 = document.getElementById("ejercicio7");
const ejercicio8 = document.getElementById("ejercicio8");
const ejercicio9 = document.getElementById("ejercicio9");
const ejercicio10 = document.getElementById("ejercicio10");
const ejercicio11 = document.getElementById("ejercicio11");
const ejercicio12 = document.getElementById("ejercicio12");
const ejercicio13 = document.getElementById("ejercicio13");
const ejercicio14 = document.getElementById("ejercicio14");
const ejercicio15 = document.getElementById("ejercicio15");
const ejercicio16 = document.getElementById("ejercicio16");
const ejercicio17 = document.getElementById("ejercicio17");
const ejercicio18 = document.getElementById("ejercicio18");
const ejercicio19 = document.getElementById("ejercicio19");
const ejercicio20 = document.getElementById("ejercicio20");




// ejercicio 1
const array_numeros = [1,2,3,4];
let lista_dobles = [];
array_numeros.forEach(n => {
    let resultado = `${n} --> ${n*2}\n`;
    lista_dobles.push(resultado);
});

ejercicio1.textContent = lista_dobles;

// ejercicio 2

const array_celsius = [23,17,15,9];

const array_fahrenheit = array_celsius.map(n => n*9/5+32)

ejercicio2.textContent = array_fahrenheit;


// ejercicio 3 

const palabras = ["sol","vacaciones","once","cascadas","tres","sitios"];

const letras_5 = palabras.filter(n => n.length > 5);

ejercicio3.textContent = letras_5;

// ejercicio 4

const precios = [23.99,12.50,3.45];
const suma = precios.reduce((acum,n) => acum + n, 0);

ejercicio4.textContent = suma;

// ejercicio 5

const edades = [23,12,14,15,18,50];

if (edades.some(n => n >18)) {
    ejercicio5.textContent = "Hay personas mayores de edad.";
}


// ejercicio 6

const productos = [
    { nombre: "Pan", precio: 1.20 },
    { nombre: "Leche", precio: 0.95 },
    { nombre: "Huevos", precio: 2.50 },
    { nombre: "Queso", precio: 3.75 },
    { nombre: "Manzanas", precio: 1.80 },
    { nombre: "Televisor", precio: 450 },
    { nombre: "Portátil", precio: 899 }
];


const menor_50 = productos.filter(n => n["precio"] < 50);
const productos_nombre = menor_50.map(n => n["nombre"]);

ejercicio6.textContent = productos_nombre;

// ejercicio 7

const frecuencia = ["casa","perro","gato","casa","árbol","perro","sol","gato","casa"];
const veces = frecuencia.reduce((conteo,palabra) => {
    if (!(conteo[palabra]))  {
        conteo[palabra] = 1;
    }
    else {
        conteo[palabra] += 1
    }
    return conteo;
},{});

ejercicio7.textContent = JSON.stringify(veces)

// ejercicio 8

const usuarios = [
  { id: 1, nombre: "Lucas" },
  { id: 2, nombre: "Gonzalo" },
  { id: 3, nombre: "María" },
  { id: 4, nombre: "Carlos" },
  { id: 5, nombre: "Lucía" }
];

let id_nombre = {};
usuarios.forEach(n => {
    let id_i = n["id"];
    let nombre_i = n["nombre"];
    id_nombre[id_i] = nombre_i;
});

ejercicio8.textContent = JSON.stringify(id_nombre);

// ejercicio 9

function imprimirSaludos(nombre) {
    ejercicio9.innerHTML += `Hola ${nombre}<br>`;
};

array_usuarios = ["Lucas","Gonzalo","Luis","Rocío"];
array_usuarios.map(imprimirSaludos);


// ejercicio 10

const num_arrray = [1,2,3,4,5,-2,-6];

let num_negativos = num_arrray.some(n => n  < 0);

let num_positivos = num_arrray.filter(n => n > 0);

let suma_num = num_arrray.reduce((acum,n) => n +acum,0);

ejercicio10.innerHTML = `Hay números negativos: ${num_negativos} <br> Los números positivos son: ${num_positivos} <br> La suma es: ${suma_num}`;

//ejercicio 11

const transacciones = [
  { id: 1, tipo: 'ingreso', cantidad: 1000 },
  { id: 2, tipo: 'gasto',   cantidad: 200 },
  { id: 3, tipo: 'ingreso', cantidad: 500 },
  { id: 4, tipo: 'gasto',   cantidad: 150 },
  { id: 5, tipo: 'ingreso', cantidad: 1200 },
];

const balance = transacciones.reduce((cuenta,palabra_n) => {
    if (palabra_n["tipo"] === "ingreso") {
        return cuenta + palabra_n["cantidad"];

    }
    else {
        return cuenta - palabra_n["cantidad"];
    };
},0);

ejercicio11.textContent = `El balance final es ${balance}.`;

// ejercicio 12

const pedidos = [
  { cliente: "Lucas",   total: 250, estado: "pendiente" },
  { cliente: "María",   total: 120, estado: "pagado" },
  { cliente: "Carlos",  total: 500, estado: "pendiente" },
  { cliente: "Ana",     total: 300, estado: "pagado" },
  { cliente: "Rocío",   total: 150, estado: "pendiente" }
];

const pedidos_f = pedidos.filter(n => n["estado"] === "pagado");

const pedidos_suma = pedidos_f.reduce((acum,n) => acum + n["total"],0);

ejercicio12.textContent =`El total de los pedidos pagados es: ${JSON.stringify(pedidos_suma)} €.`;


// ejercicio 13

const productos_13 = [
  { categoria: "fruta",   nombre: "Manzana" },
  { categoria: "fruta",   nombre: "Banana" },
  { categoria: "verdura", nombre: "Zanahoria" },
  { categoria: "bebida",  nombre: "Agua" },
  { categoria: "bebida",  nombre: "Zumo de naranja" },
  { categoria: "lácteo",  nombre: "Leche" },
  { categoria: "lácteo",  nombre: "Queso" }
];

const agrupacion_cat = productos_13.reduce((dict,productos_dict) => {
    let categoria = productos_dict["categoria"];
    let nombre = productos_dict["nombre"];
    if (!(dict[categoria])) {
        dict[categoria] = [];
    };
    dict[categoria].push(nombre);
    return dict;

},{});

ejercicio13.textContent = JSON.stringify(agrupacion_cat);

// ejercicio 14

const usuarios_14 = [
  { id: 1, nombre: "Lucas",  roles: ["admin", "editor"] },
  { id: 2, nombre: "María",  roles: ["editor"] },
  { id: 3, nombre: "Carlos", roles: ["viewer"] },
  { id: 4, nombre: "Ana",    roles: ["editor", "viewer"] },
  { id: 5, nombre: "Rocío",  roles: ["admin"] }
];

const rolesPorUsuario = usuarios_14.map(u => u.roles.length);

const totalRoles = rolesPorUsuario.reduce((acc, numRoles) => acc + numRoles, 0);

ejercicio14.textContent = `Hay: ${rolesPorUsuario} roles por usuario y un total de: ${totalRoles} roles.`;

// ejercicio 15

const productos_15 = [
  { nombre: "Manzana",tags: ["fruta", "fresco", "orgánico","oferta"] },
  { nombre: "Leche",tags: ["lácteo", "fresco"] },
  { nombre: "Pan integral",tags: ["panadería", "saludable"] },
  { nombre: "Jugo de naranja",tags: ["bebida", "fruta"] },
  { nombre: "Queso",tags: ["lácteo", "fresco","oferta"] }
];

productos_oferta = []
hay_oferta = productos_15.some(n => n["tags"].includes("oferta"));

if (hay_oferta) {
    productos_oferta = productos_15.filter(n => n["tags"].includes("oferta"));
}

ejercicio15.textContent = JSON.stringify(productos_oferta);

// ejercicio 16

const emails = [
  "Juan.Perez@gmail.com",
  "maria.lopez@Hotmail.com",
  "admin@empresa.com",
  "soporte@Empresa.com",
  "juan.perez@gmail.com",
  "VENTAS@empresa.com",
  "Maria.Lopez@hotmail.com",
  "contacto@dominio.org",
]

let array_unicos = emails.reduce ((array_nuevo,n) => {
    n_minuscula = n.toLowerCase();
    existe_array = array_nuevo.some(n => n.toLowerCase() === n_minuscula);
    if(!(existe_array)) {
        array_nuevo.push(n_minuscula);
    };
    return array_nuevo;
},[]);

ejercicio16.textContent = array_unicos;

// ejercicio 17

const alumnos = [
  {
    nombre: "Ana",
    notas: [8, 7.5, 9, 6]
  },
  {
    nombre: "Carlos",
    notas: [5, 6, 4.5, 7]
  },
  {
    nombre: "Lucía",
    notas: [9.5, 9, 10, 8.5]
  },
  {
    nombre: "Miguel",
    notas: [6, 6.5, 7, 5.5]
  },
  {
    nombre: "Sofía",
    notas: [7, 8, 7.5, 4.5]
  }
];

let alumnos_suspensos = alumnos.filter(n => n["notas"].some(s => s < 5));
ejercicio17.textContent = JSON.stringify(alumnos_suspensos);

// ejercicio 18

const peliculas = [
  { titulo: "El Padrino", rating: 9.2 },
  { titulo: "Forrest Gump", rating: 8.8 },
  { titulo: "Inception", rating: 8.7 },
  { titulo: "Titanic", rating: 7.8 },
  { titulo: "Matrix", rating: 8.6 },
  { titulo: "La La Land", rating: 8.0 },
]

let peliculas_aprobadas = peliculas.reduce((acum,n) => {
    let titulo = n["titulo"];
    let nota = n["rating"];
    if (nota > acum) {
        acum = nota
    };

    if (nota === acum) {
        ejercicio18.textContent = `La pelicula con mayor nota es: ${titulo}.`
    };

    return acum;
},0);

// ejercicio 19

const valores = ["  Hola  ", "Mundo", " ", "", " JavaScript ", "  "];

let valores_convertidos = valores.map(n => n.toLowerCase().trim("")).filter(s => s !== "");

ejercicio19.textContent = valores_convertidos;

// ejercicio 20

const logs = [
  "INFO: Usuario conectado",
  "WARN: Memoria baja",
  "ERROR: Fallo de base de datos",
  "INFO: Página cargada",
  "WARN: CPU alta",
  "ERROR: Timeout",
  "INFO: Sesión iniciada",
  "ERROR: Error de red",
  "WARN: Disco casi lleno",
  "INFO: Usuario desconectado"
];


const niveles = [];
const por_nivel = logs.forEach(n => {
    texto_separado = n.split(":")[0];
    niveles.push(texto_separado);
});


const conteo = niveles.reduce((acum,n) => {
    if (!acum[n]) {
        acum[n] = 1;
    }
    else{
        acum[n] += 1;
    };
    return acum;
},{})

ejercicio20.textContent = JSON.stringify(conteo);