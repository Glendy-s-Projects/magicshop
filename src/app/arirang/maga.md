# Cambios en el Código

## Resultado Arirang

En el código para `Resultadoarirang`, se realizaron los siguientes cambios en las etiquetas `<span>`:

- Se agregaron clases de utilidad para estilos como:
  - Colores: `bg-red`, `text-white`
  - Espaciado: `pr`, `pt`, `pb`
  - Posicionamiento: `z-index`
- Se implementó una constante `tagsStyles` para agrupar clases comunes y evitar repetición.

```jsx
<span
  className={`${tagsStyles} pr-10 pt-1 pb-1 rotate-[5deg] z-90 top-9 left-8`}
>
  My
</span>

<span
  className={`${tagsStyles} pr-16 pb-1 rotate-[-1deg] z-80 top-17 left-8`}
>
  Love
</span>

<span
  className={`${tagsStyles} pr-9 pb-1 rotate-[5deg] z-70 top-24 left-10`}
>
  Song
</span>

<span
  className={`${tagsStyles} pr-15 pb-1 rotate-[-5deg] z-60 top-31 left-7`}
>
  is
</span>
```

## Formulario

En el código del formulario, se realizaron los siguientes cambios en las etiquetas `<span>`:

- Se ajustaron clases para:
  - Color y bordes.
  - Tamaño de los botones.
  - Color de las letras.
  - Espaciado (`px` y `py`).
  - Rotación de los elementos.

```jsx
<span
  className={`${tagsStyles} object-contain px-6 py-2.5 mx-12 rotate-[-7deg] translate-x-[-5%] z-90`}
>
  What is
</span>

<span className={`${tagsStyles} rotate-[8deg] translate-x-[-1%] z-60`}>
  your
</span>

<span className={`${tagsStyles} z--1000`}>love song?</span>
```
