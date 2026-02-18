En la codigo Resultadoarirang se realizaron los siguientes cambios. se agrego en los en las etiquetas SPAN las clases br, by, py, px, bg-red par los colores, al igual que text white, del mismo modo z-0...  
tambien se agrego ${tagsStyles}  para que no se vuelva a repetir las mismas clases, en la ediqueta span esto se agrego en la constante tagsstyles 
          
          <span className={`${tagsStyles} pr-10 pt-1  pb-1 rotate-[5deg] z-90 top-9 left-8`}
          >
            My
          </span>

          <span
            className={`${tagsStyles}   pr-16 pb-1 rotate-[-1deg]   z-80  top-17 left-8`}
          >
            Love
          </span>

          <span
            className={`${tagsStyles}  pr-9 pb-1 rotate-[5deg]   z-70  top-24 left-10`}
          >
            Song
          </span>

          <span
            className={`${tagsStyles}  pr-15 pb-1 rotate-[-5deg]   z-60  top-31 left-7`}
          >
            is
          </span>

En el codigo formulario se realizaron  los siguientes cambios en las etiquetas Span, las classe de color, bordes tamano de en los botones, cambio de el color de las letras, de igual forma se realizo cambios en los px y py, cambios en la rotacion de los botoenes...

          <span className={`${tagsStyles} object-contain px-6 py-2.5 mx-12 rotate-[-7deg] translate-x-[-5%]   z-90`}>
            What is
          </span>

          <span className={`${tagsStyles} rotate-[8deg] translate-x-[-1%]   z-60`}>
            your
          </span>

          <span className={`${tagsStyles} z--1000`}>
            love song?
          </span>
