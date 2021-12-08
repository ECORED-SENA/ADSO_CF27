<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 4
      h1 Gestores de Contenido
    
    #t_4_1.titulo-segundo.color-acento-contenido
      .h2 4.1 Definición 
    
    separador
    #t_4_2.titulo-segundo.color-acento-contenido
      .h2 4.2 Funciones

    separador
    #t_4_3.titulo-segundo.color-acento-contenido
      .h2 4.3 Características

    separador
    #t_4_4.titulo-segundo.color-acento-contenido
      .h2 4.4 Clasificación CMS

    separador
    #t_4_5.titulo-segundo.color-acento-contenido
      .h2 4.5 Tipos CMS






</template>

<script>
export default {
  name: 'Tema4',
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
