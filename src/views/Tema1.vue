<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Html 5
    
  

    #t_1_1.titulo-segundo.color-acento-contenido
      .h2 1.1 Tags 
    
    
    
    
    
    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      .h2 1.2 Textos

    
    
    
    
    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      .h2 1.3 Imágenes

    
    
    
    
    separador
    #t_1_4.titulo-segundo.color-acento-contenido
      .h2 1.4 Hiperenlaces

    
    
    
    
    separador
    #t_1_5.titulo-segundo.color-acento-contenido
      .h2 1.5 Tablas

    
    
    
    
    separador
    #t_1_6.titulo-segundo.color-acento-contenido
      .h2 1.6 Formularios









</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
