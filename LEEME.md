# La Boletería · Café Cultural — Sitio web

Carta online conectada al sistema **Gastro**:
- **El menú sale de Gastro > Menú.** Lo que cargás, editás o borrás en el sistema aparece en la web al instante, sin tocar archivos.
- **Los pedidos caen en Gastro > Pedidos** como *Pendiente*, y además salen por WhatsApp.

Funciona igual que la otra página: cada negocio usa su propia empresa y sucursal, así que nada se mezcla.

## Archivos
- `index.html`: la página.
- `js/config.js`: **lo único que hay que editar** (WhatsApp, horarios, IDs de Gastro).
- `js/gastro.js`: conexión con Gastro (menú y pedidos).
- `js/app.js`, `js/comun.js`, `css/estilos.css`: funcionamiento y diseño.
- `data/productos.js`: carta de ejemplo, solo para ver el diseño mientras no esté conectado Gastro.
- `img/`: logos.

## Puesta en marcha
1. En Gastro, creá la empresa **La Boletería** y su sucursal ("Agregar empresa").
2. Con La Boletería seleccionada, cargá los productos en **Menú**.
3. Conseguí los IDs: creá un pedido de prueba en Gastro > Pedidos y, en la consola de Firebase (Firestore > `pedidos`), copiá los campos `empresaId` y `sucursalId` de ese pedido. Después borralo.
4. En `js/config.js`, completá:
   - `whatsapp`: número con 595 y sin el 0 (ej. `595981123456`).
   - `gastro.empresaId` y `gastro.sucursalId`: los IDs del paso 3.
   - `gastro.urlSistema` (opcional): dirección de Gastro para el botón "Acceder". Vacío lo oculta.
   - `horarios`, `direccion`, `instagram`.
5. Subí la carpeta al hosting y hacé un pedido de prueba desde la web.

## Cómo se ve el menú
- Se muestran los productos de la empresa que son de esta sucursal o que no tienen sucursal asignada (el mismo criterio que usa Gastro).
- **Categorías:** salen del campo de categoría de cada producto. Si no tiene, va a "Menú". El orden se puede fijar en `categorias` de `config.js`.
- **Foto:** si el producto tiene imagen en Gastro, se muestra. Si no, se usa un dibujo según la categoría.
- **Agotado:** si el producto está marcado como no disponible, aparece con el sello "Agotado hoy". Si está desactivado, no se muestra.
- Si un precio cambia en Gastro mientras alguien está armando su pedido, el pedido se actualiza solo.
- Campos que se leen (acepta nombres en inglés o en castellano): `name`/`nombre`, `price`/`precio`, `category`/`categoria`, `description`/`descripcion`, `image`/`imagen`/`imageUrl`/`foto`, `code`/`codigo`/`sku`, `disponible`/`available`, `activo`/`active`.

## Cómo se ve el pedido en Gastro
- **Código:** `WEB-K7P2QX`, el mismo que recibe el cliente en WhatsApp. Se puede buscar en Pedidos.
- **Cliente y teléfono:** lo que cargó el cliente.
- **Tipo:** Retiro. **Dirección** (en el detalle): "Mesa 4" o "Retira en el local", más la nota.
- **Items y total:** con la opción elegida.
- **Estado:** Pendiente. Con el check verde se registra como Entregado.

Si Firebase falla, el pedido igual sale por WhatsApp.

## Reglas de Firestore
La web es pública (los clientes no inician sesión), así que necesita permiso para dos cosas:
- **leer** los productos de La Boletería, y
- **crear** pedidos de La Boletería.

Si la carta muestra "No pudimos cargar la carta" o los pedidos no aparecen, abrí la consola del navegador (F12). Si dice *Missing or insufficient permissions*, buscá en tus reglas la parte que ya le da permiso a la otra página y sumá el empresaId de La Boletería. Por ejemplo:

```
match /productos/{id} {
  // ...tus reglas actuales para usuarios del sistema...
  allow read: if resource.data.empresaId in ["ID_OTRO_NEGOCIO", "ID_LA_BOLETERIA"];
}

match /pedidos/{id} {
  // ...tus reglas actuales para usuarios del sistema...
  allow create: if request.resource.data.status == "Pending"
                && request.resource.data.empresaId in ["ID_OTRO_NEGOCIO", "ID_LA_BOLETERIA"]
                && request.resource.data.items is list
                && request.resource.data.items.size() > 0;
}
```
No reemplaces tus reglas completas: solo agregá o ajustá esas partes.
