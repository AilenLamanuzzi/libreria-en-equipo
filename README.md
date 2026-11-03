# Librería en equipo · Práctica de Git

Desarrollo Web · Práctica para el parcial

**Objetivo:** cada integrante hace un cambio de una línea, lo sube en una rama, abre un Pull Request y revisa el PR de un compañero. Al final, el equipo resuelve un **conflicto de fusión** a propósito.

Un repositorio por equipo. No trabajen sobre una copia personal. No hace falta instalar paquetes ni usar Node.

**Duración orientativa:** 40–60 minutos.

---

## 1 · Clonar y repartir los cambios

| Persona | Archivo | Único cambio | Quién revisa su PR |
|---------|---------|--------------|--------------------|
| A | `cart.js` | Corregir el cálculo del descuento | B |
| B | `index.html` | Cambiar el texto de la promoción | C |
| C | `checkout.html` | Aclarar el texto del botón | D |
| D | `estilos.css` | Cambiar un color indicado | E |
| E | `equipo.html` | Escribir el nombre del equipo | A |

Con 4 integrantes omitan el cambio de color (D). Con 6, la sexta persona cambia el `<title>` de `equipo.html` y es revisada por A.

```bash
git clone https://github.com/USUARIO/libreria-en-equipo.git
cd libreria-en-equipo
code .
```

Configuración inicial (una sola vez):

```bash
git config --global user.name "Tu nombre"
git config --global user.email "tu-correo@example.com"
```

## 2 · Crear una rama y cambiar una línea

```bash
git status                      # carpeta limpia
git checkout main
git pull --ff-only origin main
git checkout -b nombre-apellido # tu rama, sin espacios ni tildes
```

Hacé **solo** tu cambio, guardá y abrí la página con doble clic.

**A · Descuento** (`cart.js`): reemplazá la línea del `return` por:

```js
  return subtotal * 0.9; // Aplica un 10% de descuento.
```
Comprobá en `index.html`: 100 → `90.00` y 0 → `0.00`. Antes de corregir aparece `NaN`: es el error intencional.

**B · Promoción** (`index.html`): reemplazá `Novedades del mes` por:

```html
<div class="promo">Cuadernos: 2x1 hasta el viernes</div>
```

**C · Botón** (`checkout.html`): reemplazá la línea del botón por:

```html
<button type="button" disabled>Demo: no se realizan compras</button>
```
Debe seguir deshabilitado.

**D · Color** (`estilos.css`): en la línea `.promo`, cambiá solo `#e8f4f3` por `#ffe4ec`. Conservá el resto y el comentario.

**E · Equipo** (`equipo.html`): reemplazá `<h1>Nombre del equipo</h1>` por:

```html
<h1>Equipo 01 · Nuestra librería</h1>
```
Poné tu número real.

## 3 · Guardar y subir el cambio

```bash
git diff                        # solo tu línea
git add ARCHIVO
git commit -m "Describo mi cambio"
git push -u origin nombre-apellido
```

## 4 · Abrir un PR y revisar el de otro

**Autor:** en GitHub, *Compare & pull request* (base: `main`, compare: tu rama). Completá la plantilla y pasale el enlace a tu revisor.

**Revisor:** abrí el PR → *Files changed* → comprobá la línea y cómo queda en el navegador → *Review changes* → *Approve* → *Submit review*. No se aprueba el PR propio.

Si hay un error: *Request changes*. El autor corrige en la misma rama (`add`, `commit`, `push`) y el PR se actualiza solo.

## 5 · Fusionar y traer el resultado

Cuando su compañero apruebe: *Merge pull request → Confirm merge*, de a uno. No borren las ramas.

```bash
git status
git checkout main
git pull --ff-only origin main
```

## 6 · Ronda extra: conflicto de fusión (entra en el parcial)

1. **D** y **E** crean cada uno una rama nueva desde `main` actualizado: `conflicto-d` y `conflicto-e`.
2. Los dos editan **la misma línea** de `PARTICIPACION.md` (la fila de la persona A): D escribe `Pendiente de D`, E escribe `Pendiente de E`.
3. Los dos hacen `add`, `commit`, `push` y abren su PR contra `main`.
4. Se fusiona el PR de D. El PR de E mostrará **conflicto**.
5. E resuelve **en su máquina**:

```bash
git checkout conflicto-e
git pull origin main        # aparece el conflicto
# En VS Code: Accept Current / Incoming / Both, sin dejar <<<<<<< ni >>>>>>>
git add PARTICIPACION.md
git commit -m "Resuelvo el conflicto en PARTICIPACION.md"
git push
```
6. Se fusiona el PR de E.

Guía de ayuda: [docs/GUIA-CONFLICTOS.md](docs/GUIA-CONFLICTOS.md)

## Terminaron cuando

- [ ] Cada integrante tiene un PR fusionado y revisó el de otra persona.
- [ ] El descuento funciona: 100 → 90.00 y 0 → 0.00.
- [ ] Se ven los cambios de todos.
- [ ] El conflicto está resuelto sin marcas `<<<<<<<` en el archivo.
- [ ] Todos actualizaron `main`.

Si falla el acceso o algo no se entiende, no usen `reset` ni `force`: pregunten al docente.
