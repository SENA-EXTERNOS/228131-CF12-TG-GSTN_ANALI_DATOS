<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Proceso ETL

    .bloque-texto-a.bloque-texto-2.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-center
        .col-lg-4.mb-4.mb-lg-0(data-aos='fade-right')
          figure
            img(src='@/assets/curso/temas/tema2/img2-1.svg', alt='Banco de datos')
        .col-lg-8(data-aos='fade-left')
          .bloque-texto-a__texto.p-4
            p.mb-0 En resumen, el proceso de extraer, transformar y cargar, abreviado como ETL (<i>Extraction, Transformation and Load</i>), es una de las actividades técnicas más críticas en el desarrollo de soluciones de proyectos analíticos. Hace parte del componente de integración para la adecuada y óptima implementación; de esta, dependen la integridad, uniformidad, consistencia y disponibilidad de los datos, utilizados en el componente de análisis de una solución BI.

    p.mb-5 Existen múltiples arquitecturas y tecnologías; sin embargo, todas están basadas en las acciones de extraer, limpiar, transformar, resumir y formatear los datos que se almacenan en un data <i>warehouse</i> o bodega de datos, y que serán el insumo para los reportes BI. El proceso ETL se describe de la siguiente manera:

    .row.justify-content-center.mb-5
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img2-2.svg', alt='Proceso ETL')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-sm-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img2-3.svg', alt='Banco de datos')
      .col-lg-10.col-sm-10(data-aos="fade-left")
        p Para iniciar el desarrollo del proyecto de analítica, es imprescindible seleccionar una herramienta ETL; para elegir la opción más adecuada, es necesario determinar las necesidades, el presupuesto, la dimensión o tamaño del proyecto, la data y los conocimientos técnicos específicos de cada herramienta de desarrollo, la capacidad para conectarse a diversas fuentes, versatilidad, capacidades, etc.
        p A continuación, conoceremos algunas marcas y sus herramientas:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 1
          br
          em Algunas herramientas ETL

        .tabla-a.color-acento-contenido(data-aos="fade-left")
          table
            thead
              tr
                th Marca
                th Herramientas
            tbody
              tr
                td.text-center 
                  em Oracle
                td.ps-5 
                  ul.lista-ul
                  li
                    i
                    |Oracle 
                    em Data Integrator 
                    |(ODI)
                  li
                    i
                    |Oracle 
                    em WarehouseBuilder 
                    |(OWB)
              tr
                td.text-center
                  em Microsoft
                td.ps-5 
                  ul.lista-ul
                  li
                    i
                    |Microsoft SQL Server IntegrationServices (SSIS)
                  li
                    i
                    |Azure Databricks
              tr
                td.text-center
                  em Hitachi
                td.ps-5 
                  ul.lista-ul
                  li
                    i
                    |Pentaho Data Integration
              tr
                td.text-center IBM
                td.ps-5 
                  ul.lista-ul
                  li
                    i
                    |InfosphereData Stage
              tr
                td.text-center SAP
                td.ps-5 
                  ul.lista-ul
                  li
                    i
                    |Data IntegrationStudio (Dataflux)


    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Origen de datos
    
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(style="background-color: #BDDCF6")
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img2-4.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Como hemos mencionado anteriormente, los orígenes de datos están dados a partir de los sistemas de información y, ocasionalmente, por archivos de datos que se generan en los procesos y áreas del negocio. Es importante tener en cuenta los accesos a las bases de datos y hacer un exhaustivo análisis de la data original, teniendo en cuenta, la siguiente información:

    .row.justify-content-center.mb-5
      .col-lg-4(data-aos='fade-right')
        figure
          img(src='@/assets/curso/temas/tema2/img2-5.svg', alt='Gráfico circular')
      .col-lg-8(data-aos='fade-left')
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")
          div(titulo="Responsables TI")
            p En esta etapa, es importante tener contacto con los responsables de TI y los administradores de aplicaciones y datos de los programas. De esta forma, se puede garantizar la disponibilidad de los datos, de manera eficiente para que los cambios se vayan reflejando en los reportes.
          div(titulo="Conocer el negocio")
            p Desde el inicio, es imprescindible conocer el negocio, tener claridad de los objetivos y qué información corresponde a esos objetivos; saber con claridad qué se necesita, para qué y cómo, se entregarán los datos, para el proyecto de analítica.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="zoom-in-up")
        .cajon.color-acento-botones.p-4.mb-4(style="background-color: #FFF1C2")
          p.mb-0 A continuación, se muestra cómo se aplica la fase de transformación de los datos, una etapa conocida como “el alma” dentro del proceso ETL.

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Transformación de datos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img2-6.svg', alt='Procesamiento de datos')
      .col-lg-10
        p La transformación es el alma del proceso ETL, es donde se desarrollan los códigos y se procede a programar la “magia de los datos”. Es el momento donde las competencias técnicas pesan sobre la estrategia, porque es el trabajo que ya está definido desde la planeación, las lógicas del negocio y el qué hacer con los datos. 

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos='fade-right')
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")
          div(titulo="Reglas de negocio")
            p A partir de la planificación, y teniendo en cuenta que los datos origen ya se encuentran conectados, se deben empezar a aplicar las reglas del negocio e implementar técnicas o algoritmos de limpieza y transformación de datos, para que todo se pueda entender en un solo sistema.
          div(titulo="Flujo de la información")
            p El proceso ETL se resume en los pasos y flujo de la información; en cada paso, se establecen las tareas específicas y el tratamiento necesario. Entre muchos procesos más, se hacen filtros, seleccionan datos, copian los registros, eliminan datos, adicionan otros casos, sustituciones, <i>splits, merge</i>, etc.
      .col-lg-4(data-aos='fade-left')
        figure
          img(src='@/assets/curso/temas/tema2/img2-7.svg', alt='Flujo de información')

    .titulo-sexto.color-acento-contenido.mb-5(data-aos='fade-right')
      h5 Figura 1
      br
      em Flujo de un proceso ETL

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img2-8.svg', alt='Flujo de proceso ETL')
          figcaption Nota. Adaptada de Qlik, (2013).


    Separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Carga de datos masivos

    .bloque-texto-a.bloque-texto-1.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-center
        .col-lg-4.mb-4.mb-lg-0(data-aos='fade-right')
          figure
            img(src='@/assets/curso/temas/tema2/img2-9.svg', alt='Datos masivos')
        .col-lg-8(data-aos='fade-left')
          .bloque-texto-a__texto.p-4
            p.mb-0 El final de un proceso ETL, se fundamenta en almacenar la información transformada, en una o varias, bases de datos destino. De esta manera, muchas pequeñas tareas y transformaciones, se van almacenando de forma masiva y centralizada, en una base de datos principal, denominada data <i>warehouse</i> o bodega de datos. 

    Separador

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.4 Modelación de cubos de datos

    p.mb-5 Los cubos no son precisamente parte del proceso ETL; podría indicarse que se refiere a la manera en cómo el DWH entrega datos, para consumirlos a través de visualización en tablas o gráficos multidimensionales. Observemos la siguiente descripción:

    .row.justify-content-center.mb-5
      .col-lg-5.mb-5(data-aos='fade-right')
        figure
          img(src='@/assets/curso/temas/tema2/img2-10.svg', alt='Cubo OLAP').mb-3
          figcaption Nota. Adaptada de Evaluando <i>Software</i> (2022). 
      .col-lg-7(data-aos='fade-left')
         LineaTiempoD.color-acento-contenido
          p(numero="1" titulo="Cubos OLAP") Denominados generalmente como cubos OLAP (OnLine Analytical Processing) o procesamiento Analítico en Línea, se refiere a una estructura multidimensional que contiene información con objetivos analíticos y se compone principalmente, de dimensiones y medidas.
          p(numero="2" titulo="Estructura del cubo") Las dimensiones definen la estructura del cubo, que se utiliza para segmentar y dividir los datos, y las medidas proporcionan los valores numéricos. Como estructura lógica, un cubo permite a una aplicación cliente, recuperar valores de medidas como si estuvieran almacenados en las celdas del cubo.
          p(numero="3" titulo="Profundidad del cubo") Adicionalmente, se presentan estructuras por jerarquía de datos, que podrían definir, de alguna manera, la profundidad o detalle de las consultas. El ejemplo más común de datos jerárquicos es el tiempo, que tiene año, trimestre, mes, semana, día, y esto puede definir el detalle de los reportes.
          p(numero="4" titulo="Aplicaciones OLAP en la inteligencia de negocios") Las aplicaciones OLAP son pilares de cualquier solución de inteligencia de negocios, debido a que proveen información sumarizada a los que toman las decisiones, mediante métodos convenientes de navegación, que les permiten analizar y mantener una conversación fluida, con los datos de la organización, en óptimos tiempos de respuesta.
          p(numero="5" titulo="Aplicación de filtros") Las aplicaciones OLAP son pilares de cualquier solución de inteligencia de negocios, debido a que proveen información sumarizada a los que toman las decisiones, mediante métodos convenientes de navegación, que les permiten analizar y mantener una conversación fluida, con los datos de la organización, en óptimos tiempos de respuesta.
            br
            br
            |<b>Dimensiones</b>: vendedor, ciudad, marcas, fecha.
            br
            |<b>Medida</b>: ventas.

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
