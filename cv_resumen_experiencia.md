# Resumen de experiencia — Flutter/Dart, app de fuerza de ventas

## Español

**Flutter/Dart Developer — App de fuerza de ventas multi-tenant**

- Diseñé e implementé sincronización offline-first (patrón outbox sobre Isar) en 3 módulos críticos (punto de venta, cobranzas, pedidos), con cola de reintentos y recuperación automática ante fallos de red.
- Mantengo una suite de **1,300+ pruebas unitarias** (dominio, casos de uso, Cubits), verificadas mediante pruebas de mutación para confirmar cobertura real, no solo cobertura de líneas.
- Detecté y corregí bugs de producción de alto impacto: bug de identidad Seller/User que rompía cálculos de cuota, fuga de rutas temporales de imágenes en 4 puntos de captura de fotos, error de zona horaria en conciliación de pagos, y un crash de layout reproducido y aislado con pruebas antes de resolverlo.
- Rediseñé 7+ pantallas completas a especificación de Figma pixel-por-pixel (incluyendo componentes compartidos entre flujos), verificando cada cambio contra el contrato real del backend para evitar funcionalidad fabricada sin soporte de datos.
- Refactoricé patrones de UI reactiva de alto costo (rebuilds anidados, `setState` para datos asíncronos) hacia `BlocSelector`/`buildWhen` granular, reduciendo reconstrucciones innecesarias del árbol de widgets.
- Auditoría y corrección de escalado de texto de accesibilidad en 22 pantallas para prevenir overflow de UI en dispositivos con fuente grande.

---

## English

**Flutter/Dart Developer — Multi-tenant Sales Force App**

- Designed and shipped offline-first sync (outbox pattern over Isar) across 3 critical modules (point-of-sale, collections, orders), with retry queuing and automatic recovery from network failures.
- Maintain a suite of **1,300+ unit tests** (domain, use cases, Cubits), verified via mutation testing to confirm real coverage, not just line coverage.
- Found and fixed high-impact production bugs: a Seller/User identity mismatch breaking quota calculations, a temp-file leak across 4 photo-capture entry points, a timezone bug in payment reconciliation, and a layout crash reproduced and isolated with tests before resolving.
- Rebuilt 7+ full screens to pixel-accurate Figma spec (including components shared across flows), cross-checking every change against the real backend contract to avoid shipping unsupported functionality.
- Refactored costly reactive-UI patterns (nested rebuilds, `setState` for async data) into granular `BlocSelector`/`buildWhen`, cutting unnecessary widget-tree reconstruction.
- Audited and fixed accessibility text-scaling across 22 screens to prevent UI overflow on large-font devices.
