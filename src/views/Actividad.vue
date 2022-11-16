<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/curso/temas/completar-espacios.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo.color-acento-contenido
          h2 Desarrollo de reportes: cálculos, medidas y visualización de datos
        p A continuación, se encuentra una actividad didáctica para afianzar los conceptos y aprendizajes acerca del desarrollo de reportes: cálculos, medidas y visualización de datos. Antes de su realización, se recomienda la lectura del componente mencionado. Esta actividad no es calificable, y puede realizarse todas las veces que se desee.
        p.mb-4 De acuerdo con el enunciado planteado en la columna izquierda, debe arrastrarse cada término al lugar que se considere correcto, ubicado en la columna derecha.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Completar
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
