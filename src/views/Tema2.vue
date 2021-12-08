<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Hojas de Estilo
    
    #t_2_1.titulo-segundo.color-acento-contenido
      .h2 2.1 Conceptos 
    

    
    
    
    
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
