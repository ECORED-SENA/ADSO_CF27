<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Hojas de Estilo
    


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p.mb-4 Las hojas de estilo son el mecanismo mediante el cual se otorga a una página <em>web</em> su apariencia, para esto se crea un archivo nuevo con extensión .css que hace referencia a un tipo de archivo denominado CSS (Style Sheet Cascade) hojas de estilo en cascada. Estas hojas de estilo se escriben en un código que está compuesto por tags con sus atributos y los valores que adquieren estos atributos. La característica principal es que este código puede ser reutilizado sobre las páginas <em>web</em> en donde suelen repetirse las implementaciones de las mismas etiquetas; las hojas contribuyen a la facilidad de mantenimiento y control de varias páginas incluso de todo un sitio <em>web</em>.
        .p-4(style="background-color: #4DD0E1;")
          p.mb-0 En la siguiente imagen se presenta el esquema general en que se puede utilizar código CSS en una página web:
      .col-10.col-lg-6
        .row.justify-content-center
          .col-lg-10
            figure
              img.m-auto(src='@/assets/curso/tema2/img1.svg' alt='Imagen ambiental' style='width: 400px;')


    .row.justify-content-center.mb-5.fondo1
      .col-lg-7.py-5
        figure
          img.m-auto(src='@/assets/curso/tema2/img2.svg' alt='esquema de codigo CSS' style=';')



    #t_2_1.titulo-segundo.color-acento-contenido
      .h2 2.1 Conceptos 
    

    p.mb-4 Al momento de implementar las CSS es necesario tener en cuenta los siguientes puntos:


    .row.justify-content-center(style="margin-bottom: 60px;")
      .col-10.col-sm-10.col-lg-5.mb-4.mb-lg-0
        .tarjeta.p-5(data-aos="zoom-in" style=" background-color: #79E3D9;")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/icon1.svg', alt='imagen ambiental', style="width: 140px;").m-auto
          p.mb-4
            b Separación de estructura del documento, 
            b-none se refiere a la separación del contenido del documento html independiente de su presentación (tipos de letras, colores, tamaños de letras, espacios, fondos de pantalla, anexo de imágenes, entre otros)
              
      .col-10.col-sm-10.col-lg-5.mb-4.mb-lg-0
        .tarjeta.p-5(data-aos="zoom-in" style=" background-color: #4DC1FA;")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/icon1.svg', alt='imagen ambiental', style="width: 140px;").m-auto
          p.mb-0
            b Hojas de estilo según su manejo, 
            b-none pueden ser internas, externas o desde sitio web. Cuando es interna el código del estilo va incluido dentro de la página al ser externa se define en un archivo diferente a la a página con extensión CSS y si es desde otro sitio web se hace referencia por medio de su URL.
            



    .row.justify-content-center(style="margin-bottom: 60px;")
      .col-9.col-lg-4.pe-lg-0(style="background-color: #12263F")
        .cajonp
          p.mb-0.text-white
            b Ejemplo de hoja interna:
        .code.pt-1
          code  &lt;head&gt; <br>&emsp;&emsp; &lt;style&gt; <br>&emsp;&emsp;&emsp; body{ background-color: #FFFFFF;  <br>&emsp;&emsp;&emsp; }  <br>&emsp;&emsp;&emsp; h1{  <br>&emsp;&emsp;&emsp;&emsp; color: #000000; <br>&emsp;&emsp;&emsp;&emsp; text-align: center; <br>&emsp;&emsp;&emsp; }  <br>&emsp;&emsp; &lt;/style&gt;  <br> &lt;/head&gt; <br> &lt;body&gt; <br> &lt;/body&gt;
              
      .col-9.col-lg-4.px-lg-0(style="background-color: #4DD0E1")
        figure
          img(src='@/assets/curso/tema2/img3.svg', alt='imagen ambiental', style="width: 400px;").m-auto
          
      .col-9.col-lg-4.ps-lg-0(style="background-color: #12263F")
        .cajonp
          p.mb-0.text-white
            b Ejemplo de hoja interna:
        .code.pb-0.pt-1
          code  &lt;head&gt; <br>&emsp; &lt;link rel="stylesheet" type="text/css" href="styles.css"&gt;  <br> &lt;/head&gt; <br> &lt;body&gt; <br> &lt;/body&gt;
        .cajonp.pb-0.pt-1
          p.mb-0.text-white
            b Ejemplo de hoja sitio <em>web</em>:
        .code.pb-0.pt-1
          code  &lt;head&gt; <br>&emsp; &lt;link rel="stylesheet" type="text/css" href="https://www.estilo.css"&gt;  <br> &lt;/head&gt; <br> &lt;body&gt; <br> &lt;/body&gt;
          

    .tarjeta.fondo-slider.p-4.mb-4
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-md-0
            p.mb-0 
              b Selectores de CSS, 
              b-none se utilizan para determinar los elementos a los que se va a aplicar el estilo y se clasifican por nombre, por id de selector y por clase.
              
          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/tema2/img4.png', alt='imagen que acompaña', style="width: 500px;").m-auto
          
        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-md-0
            p.mb-0 Ejemplo de selector por id en donde solo se aplica un elemento único qui el nombre del estilo va precedido por el carácter #.
              
          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/tema2/img5.png', alt='imagen que acompaña', style="width: 500px;").m-auto
          
        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-md-0
            p.mb-0 Ejemplo de selector de clase, en este caso se pueden personalizar los estilos para aplicarlos a diferentes elementos que comparten alguna relación para ello se debe escribir un punto(.) delante del nombre de la clase:
              
          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/tema2/img6.png', alt='imagen que acompaña', style="width: 500px;").m-auto
          
    
    
    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      .h2 2.2 Introducción CSS3
    
    

    .row.fondo-gradiente1.mb-4
      .col-lg-12.px-md-5.pt-0
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8.mb-4.mb-lg-0
            p.mb-0
              b-none.etiqueta CSS3 es la evolución de CSS y CSS2,
              b-none  esta nueva versión presenta como novedad mejoras que a grandes rasgos pueden dividirse en dos características:
              b-none.etiqueta la primera es la aplicación del concepto de módulos
              b-none que permite aproximar la definición del estilo de un sitio web a partir de la programación; es decir, donde se puede hacer para ello la analogía a los patrones de diseño que implementan algún controlador, por lo que los módulos permiten definir contextos de aplicación de estilos e identificarlos en archivos diferentes (con extensión .less) que finalmente se integran en un archivo controlador
              b-none.etiqueta La segunda es la posibilidad de enriquecer los elementos que conforman
              b-none las páginas directamente desde el estilo con animaciones, transiciones, layout con columnas, gradientes para modificar colores, transformaciones para rotar elementos, así como también el ingreso de uso de fuente de texto externas por medio de librerías.
            
          .col-10.col-lg-4
            figure
              img(src='@/assets/curso/tema2/img7.svg', alt='imagen que acompaña', style="width: 420px;").m-auto
          
        .row.justify-content-center.mb-4
          p.mb-0 Ejemplo de estructura de uso de módulos:
        .row.justify-content-center.mb-5
          .col-11.col-lg-8
            figure.mb-lg-5
              img(src='@/assets/curso/tema2/img8.svg', alt='imagen que acompaña', style="").m-auto



    
    
    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      .h2 2.3 Estructura
    
    .contenedor-total
      figure
        img.mx-auto(src='@/assets/curso/tema2/img9.jpg' alt='Imagen ambiental' style='')
      .contenedor-text
        .row.mb-4.mb-lg-0
          .col-auto
            p.mb-0 La estructura de CSS3 corresponde al conjunto de reglas recopiladas en un archivo; una regla a su vez corresponde a la utilización de algún tipo de selector como los que ya vimos en puntos anteriores y una o varias declaraciones separadas por punto y una (;), la declaración se conforma de una propiedad y un valor; dichas declaraciones se pueden escribir de manera directa en el tag de html deseado utilizando el atributo style y entre comillas la propiedad los dos puntos y su valor.
    
    p.mb-4 Ejemplo de estructura: 

    .row.fondo1.mb-5
      .col-lg-12.px-md-5.py-5
        .row.justify-content-center
          .col-lg-11
            figure
              img.mx-auto(src='@/assets/curso/tema2/img10.svg' alt='Imagen ambiental' style='')

    .row.justify-content-center.mb-4
      .col-lg-3.mb-4.mb-lg-0
        p.mb-0
          b Con uso del atributo style:
      .col-10.col-lg-9
        .row
          .col-lg-10
            figure
              img.mx-auto(src='@/assets/curso/tema2/img11.svg' alt='Imagen ambiental' style='')



    separador
    #t_2_4.titulo-segundo.color-acento-contenido
      .h2 2.4 Formularios CSS3

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-5
        figure
          img.mx-auto(src='@/assets/curso/tema2/img12.svg' alt='Imagen ambiental' style='width: 482px;')
          
      .col-lg-7
        .cajon.color-acento-contenido.p-4
          p.mb-0 Estos formularios se construyen de manera normal básicamente como lo vimos en los puntos anteriores, solo que en esta nueva versión se caracteriza por que se agregan nuevos tipos de datos (color, tel, email, date, url, time, month, number, week, datetime, range, search), nuevos controles (output) y nuevos atributos (placeholder, autofocus, min, required, max, step, pattern), para estos casos por recomendación de la W3c es necesario verificar su funcionamiento en los diferentes navegadores hasta el momento solo funcionan bien solo con el navegador Opera.


    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Ejemplo de formulario:")
        .col-12
          figure
            img.mx-auto(src='@/assets/curso/tema2/img13.svg' alt='Imagen ambiental' style='')
          

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
            img.m-auto(src='@/assets/curso/tema1/img16.png' alt='Imagen ambiental' style='')



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    modal1: false,
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
