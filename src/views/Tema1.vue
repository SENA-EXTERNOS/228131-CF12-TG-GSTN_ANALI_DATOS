<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Análisis de requerimientos para la toma de decisiones

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img1-1.svg', alt='Gráfico de crecimiento')
      .col-lg-6.rectanguloid.p-4(data-aos="fade-left")
        p.mb-0 De manera frecuente, los desarrollos de <i>software</i> se limitan a cumplir los requisitos de un área o un proceso determinado, como una isla en la empresa, donde no se integran ni la información, ni los formatos; hoy en día, aún las empresas usan sistemas para cada área. Por ejemplo, contabilidad, recursos humanos, el área financiera, ventas, ofertas, <i>marketing</i>, producción, etc. 
    p.mb-5 A continuación, se expone, de manera general, el proceso:
    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo='b')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Cada área manejando su sistema de información por su lado, sin tener en cuenta integraciones o la calidad de la información, generando muchísimos datos, pero sin explotar, de manera óptima, la riqueza escondida que pudiera tener si se gestiona de manera integral y usando técnicas y tecnologías de la cuarta revolución industrial.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img1-2.svg', alt='Persona trabajando en computador')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Por lo que, al momento de pensar en una solución de analítica de negocio, es fundamental tener todas las preguntas que, tanto en el nivel de decisión como en el nivel operativo, se requieren.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img1-3.svg', alt='Análisis de datos')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p En ocasiones, los proyectos de BI se inician con la motivación de entrar en una ola digital, o estar en la moda de la tecnología, incluso sin tener requisitos o necesidades visibles, o al menos conscientes.
            p En caso de que las empresas, como las pymes, no tengan claridad sobre el uso del BI en el negocio, es necesario aterrizar a los directivos para hacer conciencia, porque muchos problemas de la organización se deben a la falta de datos al instante, actualizados, y que reflejen la realidad.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img1-4.svg', alt='Reunión de trabajo')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Por ejemplo, en una feria importante de negocios, donde se presentan grandes oportunidades de conectar con grandes clientes, se espera que lleguen representantes de otras firmas; de manera tradicional, se trabaja confiando en la memoria y, vagamente, el ejecutivo de ventas recuerda que alguna vez, su empresa había hecho negocios anteriormente, con el cliente que se acerca.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img1-5.svg', alt='Feria de negocios')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p El recurso más rápido que se tiene es llamar a la empresa, el colaborador encargado responde y el ejecutivo de ventas le pregunta si ese cliente ya ha comprado antes; acto seguido, el empleado deja lo que está haciendo para buscar en sus sistemas de información y le suministra los datos que este considera que necesita su ejecutivo, pero con frecuencia no es así y empieza el conflicto por la información, el tiempo y la comunicación.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img1-6.svg', alt='Videollamada')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Pero, si la empresa tiene implementado un sistema de inteligencia de negocios, sería de gran valor comercial que el representante de ventas de la organización, tenga en su dispositivo electrónico (celular, <i>tablet</i>, etc.), los datos de todos los clientes y sus historiales, para que, con una búsqueda muy rápida, tenga de inmediato, en pantalla, información que podría ser clave para conectar con nuevos clientes. También, para saber si este cliente ya había comprado antes y, de ser así, indagar qué cosas compraba, hace cuánto que no compra, etc.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img1-7.svg', alt='Videollamada')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Una de las condiciones iniciales más importantes se refiere a las preguntas, es decir, qué se necesita saber del negocio, qué decisiones se planean tomar y qué insumos se requieren, para la toma de estas decisiones.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img1-8.svg', alt='Preguntas')
            
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Otro concepto errado y frecuente, especialmente en las pymes, es que el indicador más importante y, en algunos casos, el único, es el dinero que ingresa a la empresa. Si bien en los negocios se trata de ganar, existen muchas variables e indicadores, adicionales a los ingresos, que permiten a las organizaciones avanzar mejor, aumentar su valor a partir de técnicas y conocimiento y, tras todos estos indicadores que son claves de negocio, debería reflejarse el cumplimiento de metas de ingresos y crecimiento del negocio, en el tiempo.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img1-9.svg', alt='Primer lugar')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Los indicadores y la aplicabilidad de la analítica de datos en las organizaciones deben iniciarse bajo necesidades reales, preguntas fundamentales y cuáles son las respuestas que requiere el negocio para optimizar los tiempos y asertividad de la toma de decisiones.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img1-10.svg', alt='Indicadores')

    p A continuación, se puede ver en qué consiste y cómo se aplican cada una de las etapas de análisis de requerimiento, para la toma de decisiones en la analítica de datos, aplicada a proyectos BI.

    Separador        

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Herramientas

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(style="background-color: #BDDCF6")
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img1-11.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Para iniciar la toma de requerimientos para proyectos BI, se debe tener en cuenta que 
              em Business Intelligence 
              |no es una tecnología; se puede denominar más como una técnica o metodología, que pudiese emplear una o varias herramientas tecnológicas integradas o no.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-right")
        p.mb-0 El levantamiento de requisitos para el desarrollo de soluciones de analítica, puede usar los mismos instrumentos para el desarrollo del <i>software</i> que, en otros recursos de estudio de la tecnología, se tratan. Sin embargo, el enfoque debe orientarse hacia los insumos, donde coordinadores y gerentes puedan visualizar su área y/o negocio y, a partir de ello, generar conocimiento para actuar. Descubramos cuáles son estas herramientas:
      .col-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/img1-12.svg', alt='Computador portátil')

    TabsB.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-4.py-md-5(titulo="Conocer la organización (observación y lectura)" :icono="require('@/assets/curso/temas/tema1/img1-13.svg')")
        .row
          .col-md-7.mb-4.mb-md-0
            p Si es un profesional que está vinculado a la empresa o una persona que le realizará un trabajo a un cliente, lo primero es conocer bien la empresa y el contexto en el que se realizará el proyecto de BI, incluyendo el mercado, la competencia, etc.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img1-14.png', alt='Manos señalando gráficos')

      .py-4.py-md-5(titulo="Entrevista" :icono="require('@/assets/curso/temas/tema1/img1-15.svg')")
        .row
          .col-md-7.mb-4.mb-md-0
            p Las entrevistas, en la fase inicial, se deben centrar en aspectos estratégicos; es importante dejar de lado todo lo relacionado con tecnología. Es por eso que, ocasionalmente, las entrevistas con los responsables de TI pueden ser poco fructíferas, porque las entrevistas de requerimientos deben estar enfocadas hacia las áreas que definen el rumbo del negocio, tales como la financiera, la gerencial, planeación, etc.
            p Las preguntas deben estar enfocadas hacia las necesidades, llevar casos de uso de otras experiencias y determinar si, para el área entrevistada, aplican y cómo se adaptan en el caso particular.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img1-16.png', alt='Entrevista')

      .py-4.py-md-5(titulo="Encuesta" :icono="require('@/assets/curso/temas/tema1/img1-17.svg')")
        .row
          .col-md-7.mb-4.mb-md-0
            p Actualmente las encuestas 
              em online 
              |son fáciles de crear, tienen más alcance, hay mayor control, son más cómodas para el encuestado y es más fácil tabularlas. En este sentido, las preguntas, al igual que la entrevista, deben estar orientadas a las necesidades.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img1-18.png', alt='Encuesta')

    p.mb-5 Al aplicar estos instrumentos y herramientas para la toma de datos, es importante que se tenga el enfoque en los procesos y en las tareas de los procesos, no en las áreas. Conocer el área podría implicar mucho desgaste y generar tareas e información dispersa, lo que hace más complicado de comprender. Además, se pueden dar procesos que involucren algunas otras áreas cuyas características más relevantes, son:

    .row.justify-content-center.mb-5
      .col-xl-6.col-lg-6.col-md-9.col-sm-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img1-19.svg", alt="Configuración")
          .crd_hover_txt--body.w-100
            h4.mb-3.text-center Bus dimensional
            p.text-center.mb-0 A partir de la toma de requisitos y necesidades, se deben identificar elementos comunes. Es decir, definir elementos que en varios procesos se repiten o usan la misma información.
      .col-xl-6.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img1-20.svg", alt="Prioridades")
          .crd_hover_txt--body.w-100
            h4.mb-3.text-center Dar prioridad a los procesos
            p.text-center.mb-0 Se debe elegir empezar con los procesos que más impacto tienen para la organización.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="zoom-in-up")
        .cajon.color-acento-botones.p-4.mb-4(style="background-color: #FFF1C2")
          p.mb-0 Una vez finalizada la etapa de levantamiento de requisitos, a través de las diversas herramientas integradas para llevar a cabo un proyecto BI, el próximo paso es el de valorar los datos que se obtuvieron. Es así como se le da paso al segundo momento, denominado <b>valor de los datos</b>.

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Valor de los datos

    .bloque-texto-a.bloque-texto-1.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-center
        .col-lg-4.mb-4.mb-lg-0(data-aos='fade-right')
          figure
            img(src='@/assets/curso/temas/tema1/img1-21.svg', alt='Datos')
        .col-lg-8(data-aos='fade-left')
          .bloque-texto-a__texto.p-4
            p.mb-0 Los datos y el auge del <i>Big data</i>, representan una oportunidad donde cada empresa se proyecta para sacar el mayor provecho, para que, mediante la exploración de información y creatividad, pueda explotar de manera tal que muchas industrias han encontrado su crecimiento exponencial en poco tiempo, basado en los datos y la transformación digital.

    h3(data-aos='fade-right') Caso de uso que da valor a los datos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9(data-aos='fade-right')
        p.mb-0 Hoy en día, las organizaciones pueden acceder a más datos que antes. Pero esto no tiene valor, a menos que sepan cómo poner a trabajar su <i>Big data</i>. Para comenzar el aprovechamiento y sacarle valor de los datos, pueden visualizar algunos casos de uso de los datos, donde muchas empresas han tenido éxito. (Oracle, 2020)
      .col-lg-3(data-aos='fade-left')
        figure
          img(src='@/assets/curso/temas/tema1/img1-22.svg', alt='Datos')

    h3(data-aos='fade-right') Industria manufacturera
    p.mb-5 Cada caso de uso, ofrece un ejemplo del mundo real de cómo las empresas están aprovechando la información y los datos, para mejorar la toma de decisiones, ingresar a nuevos mercados y ofrecer mejores experiencias a los clientes. Los casos de uso cubren sectores económicos como el manufacturero, el comercio y los servicios. Profundicemos sobre este tema: 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4(data-aos='fade-right')
        figure
          img(src='@/assets/curso/temas/tema1/img1-23.png', alt='Explicación')
      .col-lg-8(data-aos='fade-left')
         LineaTiempoD.color-acento-contenido
          p(numero="1" titulo="Mantenimientos predictivos") Los datos pueden ayudar a predecir la falla de un equipo, teniendo en cuenta datos como: año del equipo, marca, modelo y, además, con los registros de temperatura, uso, cambio de repuestos, etc. Con estos datos, los fabricantes pueden maximizar el tiempo de actividad de las piezas y los equipos, e implementar el mantenimiento de la manera más rentable, e igualmente, calcular mejor la rentabilidad del equipo, su depreciación y vida útil.
          p(numero="2" titulo="Operaciones eficientes") Cuando hay producción en línea, los datos pueden ayudar a optimizar costos y tiempos, analizando el flujo de producción, así como los tiempos y recurso. 
          p(numero="3" titulo="Desarrollo de nuevos productos") Los datos podrían ayudar a la empresa a anticipar la demanda de los clientes, al analizar compras del pasado, al igual que, crear ofertas y saber si el público adquiere nuevos productos y servicios.
          p(numero="4" titulo="Mejorar experiencia del cliente") A partir de los datos históricos y otros como temporada y análisis de consumo, cada cliente se perfila de manera individual para ofrecerle los productos más pertinentes a sus hábitos de vida y compras.
          p(numero="5" titulo="Mejorar la experiencia en puntos de venta físicos") Haciendo uso de la geolocalización de los celulares se mejora la oferta a los clientes, ofreciendo productos que están más cerca de ellos y de esta manera, alentarlos a visitar las tiendas físicas.
          p(numero="6" titulo="Análisis y optimización de precios") Las empresas requieren estarse actualizando en los precios promedio de los productos, para no encontrarse de manera sorpresiva con el abandono de sus clientes, debido a que otra marca les ofrece un menor precio. Los precios en el mercado, fluctúan según los comportamientos de la demanda, el consumo, las temporadas y otros factores externos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.rectanguloid.p-4(data-aos="fade-right")
        p.mb-0 En la etapa de valoración se pudo comprender, que los casos de uso cubren variados sistemas económicos y dan valor a los datos, a partir de las realidades de la empresa. Ahora corresponde seguir el proceso con las fuentes de datos, que son las encargadas de brindar los datos a través de múltiples orígenes.
      .col-lg-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/img1-24.svg', alt='Datos')

    h3(data-aos='fade-right') Origen de datos, según requerimientos del nivel de decisión

    p.mb-5(data-aos="zoom-in") Las fuentes de datos para proyectos analíticos, son diversas y dependen de los sistemas de información de la organización. Existen varios tipos de estos sistemas, entre los cuáles, los más relevantes son:

    .row.justify-content-center.mb-5
      .col-lg-4(data-aos='fade-right')
        figure
          img(src='@/assets/curso/temas/tema1/img1-25.svg', alt='Origen de datos')
      .col-lg-8(data-aos='fade-left')
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")
          div(titulo="Sistemas de procesamiento de transacciones (TPS)")
            p Es un sistema que realiza y registra transacciones rutinarias diarias, necesarias para el funcionamiento de la organización. Se encuentran en el nivel más bajo de la jerarquía del negocio, y soportan las actividades cotidianas.
          div(titulo="Sistemas de control de procesos de negocio (BPM)")
            p Monitorizan y controlan los procesos. Por lo general, muchas tareas de estos sistemas se encuentran automatizadas, usando sensores u otros disparadores que ejecutan tareas y generan datos que pueden ser usados por los modelos analíticos.
          div(titulo="Sistemas de colaboración empresarial (ERP)")
            p Es uno de los tipos de sistemas de información más utilizados. Se emplean para apoyar a los directivos a controlar el flujo de información en sus organizaciones. Se trata de uno de los tipos de sistemas de información que no son específicos de un nivel concreto en la organización, sino que proporcionan un soporte importante para una amplia gama de usuarios. Estos sistemas de información, están diseñados para soportar tareas administrativas y de oficina, como sistemas multimedia, correos electrónicos, videoconferencias, transferencias de archivos, etc. 
          div(titulo="Sistemas de procesamiento transaccional (OLTP)")
            p Bases de datos orientadas al procesamiento de transacciones, típico de las bases de datos operacionales.
          div(titulo="Redes sociales y website")
            p Los recursos en Internet que tengan que ver con la organización, también son recursos que podrían incluirse al análisis de datos y generación de modelos de analítica.

    h3(data-aos="fade-right") Tipos de datos en los orígenes para los modelos analíticos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img1-26.svg', alt='Nube')
      .col-lg-10(data-aos="fade-left")
        p Existen más clasificaciones, aunque se pueden resumir en todos los recursos digitales que generen datos, puede ser estructurada o no estructurada, e incluso hasta archivos planos o de Excel que puedan ser analizados para ser incluidos en los modelos de inteligencia de negocios.

    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo='b')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p La mayoría de los datos generados por todos los usuarios, están clasificados como No estructurados, esto indica que se componen de información difícil de clasificar y ordenar. Está dada por archivos sueltos o creados de manera general, como documentos, videos y audios.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img1-27.svg', alt='Archivos en la nube')
        
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Seguidos con los datos semiestructurados, como correos y publicaciones en redes sociales, en donde la información podría clasificarse hasta cierto nivel.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img1-28.svg', alt='Información')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p El 
              em Big data 
              |y la inteligencia artificial se han enfocado en este tipo de datos, para darles un relativo orden y tener la posibilidad de realizar búsquedas, en medio de estos datos almacenados de manera aislada; para que se permita ordenar, relacionar, agrupar y estructurar, de esta forma, lograr incluirlas en los reportes e información descriptiva y predictiva.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img1-29.svg', alt='Datos ordenados')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img1-30.svg', alt='Reloj')
      .col-lg-10(data-aos="fade-left")
        p Una de las definiciones y análisis iniciales más importantes, a la hora de identificar las fuentes de datos, es la manera o arquitectura en que se almacena la información. Según cómo se almacenen y gestionen los datos digitales, estos pueden clasificarse, en términos generales, como datos estructurados o semiestructurados.

    .row.justify-content-center.mb-5
      .col-lg-11(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img1-31.svg', alt='Clasificación de datos')

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #D2F3F8")
          p.mb-0 Continuando con el tema sobre análisis de requerimientos, y ejecución de las etapas para el uso de herramientas, valoración y obtención de datos de las fuentes u orígenes de datos, ahora es el momento de entender y preparar los detalles del reporte. En esta temática, se abordan los elementos que se deben tener en cuenta para diseñar los reportes en analítica de datos.

    Separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3  Definición de detalles de los reportes

    p.mb-5(data-aos="fade-left") Como hemos venido observando, las preguntas claves del negocio y los indicadores, son vitales para dar inicio al análisis sobre qué información es la que se debe graficar o incluir en los reportes y cuadros de mando.  A continuación, se indican los aspectos a tener en cuenta, para definir los reportes en proyectos de analítica:

    .tarjeta.tarjeta--lt1.p-4.mb-5
      LineaTiempoC.color-acento-botones
        .row.justify-content-center.align-items-center(titulo="1")
          .col-md-6.mb-4.mb-md-0
            p Se debe buscar medir el éxito de diversas maneras, utilizando medidas objetivas cuando estén disponibles.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img1-32.svg', alt='Reportes')

        .row.justify-content-center.align-items-center(titulo="2")
          .col-md-6.mb-4.mb-md-0
            p Entender que son proyectos innovadores y, posiblemente, no todos los planes funcionen como se espera.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img1-33.svg', alt='Tablero')

        .row.justify-content-center.align-items-center(titulo="3")
          .col-md-6.mb-4.mb-md-0
            p Contar con el apoyo de la directiva de la organización, para que los proyectos BI se filtren en todos los niveles, promoviendo la cultura de los datos, las responsabilidades y el aporte que cada persona genera al valor comercial y a las ventajas competitivas. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img1-34.svg', alt='Cultura de datos')

        .row.justify-content-center.align-items-center(titulo="4")
          .col-md-6.mb-4.mb-md-0
            p En la mayoría de los casos, no es posible iniciar con todas las áreas de una vez. Después de pasar por un análisis global sobre la organización, hay que enfocarse en los procesos más críticos e importantes (iniciar por procesos financieros, de producción, directamente relacionados con la gerencia, etc.). Es fundamental comenzar con una base sólida y definida, que pueda irse incrementando, para mejorar la calidad, extensión y puntualidad de la información.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img1-35.svg', alt='Acuerdo')

        .row.justify-content-center.align-items-center(titulo="5")
          .col-md-6.mb-4.mb-md-0
            p Elegir herramientas BI apropiadas que satisfagan las necesidades del usuario y del negocio, que funcionen dentro de los estándares tecnológicos que IT puede apoyar eficazmente.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img1-36.svg', alt='Herramientas')
          
        .row.justify-content-center.align-items-center(titulo="6")
          .col-md-6.mb-4.mb-md-0
            p Enfocarse en los procesos, no en las áreas o en los departamentos. Cuando se inicia y avanza en proyectos de analítica, es importante visualizar los detalles de cada proceso y verificar las tareas y datos que surgen. Asimismo, interpretar bien a qué apuntan los datos generados de cada proceso y validar si se relacionan o no, con otros.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img1-37.svg', alt='Procesos')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img1-38.svg', alt='Persona en computador')
      .col-lg-10(data-aos="fade-left")
        p Aunque existen muchas metodologías, existe una manera genérica para un proyecto analítico, propuesto por Davenport. Esta metodología tiene tres grandes etapas: definición del problema, resolución del problema y comunicación y actuación sobre los resultados. Estas etapas son las siguientes:

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Definición del problema" :icono="require('@/assets/curso/temas/tema1/img1-39.svg')")
        .row
          .col-md-7.mb-4.mb-md-0
            p Para reconocer el problema, se debe comenzar desde las necesidades surgidas a partir de la experiencia, para tomar una decisión o una acción. Es decir, tener presente qué necesidades o inconvenientes se han tenido cuando la información, los reportes o el conocimiento de alguna información importante, no está disponible en el momento y la exactitud para tomar decisiones o ejecutar acciones. En este sentido, es importante gestionar las expectativas y documentar las necesidades o problemas puntuales. En esta fase, una clave es la de identificar objetivos que no se cumplen, por la falta de un proyecto analítico.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img1-40.svg', alt='Ideas')

      .py-4.py-md-5(titulo="Resolviendo el problema" :icono="require('@/assets/curso/temas/tema1/img1-41.svg')")
        .row
          .col-md-7.mb-4.mb-md-0
            p Después de la primera etapa, donde se tiene claridad sobre los problemas, el paso siguiente es el de buscar la solución. Por lo general, está compuesta de cuatro pasos:
            ol
              li
                i.fas.fa-circle.cab.me-3
                |Modelar y seleccionar variables que representan el problema y determinar las variables que forman parte de él.
              li
                i.fas.fa-circle.cab.me-3
                |Recopilar datos, para identificar dónde se consiguen estos para las variables del modelo.
              li
                i.fas.fa-circle.cab.me-3
                |Analizar datos para determinar la naturaleza, fuentes y gestión para el acceso técnico de la información.
              li
                i.fas.fa-circle.cab.me-3
                |Desarrollar componentes técnicos y generar reportes con información de valor y conocimiento del negocio.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img1-42.svg', alt='Soluciones')

      .py-4.py-md-5(titulo="Comunicación y actuación en función de los datos" :icono="require('@/assets/curso/temas/tema1/img1-43.svg')")
        .row
          .col-md-7.mb-4.mb-md-0
            p Cuando se generan procesos de analítica, es tan importante la comunicación y el uso de los datos para el negocio, como también su desarrollo; el paso final de estos proyectos es el de comunicar y accionar los resultados; es necesario contar una historia a partir de los datos y, desde allí, generar conocimiento para actuar mejor.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img1-44.svg', alt='Comunicación')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .cajon.color-acento-botones.p-4.mb-4(style="background-color: #FFF1C2")
          p Una vez se cuenta con el análisis de los requerimientos, se procede con la etapa ETL, que comprende tres momentos: en primer lugar, el momento de la extracción, en segundo lugar, el momento de la transformación y, finalmente, el momento para la carga de los datos.

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
