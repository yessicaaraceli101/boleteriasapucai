/* Funciones de formato y dibujos de la carta */
(function () {
  function gs(n) {
    const num = Math.round(Number(n) || 0);
    return "Gs. " + String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  function esc(t) {
    return String(t ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  // Dibujos de línea para cada categoría (se usan cuando el producto no tiene foto)
  const ICONOS = {
    "Cafés": '<svg viewBox="0 0 64 64"><path d="M14 26h30v12a14 14 0 0 1-14 14h-2a14 14 0 0 1-14-14z"/><path d="M44 30h4a6 6 0 0 1 0 12h-5"/><path d="M10 56h40"/><path d="M24 10c-3 4 3 6 0 10M32 8c-3 4 3 7 0 12"/></svg>',
    "Bebidas frías": '<svg viewBox="0 0 64 64"><path d="M18 18h28l-4 38H22z"/><path d="M36 18l6-12h6"/><path d="M20 30h24"/><rect x="25" y="36" width="6" height="6" rx="1"/><rect x="33" y="42" width="6" height="6" rx="1"/></svg>',
    "Tereré y mate": '<svg viewBox="0 0 64 64"><path d="M20 24h22v22a11 11 0 0 1-22 0z"/><path d="M20 24c2-4 20-4 22 0"/><path d="M36 28l8-20h4"/><path d="M24 36h14M24 42h14"/></svg>',
    "Dulces": '<svg viewBox="0 0 64 64"><path d="M10 44l44-14v18H10z"/><path d="M10 44l44-14"/><path d="M10 38l44-14v6"/><path d="M10 38v6"/><circle cx="44" cy="20" r="4"/></svg>',
    "Salados": '<svg viewBox="0 0 64 64"><circle cx="32" cy="34" r="18"/><circle cx="32" cy="34" r="7"/><path d="M20 22l3 3M44 22l-3 3M18 40l4-1M46 40l-4-1M32 14v4"/></svg>',
    "Combos": '<svg viewBox="0 0 64 64"><path d="M8 34h22v8a9 9 0 0 1-9 9h-4a9 9 0 0 1-9-9z"/><path d="M30 37h3a4 4 0 0 1 0 8h-3"/><ellipse cx="46" cy="50" rx="12" ry="4"/><circle cx="42" cy="44" r="4"/><circle cx="50" cy="44" r="4"/><path d="M14 22c-2 3 2 5 0 8M22 20c-2 3 2 6 0 9"/></svg>'
  };
  const ICONO_DEFECTO = ICONOS["Cafés"];

  const PALABRAS = [
    [/combo|promo|merienda|desayuno/, "Combos"],
    [/terere|mate|yuyo/, "Tereré y mate"],
    [/fri|helad|jugo|limonada|gaseosa|refresco|licuado|agua|cerveza|bebida/, "Bebidas frías"],
    [/caf|capuch|cortado|latte|espresso|te\b|cocido|chocolate/, "Cafés"],
    [/dulce|torta|postre|alfajor|factura|medialuna|pastel|galleta|budin/, "Dulces"],
    [/salad|chipa|pan|empanada|sopa|mbeju|sandw|tostado|pizza|comida|plato|minuta/, "Salados"]
  ];

  function icono(categoria) {
    if (ICONOS[categoria]) return ICONOS[categoria];
    const t = String(categoria || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const hit = PALABRAS.find(([re]) => re.test(t));
    return hit ? ICONOS[hit[1]] : ICONO_DEFECTO;
  }

  window.Comun = { gs, esc, icono };
})();
