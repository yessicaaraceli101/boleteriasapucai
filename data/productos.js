/* =========================================================
   CARTA DE EJEMPLO
   Solo se usa mientras no estén cargados los IDs de Gastro en
   js/config.js, para poder ver el diseño. Con Gastro conectado,
   la carta sale de Gastro > Menú y este archivo se ignora.
   ========================================================= */
window.PRODUCTOS_INICIALES = [
  { id: "p1",  codigo: "0001", nombre: "Café de la estación", categoria: "Cafés", descripcion: "Café filtrado de la casa, servido en taza de loza.", precio: 10000, opciones: [{ nombre: "Taza", precio: 10000 }, { nombre: "Jarro grande", precio: 14000 }], disponible: true, imagen: "", creado: 20 },
  { id: "p2",  codigo: "0002", nombre: "Cortado", categoria: "Cafés", descripcion: "Espresso con un toque de leche espumada.", precio: 12000, opciones: [], disponible: true, imagen: "", creado: 19 },
  { id: "p3",  codigo: "0003", nombre: "Capuchino", categoria: "Cafés", descripcion: "Espresso, leche cremosa y canela.", precio: 18000, opciones: [{ nombre: "Clásico", precio: 18000 }, { nombre: "Con dulce de leche", precio: 21000 }], disponible: true, imagen: "", creado: 18 },
  { id: "p4",  codigo: "0004", nombre: "Cocido con leche", categoria: "Cafés", descripcion: "Yerba quemada con azúcar, como en casa de la abuela.", precio: 9000, opciones: [], disponible: true, imagen: "", creado: 17 },
  { id: "p5",  codigo: "0005", nombre: "Café helado", categoria: "Bebidas frías", descripcion: "Espresso frío, leche y hielo. Ideal para la siesta.", precio: 20000, opciones: [], disponible: true, imagen: "", creado: 16 },
  { id: "p6",  codigo: "0006", nombre: "Limonada con menta", categoria: "Bebidas frías", descripcion: "Limón exprimido, menta fresca y hielo.", precio: 15000, opciones: [{ nombre: "Vaso", precio: 15000 }, { nombre: "Jarra (4 vasos)", precio: 45000 }], disponible: true, imagen: "", creado: 15 },
  { id: "p7",  codigo: "0007", nombre: "Jugo natural del día", categoria: "Bebidas frías", descripcion: "Según la fruta de estación. Preguntá cuál hay hoy.", precio: 14000, opciones: [], disponible: true, imagen: "", creado: 14 },
  { id: "p8",  codigo: "0008", nombre: "Tereré con yuyos", categoria: "Tereré y mate", descripcion: "Termo con agua helada y yuyos machacados al momento.", precio: 20000, opciones: [], disponible: true, imagen: "", creado: 13 },
  { id: "p9",  codigo: "0009", nombre: "Mate cocido o mate", categoria: "Tereré y mate", descripcion: "Para las tardes frescas de Sapucai.", precio: 15000, opciones: [], disponible: true, imagen: "", creado: 12 },
  { id: "p10", codigo: "0010", nombre: "Torta del día", categoria: "Dulces", descripcion: "Porción casera. La variedad cambia cada día.", precio: 16000, opciones: [], disponible: true, imagen: "", creado: 11 },
  { id: "p11", codigo: "0011", nombre: "Alfajor de maicena", categoria: "Dulces", descripcion: "Relleno de dulce de leche y coco rallado.", precio: 7000, opciones: [], disponible: true, imagen: "", creado: 10 },
  { id: "p12", codigo: "0012", nombre: "Medialunas", categoria: "Dulces", descripcion: "De manteca, recién horneadas.", precio: 4000, opciones: [{ nombre: "Unidad", precio: 4000 }, { nombre: "Media docena", precio: 22000 }], disponible: false, imagen: "", creado: 9 },
  { id: "p13", codigo: "0013", nombre: "Chipa", categoria: "Salados", descripcion: "Chipa almidón calentita, del horno tatakua.", precio: 5000, opciones: [{ nombre: "Unidad", precio: 5000 }, { nombre: "Bolsa de 6", precio: 27000 }], disponible: true, imagen: "", creado: 8 },
  { id: "p14", codigo: "0014", nombre: "Sopa paraguaya", categoria: "Salados", descripcion: "Porción generosa, con queso Paraguay.", precio: 12000, opciones: [], disponible: true, imagen: "", creado: 7 },
  { id: "p15", codigo: "0015", nombre: "Mbejú", categoria: "Salados", descripcion: "Almidón y queso a la plancha.", precio: 13000, opciones: [], disponible: true, imagen: "", creado: 6 },
  { id: "p16", codigo: "0016", nombre: "Tostado de jamón y queso", categoria: "Salados", descripcion: "En pan de miga casero.", precio: 18000, opciones: [], disponible: true, imagen: "", creado: 5 },
  { id: "p17", codigo: "0017", nombre: "Combo andén", categoria: "Combos", descripcion: "Café de la estación + 2 chipas.", precio: 18000, opciones: [], disponible: true, imagen: "", creado: 4 },
  { id: "p18", codigo: "0018", nombre: "Combo encuentro", categoria: "Combos", descripcion: "2 capuchinos + 2 porciones de torta del día.", precio: 60000, opciones: [], disponible: true, imagen: "", creado: 3 },
  { id: "p19", codigo: "0019", nombre: "Combo tereré y chipa", categoria: "Combos", descripcion: "Tereré con yuyos + bolsa de 6 chipas para compartir.", precio: 42000, opciones: [], disponible: true, imagen: "", creado: 2 }
];
