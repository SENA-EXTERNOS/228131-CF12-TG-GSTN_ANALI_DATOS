<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.rectanguloid.p-4(data-aos="fade-right")
        p Apreciado aprendiz, en este componente formativo, se profundiza sobre la analítica de datos, inteligencia de negocio, diseño de <i>dashboard</i>, reportes y visualización de datos. Durante su desarrollo se abordará el análisis de requerimientos para la toma de decisiones; el procesamiento de datos mediante procesos ETL, así como, el desarrollo de métricas o Indicadores claves de desempeño KPI. Al terminar, estará en capacidad de diseñar tableros de datos interactivos que ayuden a tomar mejores decisiones, con respecto al estado actual de un proceso o proyecto. 
        p.mb-0 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:
      .col-lg-4.order-sm-first.order-lg-last(data-aos="fade-left")
        figure
          img(src='@/assets/curso/intro.svg/', alt='Analítica de datos')

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
