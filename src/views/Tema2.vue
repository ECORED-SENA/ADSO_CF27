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


    .row.justify-content-center.mb-5
      .col-10.col-sm-5.col-lg-5.mb-4.mb-lg-0
        .tarjeta.p-5(data-aos="zoom-in" style=" background-color: #79E3D9;")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/icon1.svg', alt='imagen ambiental', style="width: 140px;").m-auto
          p.mb-4
            b Separación de estructura del documento, 
            b-none se refiere a la separación del contenido del documento html independiente de su presentación (tipos de letras, colores, tamaños de letras, espacios, fondos de pantalla, anexo de imágenes, entre otros)
              
      .col-10.col-sm-5.col-lg-5.mb-4.mb-lg-0
        .tarjeta.p-5(data-aos="zoom-in" style=" background-color: #4DC1FA;")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/icon1.svg', alt='imagen ambiental', style="width: 140px;").m-auto
          p.mb-0
            b Hojas de estilo según su manejo, 
            b-none pueden ser internas, externas o desde sitio web. Cuando es interna el código del estilo va incluido dentro de la página al ser externa se define en un archivo diferente a la a página con extensión CSS y si es desde otro sitio web se hace referencia por medio de su URL.
            



    
    
    
    
    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      .h2 2.2 Introducción CSS3
    
    
    
    
    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      .h2 2.3 Estructura
    
    
    
    
    separador
    #t_2_4.titulo-segundo.color-acento-contenido
      .h2 2.4 Formularios CSS3

    


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
