# Test Plan: Implementación del Carrito de Compras desde un Mockup de Diseño

## Objetivo
Asegurar que la funcionalidad del carrito de compras se implemente correctamente a partir de un mockup de diseño, incluyendo la gestión de estado y actualizaciones en tiempo real de la UI.

## Alcance
- Frontend (React + TypeScript + Tailwind CSS)
- Componentes de UI relacionados con el carrito
- Gestión de estado del carrito
- Integración visual según mockup

## Casos de Prueba

### 1. Visualización Inicial del Carrito
- El carrito debe estar visible en la UI según el mockup.
- Si el carrito está vacío, debe mostrar un mensaje o estado vacío.

### 2. Agregar Productos al Carrito
- Al hacer clic en "Agregar al carrito" en un producto, este debe aparecer en el carrito.
- El contador de productos debe actualizarse en tiempo real.
- El subtotal y total deben reflejar los productos agregados.

### 3. Eliminar Productos del Carrito
- Al hacer clic en "Eliminar" en un producto del carrito, este debe desaparecer.
- El total y el contador deben actualizarse correctamente.

### 4. Modificar Cantidad de Productos
- Debe ser posible aumentar o disminuir la cantidad de un producto en el carrito.
- El subtotal y total deben actualizarse en tiempo real.
- No debe permitir cantidades negativas.

### 5. Persistencia del Estado del Carrito
- El estado del carrito debe mantenerse al navegar entre páginas.
- (Opcional) El carrito debe persistir tras recargar la página (localStorage/sessionStorage).

### 6. Actualización en Tiempo Real de la UI
- Cualquier cambio en el carrito debe reflejarse inmediatamente en la UI.
- No debe haber retrasos perceptibles.

### 7. Cumplimiento Visual con el Mockup
- El diseño del carrito debe coincidir con el mockup proporcionado (colores, tipografía, disposición, iconografía).
- El carrito debe ser responsive.

### 8. Accesibilidad
- El carrito debe ser navegable con teclado.
- Los elementos deben tener etiquetas ARIA apropiadas.

### 9. Integración con el Flujo de Compra
- El botón "Pagar" debe estar habilitado solo si hay productos en el carrito.
- Al hacer clic en "Pagar", debe redirigir al flujo de checkout.

## Criterios de Aceptación
- Todos los casos de prueba anteriores deben pasar.
- No deben existir errores de consola en la UI.
- El diseño debe coincidir con el mockup.

## Notas
- Se recomienda automatizar pruebas de UI con herramientas como React Testing Library y pruebas end-to-end con Playwright o Cypress.
