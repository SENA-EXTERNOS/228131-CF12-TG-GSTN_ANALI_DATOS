export default {
  global: {
    componenteFormativo:
      'Desarrollo de reportes: cálculos, medidas y visualización de datos',
    descripcionCurso:
      'Este componente de formación presenta contenidos conceptuales y técnicos sobre elementos, métodos y herramientas empleados para el desarrollo de reportes y tableros, a partir de los datos. Se adicionan elementos como fuente de datos, transformación y desarrollo de gráficos usando datos nativos y cálculos con lenguajes de consulta.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Análisis de requerimientos para la toma de decisiones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Herramientas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Valor de los datos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Definición de detalles de los reportes',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Proceso ETL',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Origen de datos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Transformación de datos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Carga de datos masivos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Modelación de cubos de datos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Desarrollo de KPI y visualización de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Modelación de indicadores',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Introducción a Lenguaje DAX',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Desarrollar medidas y cálculos en los datos',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Visualización de datos y desarrollo de reportes',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Análisis de requerimientos para la toma de decisiones',
      referencia:
        'ORACLE. (2020). <em>Top big data analytics use cases</em>. Recursos formativos de Oracle.',
      tipo: 'Artículo',
      link:
        'https://www.oracle.com/lad/big-data/what-is-big-data/the-top-use-cases-for-big-data-analytics/?source=:ad:pas:go:dg:a_lad:71700000086979734-58700007414859471-p66509544640:RC_WWMK220512P00038C0002:DataManagementPAN&gclid=Cj0KCQjw7KqZBhCBARIsAI-fTKK3YFeoon2TKeXtpVbyNUAXaiAZT8WVm-7BThhShJPA1iHQw8iysoAaAsE_EALw_wcB&gclsrc=aw.ds',
    },
    {
      tema: 'Análisis de requerimientos para la toma de decisiones',
      referencia:
        'Curto Díaz, J. (2016). <em>Organizaciones orientadas al dato: transformando las organizaciones hacia una cultura analítica.</em>',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/58609',
    },
    {
      tema: 'Desarrollo de KPI y visualización de datos',
      referencia:
        'Microsoft (2018). <em></em>Tutorial rápido: aprenda los fundamentos DAX en 30 minutos</em>. Microsoft.',
      tipo: 'Tutorial',
      link:
        'https://support.microsoft.com/es-es/office/tutorial-r%C3%A1pido-aprenda-los-fundamentos-de-dax-en-30-minutos-51744643-c2a5-436a-bdf6-c895762bec1a',
    },
    {
      tema: 'Desarrollo de KPI y visualización de datos',
      referencia:
        'Zabala. (2021). <i>MOOC Power BI. Índice módulo 1 | 1/136 | UPV</i> (video). YouTube.',
      tipo: 'MOOC',
      link:
        'https://youtu.be/QsehT8swx58?list=PL6kQim6ljTJuIJlGNWwCzXx89vj3gsymk',
    },
  ],
  glosario: [
    {
      termino: 'Columna calculada',
      significado:
        'se refiere a la inclusión de una columna virtual o lógica a una tabla, por lo general toma referencia de otros valores de la misma tabla (o de otra relacionada) para realizar cálculos y generar nuevos datos.',
    },
    {
      termino: '<em>Dashboard</em>',
      significado:
        'tablero de mando donde se visualizan los datos en forma gráfica y de manera amigable.',
    },
    {
      termino: '<em>Data warehouse</em>',
      significado:
        '(DWH) o bodega de datos, base de datos con gran cantidad de información que sirve como insumo para los reportes BI.',
    },
    {
      termino: 'Disparadores',
      significado:
        '<em>Trigger.</em> Desencadena una acción a partir de unas condiciones o parámetros, se implementa con frecuencia para la automatización de procesos y otros usos.',
    },
    {
      termino: 'Estilos',
      significado:
        'son los formatos, diseños y atributos gráficos de los objetos, tales como colores, fuentes, tamaños, líneas, fondos, etc.',
    },
    {
      termino: '<em>IT</em>',
      significado: ' TI, en español, iniciales de tecnología e información.',
    },
    {
      termino: '<em>Merge</em>',
      significado:
        'Unir o juntar, en el contexto de gestión de datos se refiere a la unión de dos o más tablas bajo unos parámetros, es muy usado en procesamiento ETL.',
    },
    {
      termino: 'Reglas de negocio',
      significado:
        'condiciones establecidas en los procesos por los cuales se definen los flujos y programación de los recursos tecnológicos.',
    },
    {
      termino: 'Sintaxis',
      significado:
        'En el contexto de la codificación en lenguajes de programación y consulta de datos, se refiere a las reglas lingüísticas o técnicas que se deben seguir para que la máquina entienda los comandos e instrucciones.',
    },
    {
      termino: '<em>Splits</em>',
      significado:
        'División, en el contexto de gestión de datos se refiere a dividir los datos de una tabla, según sus columnas o valor del dato, es muy usado en procesamiento ETL.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agrawal, A., Joshua, G., & Avi, G. (2019). <em>Máquinas predictivas: la sencilla economía de la inteligencia artificial.</em> Editorial Reverté.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/122310',
    },
    {
      referencia:
        'Bobadilla, J. (2020). <em>Machine Learning y Deep Learning.</em> Ediciones de la U.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=10277',
    },
    {
      referencia:
        'Díaz, J. C. (2016). <em>Organizaciones orientadas al dato: transformando las organizaciones hacia una cultura analítica.</em> Editorial UOC. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/58609',
    },
    {
      referencia:
        'Dot CSV. (2019). <i>¿Qué es el Aprendizaje Supervisado y No Supervisado?</i> [video]. YouTube.',
      link: 'https://youtu.be/oT3arRRB2Cw',
    },
    {
      referencia:
        'Feliciano Morales, A., Cuevas Valencia, R., & Martínez Castro, J. M. (2022). Evaluandosoftware.com. <em>Revista Iberoamericana de las Ciencias Computacionales e Informática (RECI).</em>',
      link:
        'https://www.evaluandosoftware.com/cubos-olap-informacion-la-toma-decisiones/',
    },
    {
      referencia:
        'IBM. (2022). <em>IA y Machine Learning con Watson Knowledge Catalog.</em>',
      link: 'https://www.ibm.com/co-es/cloud/watson-knowledge-catalog',
    },
    {
      referencia:
        'Logicalis. (2017). <em>KPI’s ¿Qué son, para qué sirven y por qué y cómo utilizarlos?</em> Logicalis.',
      link:
        'https://blog.es.logicalis.com/analytics/kpis-qu%C3%A9-son-para-qu%C3%A9-sirven-y-por-qu%C3%A9-y-c%C3%B3mo-utilizarlos',
    },
    {
      referencia:
        'Microsoft. (2018). <i>Tutorial rápido: aprenda los fundamentos DAX en 30 minutos</i>. Microsoft.',
      link:
        'https://support.microsoft.com/es-es/office/tutorial-r%C3%A1pido-aprenda-los-fundamentos-de-dax-en-30-minutos-51744643-c2a5-436a-bdf6-c895762bec1a',
    },
    {
      referencia:
        'Ommi, A. K. (018). <em>Introduction to Data and Information.</em> MyCloudWiki.',
      link: 'https://www.mycloudwiki.com/san/data-and-information-basics/',
    },
    {
      referencia:
        'Oracle. (2020). <em>Top big data analytics use cases.</em> Recursos formativo de Oracle, 18.',
      link:
        'https://www.oracle.com/a/ocom/docs/top-22-use-cases-for-big-data.pdf?source=:ad:pas:go:dg:a_lad:71700000086979734-58700007414859471-p66509544640:RC_WWMK220512P00038C0002:DataManagementPAN&gclid=Cj0KCQjw7KqZBhCBARIsAI-fTKK3YFeoon2TKeXtpVbyNUAXaiAZT8WVm-7BT',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
