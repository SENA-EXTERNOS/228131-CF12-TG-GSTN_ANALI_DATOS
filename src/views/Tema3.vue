<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Desarrollo de KPI y visualización de datos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img3-1.svg', alt='KPI')
      .col-lg-10(data-aos="fade-left")
        p.mb-0 Los KPI son indicadores o valores cuantitativos que se pueden medir, comparar y monitorear, para detectar el proceso y el desempeño laboral, en la estrategia de la empresa.

    .tarjeta.tarjeta--azul3.p-4.mb-5
      SlyderA(tipo='b')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Los indicadores claves de desempeño, KPI (Key Performance Indicator), se refieren a parámetros que sirven de referencia para conocer el éxito de un proyecto, con relación a un objetivo y, normalmente, se expresa como un porcentaje, o bajo valores de referencia. En otras palabras, define qué tan cerca o lejos están los procesos, de alcanzar la meta que se han definido. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img3-2.svg', alt='KPI')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Este es un aspecto más desde la estrategia de negocio, que de lo tecnológico. Por lo general, estos indicadores vienen acompañados de la misión y objetivos planteados, y los resultados de los datos deben estar alineados con estos indicadores.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img3-3.svg', alt='Estrategia de negocio')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Una correcta definición de indicadores de gestión, permite obtener información clave y útil para las organizaciones que generen conocimiento del negocio, como:
            ul.lista-ul
              li
                i.fas.fa-circle.cac
                |Calcular resultados en un tiempo determinado, así como compararlos.
              li
                i.fas.fa-circle.cac
                |Analizar causas y efectos de una determinada estrategia, además evaluar las acciones realizadas.
              li
                i.fas.fa-circle.cac
                |Comparar datos para ajustar, corregir o potencializar las estrategias y actividades efectivas.
              li
                i.fas.fa-circle.cac
                |Y tomar decisiones con la mayor cantidad de información disponible.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img3-4.svg', alt='Indicadore se gestión')
    
    p.mb-5 A continuación, se muestran las características que deben detener los indicadores claves de desempeño del negocio, al momento de crear visualizaciones.

    h3(data-aos="fade-right") Características para la definición de KPI
    p.mb-5(data-aos="fade-right") Los indicadores claves del negocio, deben cumplir, mínimo, con las siguientes características:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.tarjeta-carrusel.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/img3-5.svg' alt='Concreto')
        h4.text-center Concreto
        p.text-center Apuntar a algo en particular.

      .tarjeta.tarjeta-carrusel.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/img3-6.svg' alt='Repetitivo')
        h4.text-center Repetitivo
        p.text-center Que su comportamiento mantenga siempre el mismo patrón.

      .tarjeta.tarjeta-carrusel.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/img3-7.svg' alt='Medible')
        h4.text-center Medible
        p.text-center Tener definido qué es lo que se cuenta o calcula.

      .tarjeta.tarjeta-carrusel.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/img3-8.svg' alt='Objetivo')
        h4.text-center Objetivo
        p.text-center Debe apuntar a un resultado imparcial y real.

      .tarjeta.tarjeta-carrusel.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/img3-9.svg' alt='Pertinente')
        h4.text-center Pertinente
        p.text-center Debe tener un contexto bajo el negocio y los objetivos del reporte.

      .tarjeta.tarjeta-carrusel.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/img3-10.svg' alt='Oportuno')
        h4.text-center Oportuno
        p.text-center El dato debe estar disponible.

      .tarjeta.tarjeta-carrusel.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/img3-11.svg' alt='Claro')
        h4.text-center Claro
        p.text-center Que lo que se pretende visualizar, sea fácil de interpretar y de entender.

    .bloque-texto-a.bloque-texto-2.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-center
        .col-lg-4.mb-4.mb-lg-0(data-aos='fade-right')
          figure
            img(src='@/assets/curso/temas/tema3/img3-12.svg', alt='Indicadores')
        .col-lg-8(data-aos='fade-left')
          .bloque-texto-a__texto.p-4
            p.mb-2 Un ejemplo de KPI en una empresa de transporte de pasajeros, incluirá indicadores como:
            ul.lista-ul
              li
                i.fas.fa-circle.fa-xs.cab
                |Número de pasajeros por cada ruta.
              li
                i.fas.fa-circle.fa-xs.cab
                |Número y tipo de buses usados en la operación.
              li
                i.fas.fa-circle.fa-xs.cab
                |Viajes por vehículo.
              li
                i.fas.fa-circle.fa-xs.cab
                |Cantidad de pasajeros por vehículo.
              li
                i.fas.fa-circle.fa-xs.cab
                |Kilómetros por vehículo.
              li
                i.fas.fa-circle.fa-xs.cab
                |Conductores y horas de manejo.


    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Modelación de indicadores

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img3-13.svg', alt='Modelado de indicadores')
      .col-lg-7(data-aos="fade-left")
        .bloque-texto-b.rectanguloid3.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 El objetivo último de un KPI es el de ayudar a tomar mejores decisiones con respecto al estado actual de un proceso, proyecto, estrategia o campaña y, de esta forma, poder definir una línea de acción futura. 
            i.fas.fa-quote-right

        p Los indicadores o métricas KPI, se pueden clasificar, según la naturaleza que midan, de la siguiente manera:

    TabsC.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Indicadores de procesos")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/img3-14.svg', alt='Indicadores de procesos')
          .col-md-6
            p Representan datos comparativos entre las acciones del proceso y sus resultados. En estos indicadores se puede dar cuenta de:
            ul.lista-ul
              li
                i.fas.fa-circle.cab
                |Diferencia entre los números producidos y las metas propuestas (ejemplo, ventas realizadas vs. metas de ventas).
              li
                i.fas.fa-circle.cab
                |Diferencia entre el número de colaboradores programados vs. el número de colaboradores previstos.
              li
                i.fas.fa-circle.cab
                |Diferencia entre el número de horas trabajadas versus el número de horas planificadas.

      .py-4.py-md-5(titulo="Indicadores de eficiencia y eficacia")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/img3-15.svg', alt='Resultados')
          .col-md-6
            p Se presentan frecuentemente en porcentajes, muestran datos objetivos para campos que, si bien pueden parecer intangibles como la adaptabilidad de un producto, la resolución de necesidades, percepción de los clientes, etc., representan un gran valor para las organizaciones.
            p Un ejemplo de esta clase de indicadores podría ser la no-calidad, cuya fórmula se puede emplear: (total deficiencias / total de productos) x 100.
            p Asimismo, existen los indicadores que miden un resultado y otros el desempeño.

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Introducción a Lenguaje DAX

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img3-16.svg', alt='Monitor')
      .col-lg-10(data-aos="fade-left")
        p En este momento, habiendo ya estudiado los conceptos básicos de KPI en la visualización de datos, continuaremos con el aprendizaje de herramientas y lenguajes, observando el siguiente video:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/nEoA37elTjc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      

    Separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3  Desarrollar medidas y cálculos en los datos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.rectanguloid.p-4(data-aos="fade-right")
        p Las medidas (<i>measure</i>) son fundamentales en los desarrollos de proyecto de analítica y existe un principio de optimización en el desarrollo de sistemas de visualización de datos y las computadoras son más veloces para procesar datos, que para leer y traer los datos desde una unidad de almacenamiento. Teniendo en cuenta esto, se debe evitar al máximo, cargar las tablas en las colecciones de datos. Es por esto por lo que son más eficientes las columnas calculadas, que las columnas que vengan en las tablas originales y sean más rápidas que las columnas calculadas. Resulta más ágil y técnico, usar las medidas en vez de columnas.

      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema3/img3-17.svg', alt='Revisión de datos')

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(style="background-color: #BDDCF6")
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img3-18.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Lo anterior aclarando que todo depende de lo que se desee y la naturaleza de los requisitos o funcionalidades, porque hay procesos y desarrollos en los que, inevitablemente, se deben usar datos o columnas. En otras palabras, como desarrollador, es importante procurar realizar cálculos a partir de medidas y, en caso de no ser posible, hacerlos como columnas calculadas; pero no es buena práctica almacenar más datos en las tablas, adicionando columnas.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 2
      br
      em Visualización de datos

    .row.justify-content-center.mb-5
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img3-19.svg', alt='Visualización de datos')


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img3-20.svg', alt='Power BI')
      .col-lg-9(data-aos="fade-left")
        p.mb-0 A continuación, se presenta un ejemplo de medidas en Power BI: 

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")(data-aos="zoom-in")
      .row(titulo="Tabla de ejemplo")
        .col-md-6.mb-4.mb-md-0
          p A partir de una tabla de ejemplo, donde se representa un listado de vendedores, las unidades vendidas por cada uno y el dinero que representaron estas ventas, se realizará una medida que calcule el total de las ventas.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/img3-21.png', alt='Ejemplo para calcular medida')

      .row(titulo="Crear una medida")
        .col-md-6.mb-4.mb-md-0
          p Después de tener los datos, ir al botón crear nueva medida.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/img3-22.png', alt='Crear nueva medida')

      .row(titulo="Crear visualización")
        .col-md-6.mb-4.mb-md-0
          p En la barra de fórmulas, escribir una medida llamada total_ventas:
          p
            em total_ventas = SUM(ventas[importe])
          p Y, de esta manera, se crean medidas; estas medidas se comportan como si fueran columnas en el modelo, por lo que su uso es incluir estos objetos en los gráficos de los reportes en desarrollo.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/img3-23.png', alt='Visualización entre columnas y medidas')

    Separador

    #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.4 Visualización de datos y desarrollo de reportes

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p Para dar inicio con el desarrollo para la visualización de los datos, la definición de los datos y sus relaciones, ya deben estar configuradas.
        p.mb-5 En el panel “Informe” del aplicativo, se identifican los componentes de la interfaz de la aplicación; estos se identifican así:
        figure
          img(src='@/assets/curso/temas/tema3/img3-25.png', alt='Interfaz gráfica de Power BI')
      .col-lg-6
         LineaTiempoD.color-acento-contenido
          p(numero="1" titulo="Rojo") Se encuentra la data, lo que incluye las tablas, sus campos, medidas y columnas calculadas. Adicionalmente, en este panel, se configuran las jerarquías de datos.
          p(numero="2" titulo="Fucsia") “Visualizaciones”, se encuentra en la paleta de opciones y el tipo de gráficos disponibles u objetos visuales; se pueden incluir más, pero algunos requieren cuenta de Office 365. En este panel, se arrastran los datos desde el panel “Campos”, para generar el gráfico; los campos requeridos dependen del objeto visual seleccionado.
          p(numero="3" titulo="Azul") Es el área de trabajo donde el desarrollador pinta los datos a través de gráficos. Cada vez que se selecciona un objeto en el área de trabajo, se activa un panel adicional que configura las opciones de estilos de los objetos.
          p(numero="4" titulo="Verde") Se trata de las tres principales vistas de la aplicación; en esta sección, se requiere enfocarse en el “Informe”.
          p(numero="5" titulo="Naranja") Menú y barra de herramientas, allí se completan las funciones y las diversas opciones disponibles.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p Ya que se conoce la interfaz gráfica del creador de reportes, es momento de poner en práctica todo lo aprendido hasta ahora. Para esto, se realizará un informe de ventas por cada vendedor a partir de un ejercicio simple en la herramienta.
        p El ejercicio consiste en crear un reporte simple en la herramienta, se realizará un informe de ventas por cada vendedor.
        p Los datos se extrajeron de un sistema de facturación:

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img3-26.svg', alt='Porcentaje')

    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo='b')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Lo primero, es definir los actores o elementos principales de consulta; en este caso, se dará la opción de filtrar por vendedor. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img3-27.png', alt='Selección de filtros')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p A continuación, se selecciona un gráfico multidimensional, que agrupe varios datos.
          .col-md-6
            figure
              img.img-a.img-t(src='@/assets/curso/temas/tema3/img3-28.png', alt='Gráficos multidimensionales')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Luego, asignarles los datos a los ejes, según corresponda.
            p Tabla de <i>dimensión calendario</i>, tiene un dato de fecha (la recomendación es poner la fecha como jerarquía y, de esta manera, se pueden ver los datos por meses, semanas, trimestres, días, etc.).

            p <i>Tiene un valor</i> y, ocasionalmente, estos valores surgen de una medida; pero, en este caso, el sistema de facturación ya lo trae procesado, así que se selecciona la columna <i>total pago</i> de la tabla de hechos ventas.
            p Se deben incluir los <i>vendedores</i> y, en este caso, cada uno representa un color que indica el volumen de las ventas realizadas, en dinero.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img3-29.png', alt='Gráfico vendedores')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Y al final, si se cuenta con el dato, las metas de cada mes, de esta manera se compara si se cumplió o no con la meta. En este caso se representa con una línea que atraviesa las barras. El resultado final general se observa en la figura.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img3-29.png', alt='Gráfico vendedores')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Si se filtrara por cada vendedor, la gráfica se acomodaría de la siguiente manera:
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img3-30.png', alt='Gráfico de un vendedor')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="zoom-in-up")
        .cajon.color-acento-botones.p-4.mb-4(style="background-color: #FFF1C2")
          p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.

</template>

<script>
export default {
  name: 'Tema3',
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
