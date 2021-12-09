<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 JavaScript
    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        .p-5(style="background-color: #039BE5")
          p.mb-0.text-white Es un lenguaje de programación que se inserta en una página <em>web</em> que es interpretado por los navegadores, el concepto de interpretado hace referencia a la ejecución secuencial línea por línea que hace el intérprete del navegador ante todo del lado cliente, aunque hoy en día también se logra del lado servidor con el apoyo Node.js el cual no es compilado como otros lenguajes de programación. Este lenguaje está orientado a brindar posibilidades de construcción de código html de manera dinámica; es decir, el programa que se crea construye el conjunto de tags html de manera automática multiplicando de manera sustancial el enriquecimiento del diseño de las interfaces <em>web</em>.	
      .col-10.col-lg-5
        figure
          img(src='@/assets/curso/tema3/img1.svg', alt='imagen ambiental', style="width: 450px;").m-auto
          




    #t_3_1.titulo-segundo.color-acento-contenido
      .h2 3.1 Introducción 

    .contenedor-total
      figure
        img.mx-auto(src='@/assets/curso/tema3/img2.jpg' alt='Imagen ambiental' style='')
      .contenedor-text
        .row.mb-4.mb-lg-0
          .col-lg-10
            p.mb-0 Es importante tener en cuenta que JavaScript y Java con lenguajes diferentes, dado que por llevar el mismo nombre se puede presentar para confusiones; para insertar código JavaScript a una página web se puede hacer de las siguientes formas: 


    .row.justify-content-center.align-items-center.mb-5
      .col-9.col-lg-6.mb-4.mb-lg-0
        figure
          img.mx-auto(src='@/assets/curso/tema3/img3.svg' alt='Imagen ambiental' style='width:590px;')
      .col-lg-6
        ul.lista-ul.mb-0
          li 
            i.fas.fa-layer-group(style="color: #039BE5;")
            p.mb-0 Con código que se agrega dentro de la misma página.
              
          li 
            i.fas.fa-layer-group(style="color: #039BE5;")
            p.mb-0 Con archivos independientes que se almacenan en rutas diferentes a la página.
              
          li 
            i.fas.fa-layer-group(style="color: #039BE5;")
            p.mb-0 Con código referenciado en otras páginas web ya publicadas en la red internet.
              
    

    .row.fondo3.mb-5.mb-lg-0
      .col-lg-12.p-lg-5
        .row.justify-content-center.mb-5
          .col-11.col-lg-5.mb-4.mb-lg-0
            .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img4.svg')})`}")
                .tarjeta-flip__contenido.p-4.p-xl-5
                  .code.pt-1.px-0
                    code  &lt;html&gt; <br>&emsp;&lt;head&gt; <br>&emsp;&emsp;&lt;title&gt; Página web con código JavaScript embebido <br>&emsp;&emsp;&lt;/title&gt; <br>&emsp;&emsp; &lt;script type="text/javascript"&gt; insertar tag con atributo type indicando el uso del lenguaje JavaScript <br> alert(“Mi primer mensaje usando JavaScript”); <br>&emsp;&emsp;&emsp;&lt;/script&gt; <br>&emsp;&lt;/head&gt; <br>&emsp;&lt;body&gt; <br>&emsp;&emsp;&lt;p&gt; Contenido de la página web &lt;/p&gt;  <br>&emsp;&lt;/body&gt; <br>&lt;/html&gt;
              
                
          .col-11.col-lg-5
            .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img5.svg')})`}")
                .tarjeta-flip__contenido.p-4.p-xl-5
                  .code.pt-1.px-0
                    code  &lt;html&gt; <br>&emsp;&lt;head&gt; <br>&emsp;&emsp;&lt;title&gt; Página web con código JavaScript embebido desde otros archivos fuera de la página actual. <br>&emsp;&emsp;&lt;/title&gt; <br>&emsp;&emsp; &lt;script src="static/js/miCodeUno.js"&gt; &lt;/script&gt; <br>&emsp;&emsp; &lt;script src="static/js/miCodeDos.js"&gt; &lt;/script&gt; <br>&emsp;&emsp;&lt;script src="static/js/miCodeTres.js"&gt; &lt;/script&gt; <br>&emsp;&lt;/head&gt; <br>&emsp;&lt;body&gt; <br>&emsp;&emsp;&lt;p&gt; Contenido de la página web &lt;/p&gt;  <br>&emsp;&lt;/body&gt; <br>&lt;/html&gt;
                    
        .row.justify-content-center.mb-0
          .col-lg-10
            p.mb-4 El resultado de la ejecución del código anterior se puede visualizar a continuación:
            .row.justify-content-center
              .col-4.col-lg-2
                a.boton.color-secundario.indicador__container(@click="modal1 = true")(style="border-radius: 100px; background: linear-gradient(to bottom, #039BE5, #027FBC);")
                  span.text-center 
                    b.text-white Ejecutar en el navegador
                  .indicador--click(v-if="mostrarIndicador")
                    
            ModalA(:abrir-modal.sync="modal1")
              .row
                .col-12
                  figure.mb-4
                    img.m-auto(src='@/assets/curso/tema3/img6.png' alt='Imagen ambiental' style='')



    p.mb-4 Ejemplo de inclusión de código desde archivos con extensión .js en url diferentes a la de la página:

          


    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      .h2 3.2 Versiones

    .row.justify-content-center
      .col-10.col-lg-10
        figure.mb-5
          img.m-auto(src='@/assets/curso/tema3/img8.png' alt='Imagen ambiental' style='')

    .row.justify-content-center.gx-0.mb-5
      .col-lg-7.mb-4.mb-lg-0(style="background-color: #039BE5")
        .p-5
          p.mb-0.pt-lg-5.text-white El lenguaje JavaScript aparece aproximadamente a mediados de los años noventa elaborado por Brendan Eich, como una forma de mejorar la experiencia de usuario, puesto que en aquella época la velocidad de internet era demasiado lenta y se requería de un lenguaje del lado cliente al momento de realizar una petición web. Al año siguiente 1996 se propuso determinar un estándar, puesto que cada navegador lo interpretaba a su manera y por eso surgió ECMA-262 Ed.1 ES1. La evolución del lenguaje muestra en la siguiente línea del tiempo:
      .col-10.col-lg-5
        figure
          img(src='@/assets/curso/tema3/img9.jpg', alt='imagen ambiental', style="").m-auto


    figure
      img(src='@/assets/curso/tema3/img10.svg', alt='linea de tiempo javascript', style="").m-auto

    separador
    #t_3_3.titulo-segundo.color-acento-contenido
      .h2 3.3 Sintaxis

    separador
    #t_3_4.titulo-segundo.color-acento-contenido
      .h2 3.4 Tipo de Datos

    separador
    #t_3_5.titulo-segundo.color-acento-contenido
      .h2 3.5 Estructuras de control






</template>

<script>
export default {
  name: 'Tema3',
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
