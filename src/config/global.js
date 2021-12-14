export default {
  global: {
    componenteFormativo: 'Diseño de interfaces <em>Web</em>',
    descripcionCurso:
      'El diseño de un sitio <em>web</em> corresponde a un componente fundamental en el proceso de creación de aplicaciones <em>Web</em>; por ende, este componente está orientado a la comprensión de los conceptos más importantes que se deben tener en cuenta, así como también la forma en que se deben codificar para construir de manera propia un sitio <em>web</em> o de apoyarse en sistemas gestores de contenidos denominados CMS.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner.svg'),
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
        titulo: 'HTML 5',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Etiquetas (<em>tags</em>)',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Textos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Imágenes',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Hiperenlaces',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Tablas',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Formularios',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Hojas de estilo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Conceptos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Introducción CSS3',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Estructura',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Formularios CSS3',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'JavaScript',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Introducción',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Versiones',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Sintaxis',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Tipos de datos',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Estructuras de control',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Gestores de contenido CMS',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Definición',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Funciones',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Características',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Clasificación CMS',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Tipos CMS',
            hash: 't_4_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia:
        'Acibeiro. M. (2021). Qué es un gestor de contenidos y cuál es el mejor para crear una web.',
      link: 'https://www.lucushost.com/blog/gestor-de-contenidos/',
    },
    {
      referencia: 'Beati, H. (2016). HTML5 y CSS3.',
    },
    {
      referencia: 'Cuervo, P. V. (2019). 10 Características de un CMS.',
      link: 'https://www.arquitectoit.com/cms/10-caracteristicas-cms/',
    },
    {
      referencia:
        'Gutierrez, R. (2018). <em>Understanding the role of digital commons in the web; The making of </em>HTML5.',
    },
    {
      referencia:
        'Hverbeke, M. (2018). <em>Eloquent JavaScript: A Modern Introduction to Programming.</em>',
    },
    {
      referencia: 'Java desde 0. (2020). Introducción a JavaScript.',
      link: 'https://javadesde0.com/introduccion-a-javascript/',
    },
    {
      referencia: 'Lenguaje JS. (2021). Bucles e iteraciones.',
      link: 'https://lenguajejs.com/javascript/introduccion/bucles/',
    },
    {
      referencia:
        'Mooc, Aprendizaje Online.(2015). Clasificación de los sistemas de gestión de contenidos.',
      link:
        'https://mooccontenidosweb.wordpress.com/2015/05/01/clasificacion-de-los-sistemas-de-gestion-de-contenidos/',
    },
    {
      referencia:
        'Mora, S. L. (2021). HTML5 y CSS3: &lt;6&gt; HTML5 – Formularios&lt;/6&gt;.',
      link:
        'http://desarrolloweb.dlsi.ua.es/cursos/2011/html5-css3-es/html5-formularios',
    },
  ],
  glosario: [
    {
      termino: 'CMS',
      significado: 'sistema manejador de contenidos.',
    },
    {
      termino: 'CSS3',
      significado: ' hojas de estilo en cascada versión 3.',
    },
    {
      termino: 'ES6',
      significado: 'Abreviación del estándar <em>ECMA SCRIPT</em> Versión 6.',
    },
    {
      termino: '<em>Frontend</em',
      significado:
        'se refiere a la capa de presentación de una aplicación <em>web</em>.',
    },
    {
      termino: '<em>Get</em>',
      significado: 'método de envío de datos por URL <em>web</em>.',
    },
    {
      termino: 'JavaScript',
      significado: 'lenguaje de programación.',
    },
    {
      termino: 'LAN',
      significado: 'Red de área local.',
    },
    {
      termino: '<em>Landing Page</em>',
      significado: 'es un tipo de página web denominada de aterrizaje.',
    },
    {
      termino: '<em>LESS</em>',
      significado: 'extensión de tipos de archivos CSS3.',
    },
    {
      termino: 'MAN',
      significado: 'red de área metropolitana.',
    },
    {
      termino: 'NODE.js',
      significado: 'es un servidor de aplicaciones.',
    },
    {
      termino: '<em>Plugin</em>',
      significado:
        'aplicación que extiende las funcionalidades de un componente.',
    },
    {
      termino: '<em>Post</em>',
      significado: 'método de envío de datos por formulario web.',
    },
    {
      termino: 'SEO',
      significado:
        'se refiere al posicionamiento de páginas web en los motores de búsqueda.',
    },
    {
      termino: 'WAN',
      significado: 'Red de área mundial.',
    },
  ],
  complementario: [
    {
      texto:
        'HTMLed.it. (2021). Editor HTML gratuito en línea, limpiador y convertidor.',
      tipo: 'Página web',
      link: 'https://htmled.it/or/',
    },
    {
      texto: 'Cubic Factory. (2021). Ejecutar JavaScript.',
      tipo: 'Página web',
      link: 'https://www.cubicfactory.com/jseditor/',
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
      {
        nombre: 'Carlos Hernán Muñoz Carvajal',
        cargo: 'Experto temático',
        centro:
          'Centro de Teleinformática y Producción Industrial - Regional Cauca',
      },
      {
        nombre: 'Deivis Eduard Ramírez Martínez',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
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
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Sandra Carolina Durán López'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'John Andres Ayala Angarita',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
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
