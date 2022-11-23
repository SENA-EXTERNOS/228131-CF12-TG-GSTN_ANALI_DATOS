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
            p.mb-0 En resumen, el proceso de extracción, transformación y carga – ETL (
              em Extraction, Transformation and Load
              |) es una de las actividades técnicas más críticas en el desarrollo de soluciones de proyectos analíticos. Hace parte del componente de integración para la implementación adecuada y óptima, de esta dependen la integridad, uniformidad, consistencia, y disponibilidad de los datos utilizados en el componente de análisis de una solución BI.

    p.mb-5 Existen múltiples arquitecturas y tecnologías, sin embargo, todas están basadas en las acciones de extraer, limpiar, transformar, resumir y formatear los datos que se almacenarán en un 
      em datawarehouse 
      |o bodega de datos, que será el insumo para los reportes BI.

    .titulo-sexto.color-acento-contenido.mb-5(data-aos='fade-right')
      h5 Figura 2
      br
      em Infografía proceso ETL

    .row.justify-content-center.mb-5
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img2-2.svg', alt='Proceso ETL')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img2-3.svg', alt='Banco de datos')
      .col-lg-10(data-aos="fade-left")
        p Para iniciar el desarrollo del proyecto de analítica, es imprescindible seleccionar una herramienta ETL, para elegir la opción más adecuada es necesario determinar las necesidades, el presupuesto, la dimensión o tamaño del proyecto y la data y, los conocimientos técnicos específicos de cada herramienta de desarrollo, la capacidad de conectarse a diversas fuentes, versatilidad, capacidades, etc.
        p Algunas marcas y herramientas podrían ser:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 1
          p
            em Algunas herramientas ETL

        .tabla-a.color-acento-contenido.mb-5(data-aos="fade-left")
          table
            caption Nota. La tabla contiene algunas herramientas utilizadas en el desarrollo de proyectos de analítica de datos. 
            thead
              tr
                th Marca
                th Herramientas
            tbody
              tr
                td 
                  em Oracle
                td 
                  ul.lista-ul
                  li
                    i
                    |
                    em Oracle Data Integrator 
                    |(ODI)
                  li
                    i
                    |
                    em Oracle WarehouseBuilder 
                    |(OWB)
              tr
                td 
                  em Microsoft
                td 
                  ul.lista-ul
                  li
                    i
                    |
                    em Microsoft SQL Server IntegrationServices 
                    |(SSIS)
                  li
                    i
                    |
                    em Azure Databricks
              tr
                td 
                  em Hitachi
                td 
                  ul.lista-ul
                  li
                    i
                    |
                    em Pentaho Data Integration
              tr
                td IBM
                td 
                  ul.lista-ul
                  li
                    i
                    |
                    em InfosphereData Stage
              tr
                td SAP
                td 
                  ul.lista-ul
                  li
                    i
                    |
                    em Data IntegrationStudio (Dataflux)

    .row.justify-content-center
      .col-lg-10(data-aos="flip-up")
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #D2F3F8")
          p.mb-0 Ahora que se tiene claro, en qué consisten los procesos ETL (el proceso de extracción, transformación y carga), es momento de iniciar el proyecto con el primer paso, que consiste en la obtención de los datos de diferentes orígenes.

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
            p.mb-0 Como se mencionó en apartados anteriores, los orígenes de datos están dados a partir de los sistemas de información y, ocasionalmente por archivos de datos, que se generan en los procesos y áreas del negocio. Es importante tener en cuenta los accesos a las bases de datos y hacer un exhaustivo análisis de la data original.

    .row.justify-content-center.mb-5
      .col-lg-4(data-aos='fade-right')
        figure
          img(src='@/assets/curso/temas/tema2/img2-5.svg', alt='Gráfico circular')
      .col-lg-8(data-aos='fade-left')
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")
          div(titulo="Responsables TI")
            p En esta etapa es importante tener contacto con los responsables de TI y los administradores de aplicaciones y datos de los programas. De esta forma, se puede garantizar la disponibilidad de los datos de manera eficiente y que los cambios se vayan reflejando en los reportes.
          div(titulo="Conocer el negocio")
            p Desde el inicio es imprescindible conocer el negocio, tener claridad de los objetivos y qué información es la que responde a esos objetivos; saber con claridad qué se necesita, para qué y cómo se entregarán los datos para el proyecto de analítica.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="zoom-in-up")
        .cajon.color-acento-botones.p-4.mb-4(style="background-color: #FFF1C2")
          p.mb-0 A continuación, se muestra cómo se aplica la etapa de transformación de datos, una etapa conocida como el alma dentro del proceso ETL.

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Transformación de datos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img2-6.svg', alt='Procesamiento de datos')
      .col-lg-10
        p La transformación es el alma del proceso ETL, es donde se desarrollan los códigos y se procede a programar la “magia de los datos”. Es el momento donde las competencias técnicas pesan sobre la estrategia, pues es el trabajo que ya está definido desde la planeación, las lógicas del negocio y qué hacer con los datos.

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos='fade-right')
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")
          div(titulo="Reglas de negocio")
            p A partir de la planificación y teniendo en cuenta que los datos origen ya se encuentran conectados, se deben empezar a aplicar las reglas de negocio e implementar técnicas o algoritmos de limpieza y transformación de datos, para que todo se pueda entender en un solo sistema.
          div(titulo="Flujo de la información")
            p El proceso ETL se resume en los pasos y flujo de la información, en cada paso se establecen las tareas específicas y el tratamiento necesario. Entre muchos procesos más, se hacen filtros, selección de datos, copia de registros, eliminación de datos, adición de otros, sustituciones, 
              em splits, merge, 
              |etc.
      .col-lg-4(data-aos='fade-left')
        figure
          img(src='@/assets/curso/temas/tema2/img2-7.svg', alt='Flujo de información')

    .titulo-sexto.color-acento-contenido.mb-5(data-aos='fade-right')
      h5 Figura 3
      br
      em Flujo de un proceso ETL

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img2-8.svg', alt='Flujo de proceso ETL')
          figcaption Nota. Adaptada de Qlik, (2013) Muestra el flujo de un proceso ETL.

    p Para terminar este apartado, a continuación, se aborda el proceso de carga masiva de datos en bases de datos.

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
            p.mb-0 El fin de un proceso ETL será el de almacenar la información transformada, en una o varias bases de datos destino. De esta manera, muchas pequeñas tareas y transformaciones se van almacenando de forma masiva y centralizada, en una base de datos principal denominada data 
              em warehouse 
              |o bodega de datos.

    Separador

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.4 Modelación de cubos de datos

    p.mb-5 Los cubos, no son precisamente parte del proceso ETL, podría indicarse que es la manera en cómo el DWH entrega datos, para consumirlos a través de visualización en tablas o gráficos multidimensionales.

    .row.justify-content-center.mb-5
      .col-lg-5(data-aos='fade-right')
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 4
          br
          em Cubo OLAP
        figure
          img(src='@/assets/curso/temas/tema2/img2-10.svg', alt='Cubo OLAP').mb-2
          figcaption Nota. Adaptada de Cubos OLAP de información para la toma de decisiones. Evaluando 
            | 
            em Software 
            |(2022)
      .col-lg-7(data-aos='fade-left')
         LineaTiempoD.color-acento-contenido
          p.text-small(numero="1" titulo="Cubos OLAP") Denominado generalmente como cubos OLAP (
            em OnLine Analytical Processing
            |) o procesamiento Analítico en Línea; se refiere a una estructura multidimensional que contiene información con objetivos analíticos; se compone principalmente de dimensiones y medidas.
          p.text-small(numero="2" titulo="Estructura del cubo") Las dimensiones definen la estructura del cubo, que se utiliza para segmentar y dividir los datos, y las medidas proporcionan valores numéricos. Como estructura lógica, un cubo permite a una aplicación cliente, recuperar valores de medidas como si estuvieran almacenados en las celdas del cubo.
          p.text-small(numero="3" titulo="Profundidad del cubo") Adicional se presentan estructuras por jerarquía de datos, que podrían definir de alguna manera, la profundad o detalle de las consultas. El ejemplo más común de datos jerárquicos es el tiempo, que tiene año, trimestre, mes, semana, día y esto puede definir el detalle de los reportes.
          p.text-small(numero="4" titulo="Aplicaciones OLAP en la inteligencia de negocios") Las aplicaciones OLAP son uno de los pilares de cualquier solución de inteligencia de negocios, debido a que proveen información sumarizada a los que toman las decisiones, mediante métodos convenientes de navegación, que les permiten analizar y mantener una conversación fluida con los datos de la organización, en óptimos tiempos de respuesta, (Feliciano Morales, Cuevas Valencia, & Martínez Castro, 2022).
          p.text-small(numero="5" titulo="Aplicación de filtros") Los OLAP funcionan como tablas dinámicas multidimensionales. Cuando se habla de múltiples dimensiones se refiere a que se pueden aplicar diversos filtros. Por ejemplo, visualizar las ventas del vendedor 3, en la ciudad de Medellín y a su vez, estas ventas en la segunda semana del mes de junio, pero también se podría adicionar el detalle de qué marca son las que vendió.
            br
            br
            em Dimensiones: vendedor, ciudad, marcas, fecha.
            br
            em Medida: ventas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="zoom-in-up")
        .cajon.color-acento-botones.p-4.mb-4(style="background-color: #FFF1C2")
          p.mb-0 Ya se conoce que, en el desarrollo de reportes y visualizaciones, se involucran varias etapas globales, entre estas, el análisis de requerimiento y los procesos ETL. Ahora, se aborda una tercera fase, que corresponde a la creación de métricas para la toma de decisiones.

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
