/* =========================================================
   CONFIGURACIÓN DE LA BOLETERÍA CAFÉ CULTURAL
   Editá estos datos y guardá el archivo. No hace falta tocar nada más.
   ========================================================= */
window.CONFIG = {
  nombre: "La Boletería",
  subtitulo: "Café cultural en Sapucai",

  // Número de WhatsApp con código de país, SIN "+", espacios ni guiones.
  // Ejemplo Paraguay: 595981123456
  whatsapp: "595983957615",

  instagram: "https://www.instagram.com/laboleteria.sapucai/",
  direccion: "Antigua Boletería de la Estación de Sapucai, Paraguarí",
  mapa: "https://maps.google.com/?q=Estación+de+Sapucai",
  // Texto que se busca en el mapa incrustado de la sección "Visitanos"
  mapaBusqueda: "Estación de Sapucai, Paraguarí, Paraguay",

  // Horarios (formato 24 h). Poné null el día que está cerrado.
  horarios: {
    lunes:     null,
    martes:    { abre: "08:00", cierra: "19:00" },
    miercoles: { abre: "08:00", cierra: "19:00" },
    jueves:    { abre: "08:00", cierra: "19:00" },
    viernes:   { abre: "08:00", cierra: "21:00" },
    sabado:    { abre: "08:00", cierra: "21:00" },
    domingo:   { abre: "08:00", cierra: "20:00" }
  },

  /* =======================================================
     CONEXIÓN CON EL SISTEMA GASTRO
     Cada pedido de la web se guarda en Firebase y aparece en
     Gastro > Pedidos como "Pendiente". Si algo falla, el pedido
     igual sale por WhatsApp.
     ======================================================= */
  gastro: {
    activo: true,

    // Mismos datos que usa el sistema Gastro (pedidos.html)
    firebase: {
      apiKey: "AIzaSyAttBvD83gI770HibucrqDVzMuqLcYONNY",
      authDomain: "gastro-7c5ad.firebaseapp.com",
      projectId: "gastro-7c5ad",
      storageBucket: "gastro-7c5ad.firebasestorage.app",
      messagingSenderId: "990505475007",
      appId: "1:990505475007:web:09a5066610de6c7e81df0a"
    },

    // ⚠️ OBLIGATORIO: IDs de La Boletería dentro de Gastro.
    // Son los mismos que usa el sistema al entrar con la empresa y
    // sucursal de La Boletería. Sin esto los pedidos NO se guardan
    // (así nunca caen en el panel del otro negocio).
    empresaId: "la-boleteria",
    sucursalId: "estacion-sapucai",

    // Dirección del sistema Gastro (botón "Acceder" de la web).
    // Dejalo vacío ("") para ocultar el botón.
    urlSistema: "",

    // Gastro guarda los precios del menú en dólares y los muestra en Gs
    // multiplicando por esta tasa (la misma de pedidos.js: Gs 7300).
    tasaGs: 7300,

    // Prefijo del código que se ve en Gastro > Pedidos (ej. WEB-K7P2QX)
    prefijoCodigo: "WEB"
  },

  // Orden en que se muestran las categorías del menú de Gastro.
  // Las que no estén en esta lista aparecen después, en orden alfabético.
  categorias: ["Bebidas", "Comidas", "Postres", "Pizzas"]
};
