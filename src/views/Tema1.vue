<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 HTML 5
    

    p.mb-4 A continuación, presentamos un video donde se explica brevemente la definición de HTML:

    figure.mb-5
      .video
        <iframe width="853" height="480" src="https://www.youtube.com/embed/7F29cu4SPE0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      

    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        p.mb-4 Al conjunto de característica de cada etiqueta y sus diferentes funcionalidades que han evolucionado en el tiempo se le llama html, que a fecha de hoy ya va en la versión 5 y es regulado por el consorcio internacional W3C
        .cajon.color-acento-contenido.p-4
          p.mb-0 El Consorcio WWW, en inglés: <em>World Wide Web Consortium (W3C)</em> es un consorcio internacional que genera recomendaciones y estándares que aseguran el crecimiento de la <em>World Wide Web</em> a largo plazo.
            
      .col-lg-6
        figure.mb-5
          img(src='@/assets/curso/tema1/imgif.gif', alt='imagen ambiental', style="width: 400px;").m-auto


    #t_1_1.titulo-segundo.color-acento-contenido
      .h2 1.1 Etiquetas (TAGS) 
    


    .contenedor-total
      figure
        img.mx-auto(src='@/assets/curso/tema1/img2.jpg' alt='Imagen ambiental' style='')
      .contenedor-text
        .row.mb-4.mb-lg-0
          .col-auto
            p.mb-0 Representan el conjunto de funcionalidades que se puede implementar en una página web y cuentan con una sintaxis de escritura; es decir, una forma correcta en que se debe escribir y que debe cumplir con unos atributos y una interdependencia entre ellas. Es por esto que existen algunas etiquetas que para su funcionamiento dependen de otras estas etiquetas, lo que se conoce como etiquetas padres. Veamos un ejemplo mostrando lo relacionado con las etiquetas padres mínimas:

    .row.fondo-gradiente1.mb-5
      .col-lg-12.px-md-5.pt-5
        .row.justify-content-center.mb-5
          .col-lg-7.mb-4.mb-lg-0
            p.mb-4 Las etiquetas padre mínimas con las que debe cumplir un archivo .html son las siguientes:
            p.mb-4
              b &lt;HTML&gt; 
              b-none Indica el inicio del documento y que el documento está escrito en el lenguaje html.
            p.mb-4
              b &lt;HEAD&gt; 
              b-none Es el encabezado de la página y esta información va orientada al <em>browser</em>.
            p.mb-4
              b &lt;/HEAD&gt; 
              b-none  Indica el fin de la etiqueta head ambas etiquetas deben quedar dentro de la etiqueta padre html.
            p.mb-4
              b &lt;BODY&gt; 
              b-none Representa el cuerpo del contenido de la información que va a visualizar el usuario.
            p.mb-4
              b &lt;/BODY&gt; 
              b-none Indica el fin del cuerpo.
            p.mb-0
              b &lt;/HTML&gt; 
              b-none Indica el final del documento html.
                  
          .col-lg-5 
            figure
              img.mx-auto(src='@/assets/curso/tema1/img3.svg' alt='Imagen ambiental' style='width: 420px;')
        
        
        
        separador
        #t_1_2.titulo-segundo.color-acento-contenido
          .h2 1.2 Textos
        
        
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-7.mb-4.mb-lg-0
            p.mb-4 La inclusión de texto en una página web nace de la necesidad de presentar información a los visitantes, todo el texto que se incluya se debe presentar dentro de los tags padres antes descritos, dentro de ese orden de ideas, la recomendación es ordenar estos textos a manera de párrafos que vienen dado por la utilización de la etiqueta &lt;p&gt; y a continuación el texto que se quiere incluir y se cierra con la respectiva etiqueta de cierre&lt;/p&gt;. En función de lo planteado, se puede considerar que el conjunto de párrafos comprende todo el documento y los respectivos saltos de línea dentro de un texto viene dado por la etiqueta &lt;br/&gt;.
            p.mb-4 Otros elementos importantes para enriquecer un texto son los siguientes:
            .p-4(style="background-color: #D2EDEA;")
              p.mb-4 
                b &lt;blockquote/&gt; 
                b-none Párrafo que en sí mismo corresponde a una cita de reseña.
              p.mb-4 
                b &lt;q/&gt; 
                b-none Cita contenido dentro de un texto.
              p.mb-4 
                b &lt;em/&gt; 
                b-none Enfatizando el texto de un párrafo.
              p.mb-4 
                b &lt;strong/&gt; 
                b-none Resaltado de texto.
          .col-lg-5
            figure(data-aos="zoom-in")
              img.m-auto(src='@/assets/curso/tema1/img4.svg' alt='Imagen ambiental' style='width: 490px;')
        
        .row.justify-content-center.mb-5
          .col-lg-10
            p.mb-4
              b Ejemplo:
          .col-lg-9
            figure.mb-4
              img.m-auto(src='@/assets/curso/tema1/img5.svg' alt='Imagen ambiental' style='')
            p.mb-4 El resultado de la ejecución del código anterior se puede visualizar a continuación:
              
            .row.justify-content-center
              .col-4.col-lg-3
                a.boton.color-secundario.indicador__container(@click="modal1 = true")(style="border-radius: 100px; background: linear-gradient(to bottom, #039BE5, #027FBC);")
                  span.text-center 
                    b.text-white Ejecutar en el navegador
                  .indicador--click(v-if="mostrarIndicador")
            
            ModalA(:abrir-modal.sync="modal1")
              .row
                .col-12
                  figure.mb-4
                    img.m-auto(src='@/assets/curso/tema1/img6.png' alt='Imagen ambiental' style='')
                  

    
    
    
    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      .h2 1.3 Imágenes

    .row.mb-5
      p.mb-4 Para anexar una imagen a un documento html se usa la etiqueta &lt;img&gt; acompañada del atributo src que corresponde a la ubicación en donde se encuentra la imagen, bien sea en formato *.jpeg, *.gif, *.png entre otros formatos.
      span.mb-0.etiqueta(style="background-color: #B2E8EF; color: #12263f ") Otros atributos importantes para la etiqueta &lt;img&gt; son width y height que sirven para definir el ancho y el alto de la imagen dentro de la página web.
    
    

    .row.justify-content-center.mb-4.gx-0.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        .code
            code Ejemplo <br><br> &lt;html&gt; <br>&emsp; &lt;head&gt; <br>&emsp; &lt;/head&gt; <br>&emsp; &lt;body&gt; <br>&emsp;&emsp; &lt;img src="/misDocumentos/imagenes/2301-03.png" width="50% height:40%"&gt; &lt;/img&gt; <br>&emsp; &lt;/body&gt; <br> &lt;/html&gt;
      .col-10.col-lg-6
        figure(data-aos="zoom-in")
          img.m-auto(src='@/assets/curso/tema1/img7.svg' alt='Imagen ambiental' style='')


    
    separador
    #t_1_4.titulo-segundo.color-acento-contenido
      .h2 1.4 Hiperenlaces

    .row.justify-content-center.align-items-center.mb-5.gx-0
      .col-lg-6
        .p-5(style="background-color: #f6f6f6")
          p.mb-4 Es la funcionalidad que permite navegar entre diferentes páginas web; es decir, 
            span.etiqueta(style="color: #12263f") poder viajar entre páginas web en donde su contenido html se ha almacenado en archivos con nombre diferentes .
            b-none incluso en carpetas diferentes también se puede navegar hacia otras páginas web ya publicadas en la red internet.
            
          p.mb-0 Para lograr un hiperenlace se debe utilizar la etiqueta &lt;a&gt; acompañada del atributo href=”” que indica el destino hacia la página a la que se quiere llegar y dentro de la etiqueta el texto que describe el sitio destino.
          
      .col-lg-6
        figure.mb-0(data-aos="zoom-in")
          img.m-auto(src='@/assets/curso/tema1/img8.svg' alt='Imagen ambiental' style='')



    .row.justify-content-center.mb-4.gx-0.align-items-center
      .col-8.col-lg-5
        figure.mb-4.mb-lg-0(data-aos="zoom-in")
          img.m-auto(src='@/assets/curso/tema1/img9.svg' alt='Imagen ambiental' style='width: 400px;')
      .col-lg-6
        p.mb-4 Ejemplo: 
        .code
            code  &lt;html&gt; <br>&emsp; &lt;head&gt; <br>&emsp; &lt;/head&gt; <br>&emsp; &lt;body&gt; <br>&emsp; &lt;a href="http://www.google.com"&gt; http://www.google.com &lt;/a&gt; <br>&emsp; &lt;/body&gt; <br> &lt;/html&gt;


    
    
    separador
    #t_1_5.titulo-segundo.color-acento-contenido
      .h2 1.5 Tablas

    .row.justify-content-center.mb-5.align-items-center
      .col-lg-7.mb-4.mb-lg-0
        figure(data-aos="zoom-in")
          img.m-auto(src='@/assets/curso/tema1/img10.jpg' alt='Imagen ambiental' style='width: 700px;')
      .col-lg-5
        p.mb-4 Las tablas son los componentes apropiados para organizar el contenido dentro de una página web en forma de matriz; es decir, con filas y columnas.
        p.mb-4 Para definir una tabla se debe usar la etiqueta &lt;table&gt; acto seguido se debe definir la cantidad de filas dentro de la tabla con la etiqueta &lt;tr&gt; y a su vez se debe definir dentro de la etiqueta &lt;td&gt; el número de columnas que se quieren manejar para presentar la información, al final cada ítem fila-columna se convierte en una celda de información.
        .cajon.color-acento-contenido.p-4
          p.mb-0 Ejemplo: el siguiente código define una tabla de datos con 2 filas y tres columnas, el contenido de cada celda puede variar bien sea en su texto, hiperenlaces, imágenes u otros elementos.
          


    .row.justify-content-center.mb-5.fondo1
      .col-lg-12.px-md-5.pt-5
        .row.justify-content-center.mb-5
          .col-lg-9
            figure.mb-5(data-aos="zoom-in")
              img.m-auto(src='@/assets/curso/tema1/img11.svg' alt='Imagen ambiental' style='')
                
          .col-lg-8
            p.mb-4 El resultado de la ejecución del código anterior se puede visualizar a continuación:
            .row.justify-content-center
              .col-4.col-lg-3
                a.boton.color-secundario.indicador__container(@click="modal2 = true")(style="border-radius: 100px; background: linear-gradient(to bottom, #039BE5, #027FBC);")
                  span.text-center 
                    b.text-white Ejecutar en el navegador
                  .indicador--click(v-if="mostrarIndicador")
            
            ModalA(:abrir-modal.sync="modal2")
              .row
                .col-12
                  figure.mb-4
                    img.m-auto(src='@/assets/curso/tema1/img12.png' alt='Imagen ambiental' style='')
          
        .row.justify-content-center.mb-5
          .col-lg-10
            .p-5(style="background-color: #fff; border-radius: 25px; box-shadow: 0 3px 5px 0 rgb(17 30 97 / 30%);")
              p.mb-4
                b Divs
              p.mb-0 Si bien es cierto en el numeral anterior (1.5 Tablas) se explicó el funcionamiento de las tablas, en el diseño de hoy se recomienda usar la etiqueta 
                b div 
                b-none que corresponde a un contenedor y permite realizar lo mismo de las tablas, pero con mayores opciones en funcionalidad y dinamismo.
            
        .row.justify-content-center.mb-4.align-items-center
          .col-8.col-lg-6
            figure.mb-4.mb-lg-0(data-aos="zoom-in")
              img.m-auto(src='@/assets/curso/tema1/img13.svg' alt='Imagen ambiental' style='width: 600px;')
          .col-lg-6
            p.mb-4 Ejemplo de tabla usando div:
            .code
                code  &lt;div class="tabla"&gt; <br>&emsp;&emsp; &lt;div&gt; Cabecera con el logo de la página “header” &lt;/div&gt; <br>&emsp;&emsp; &lt;div&gt; <br>&emsp;&emsp;&emsp; &lt;div class="columna1"&gt; columna1 &lt;/div&gt;  <br>&emsp;&emsp;&emsp; &lt;div class="columna2"&gt; columna2 &lt;/div&gt;  <br>&emsp;&emsp;&emsp; &lt;div class="columna3"&gt; columna3 &lt;/div&gt;   <br>&emsp;&emsp; &lt;/div&gt;  <br>&emsp;&emsp; &lt;div&gt; Pie de pagina &lt;/div&gt; <br> &lt;/div&gt; 

    
    
    
    separador
    #t_1_6.titulo-segundo.color-acento-contenido
      .h2 1.6 Formularios

    .row.justify-content-center.mb-5.mb-lg-4
      .col-lg-6.mb-4.mb-lg-0
        p.mb-4 Los formularios son componentes html que permiten la interacción para intercambio de información con usuarios externos, estos se caracterizan por agrupar a su vez a un conjunto de elementos interactivos en donde se pueden ingresar datos de tipo numérico, alfanumérico, carácter, listas de datos entre otros este ingreso y su construcción se pueden elaborar tanto de manera dinámica como estática.
        p.mb-4 
          span.etiqueta(style="color: #12263f") La etiqueta que representa un formulario se denomina &lt;form&gt; y debe ser acompañado como mínimo del atributo <em>action</em>, 
          b-none que permite llegar al sitio destino que va a recibir los datos y método que permite definir el tipo de método que puede recibir los datos bien sea <em>post</em> o <em>get</em>.
          
        p.mb-0 A continuación, se describen algunos Tags que comúnmente conforman un formulario estos se deben encerrar dentro la etiqueta principal del formulario &lt;form&gt;:
          
      .col-lg-6
        figure.mb-4.mb-lg-0(data-aos="zoom-in")
          img.m-auto(src='@/assets/curso/tema1/img14.svg' alt='Imagen ambiental' style='width: 570px;')


    .row.mb-5.fondo2
      .col-lg-12.px-md-5.pt-5
        .row.justify-content-center
          .col-lg-5.mb-4.mb-lg-0
            .p-5(style="border-radius: 20px; background-color: #ffff;  box-shadow: 0 3px 5px 0 rgb(17 30 97 / 30%);")
              .row.justify-content-center.mb-0
                .col-auto
                  figure.mb-4
                    img.m-auto(src='@/assets/curso/tema1/icon1.svg' alt='Imagen ambiental' style='width: 80px;')
                p.mb-0
                  b &lt;input&gt; 
                  b-none Entrada de datos estas pueden ser texto, número o alfanumérico; sus atributos más importantes son <em>type</em> para definir el tipo de entrada que puede ser <em>text,radio,submit,reset,</em> el atributo id permite identificar de manera única el objeto en el archivo html, el atributo name es para darle un nombre a la entrada o variable y value para recibir el dato del componente.
          .col-lg-5
            .p-5(style="border-radius: 20px; background-color: #ffff;  box-shadow: 0 3px 5px 0 rgb(17 30 97 / 30%);")
              .row.justify-content-center.mb-0
                .col-auto
                  figure.mb-4
                    img.m-auto(src='@/assets/curso/tema1/icon1.svg' alt='Imagen ambiental' style='width: 80px;')
                p.mb-0
                  b &lt;label&gt; 
                  b-none Permite la definición de un nombre para una entrada de datos.

    .row.justify-content-center.mb-5
      .col-lg-9
        p.mb-4 Ejemplo de un formulario:
      .col-lg-9
        figure(data-aos="zoom-in")
          img.m-auto(src='@/assets/curso/tema1/img15.svg' alt='Imagen ambiental' style='')

    p.mb-4 El resultado de la ejecución del código anterior se puede visualizar a continuación:

    .row.justify-content-center
      .col-4.col-lg-2
        a.boton.color-secundario.indicador__container(@click="modal2 = true")(style="border-radius: 100px; background: linear-gradient(to bottom, #039BE5, #027FBC);")
          span.text-center 
            b.text-white Ejecutar en el navegador
          .indicador--click(v-if="mostrarIndicador")
            
    ModalA(:abrir-modal.sync="modal2")
      .row
        .col-12
          figure.mb-4
            img.m-auto(src='@/assets/curso/tema1/img16.png' alt='Imagen ambiental' style='')
          





</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
