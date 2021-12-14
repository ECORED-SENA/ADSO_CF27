<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 4
      h1 Gestores de contenido CMS
    
    .row.fondo4.mb-5
      .col-lg-12.p-lg-5
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-4.mb-lg-0
            p.mb-0 Los gestores de contenidos o CMS nacieron para facilitar el trabajo a los administradores de sitios web normalmente denominados <em>WebMasters</em> y han logrado avanzar tanto que se han convertido en opciones importantes en el momento de exponer información y contenido propio en la web, sin tener que externalizar el servicio o contratar a un profesional evitando costos innecesarios.  Es por ello, que la siguiente figura muestra la integración general del CMS en un sitio web:
          .col-lg-7
            figure
              img.mx-auto(src='@/assets/curso/tema4/img1.svg' alt='Imagen ambiental' style='width:692px')
            


    #t_4_1.titulo-segundo.color-acento-contenido
      .h2 4.1 Definición 
    
    .row.fondo-gradiente2.mb-5
      .col-lg-12.p-md-5
        
        .row.justify-content-center.gx-0.mb-4
          .col-10.col-lg-5.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema4/img2.svg', alt='imagen ambiental', style="width: 525px;").m-auto
          .col-lg-7(style="background-color: #4DD0E1")
            .p-5
              p.mb-0.pt-lg-5 Un gestor de contenidos o CMS es un sistema manejador de contenidos que corresponde a un <em>software</em> orientado a la web que permite crear, administrar y publicar una página web en la red Internet, sin la necesidad de contar con conocimientos en desarrollo de <em>software</em> y mucho menos en programación de computadores. Estas aplicaciones cumplen un papel de administración virtual en línea que permiten crear, editar y publicar contenido web. 


        .row.mb-5
          separador
          #t_4_2.titulo-segundo.color-acento-contenido
            .h2 4.2 Funciones
            
          p A continuación, se describen las principales funciones que debe cumplir un CMS.


        .row.justify-content-center.mb-5.mb-lg-0
          .col-lg-6.mb-4.mb-lg-0
            LineaTiempoD.color-primario
              p(numero="1" titulo="Independencia entre el código y el contenido") Permiten independizar la parte que corresponde a la gestión de la estructura y funcionalidad de la web, de la parte de administración de contenidos. De esta manera se puede mantener trabajando sobre el sistema CMS perfiles totalmente separados. Por un lado, el perfil desarrollador puede configurar las capacidades del CMS o extenderlas, mientras que el perfil constructor de contenidos estará enfocado en la publicación de los contenidos. 
              p(numero="2" titulo="Plantillas en el diseño web") Permiten modificar la capa de visualización y el diseño de la estructura del sitio web de una forma sencilla mediante el uso de plantillas que corresponde a colores, tipos de letras, imágenes, posicionamiento, etc., que son comunes en las diferentes páginas. De esta manera se puede aplicar cada plantilla con el diseño que se desee sobre el contenido común para que este pueda verse de múltiples formas. <br><br> Se pueden encontrar por un lado plantillas sencillas y de carácter gratuito y por otra parte plantillas de orden profesional con un gran diseño y así mismo con gran coste asociado.
              p(numero="3" titulo="Extensión de capacidades") Los CMS o gestores de contenido ofrecen una serie de funcionalidades básicas que en ocasiones no pueden llegar a cubrir todas las necesidades de un sitio web, es así como se dispone de la posibilidad de crear sistemas de extensión (<em>plugins</em>) para poder añadir nuevas funcionalidades de una forma sencilla sobre la estructura del sitio web.
              p(numero="4" titulo="Enfocados al SEO") Permiten implementar en los sitios web el posicionamiento SEO (<em>Search Engine Optimization</em>), el cual consiste en ejecutar las labores de posicionamiento, visualización en los principales motores de búsqueda de los navegadores por tanto el contenido que es la parte más importante debe quedar siempre bien posicionado cuando se realizan las búsquedas.
              p(numero="5" titulo="Gestión de enlaces") Cada ingreso al sitio web denominado “<em>landing home</em>”, tiene asignado un enlace o <em>permalink</em>. Los CMS o gestores de contenidos permiten gestionar de una forma muy ágil, rápida y sencilla el enlace asociado a cada contenido. Este elemento está relacionado con el anterior en donde se busca llevar una buena concordancia entre el título, contenido y enlace de la web como técnica primordial en las técnicas SEO. Así se puede asociar de forma personalizada un enlace con cada contenido.
              p(numero="6" titulo="Flujos de trabajo") Hace referencia a la posibilidad de definir responsabilidades dentro del grupo humano que contribuye en la administración del gestor de contenidos donde normalmente se encuentran dos perfiles, el perfil que genera el contenido y lo publica al CMS o Gestor de Contenidos y al perfil que revisa y aprueba el contenido y que finalmente lo hace público. <br><br> Los CMS o gestores de contenidos ofrecen flujos de trabajo de aprobación un poco complejos en los que estos dos perfiles puedan realizar el procedimiento de publicación de contenidos.
              p(numero="7" titulo="Comentarios") Mucho del contenido que se sirve es susceptible de ser comentado. De esta manera, casi todos los sistemas CMS o gestores de contenidos llevan incluido un sistema de gestión de comentarios dónde se podrá validar el autor del comentario, así como hacer una administración de los mismos.
              p(numero="8" titulo="Control de las versiones") El contenido cambia con el tiempo, incluso pueden existir varios usuarios que estén modificando el contenido, realizando modificaciones o anotaciones. En este punto es importante el control de versiones; es decir, que se guarde como versión, ya sea una versión importante o una simple revisión, el contenido modificado. Es por ello que los CMS o gestores de contenidos nos ofrecen el poder ir versionando el contenido, recuperar versiones anteriores a la que estamos trabajando y publicar una versión en concreto del contenido.
              p(numero="9" titulo="Múltiples idiomas") Muchas de las webs que se construyen publican contenido en múltiples idiomas. La estructura de la página es la misma, pero el contenido está publicado en varios idiomas. Es por ello que los CMS o gestores de Contenidos nos permiten realizar la gestión de contribuir el contenido en varios idiomas y la capacidad de mostrarlo atendiendo a las preferencias del visitante.
              p(numero="10" titulo="Múltiples Sitios") Las webs que desarrollamos ya no suelen tener un único sitio (o <em>site</em>) sino que suelen tener diferentes secciones de entrada o <em>landing pages</em>. Es por ello que una de las características de los CMS o gestores de Contenidos es la de poder gestionar varios sitios desde una plataforma centralizada, evitando realizar operaciones de mantenimiento en diferentes sitios, con el consecuente coste asociado.
              p(numero="11" titulo="Seguridad") La seguridad es uno de los puntos importantes de los CMS o gestores de contenidos, de tal manera que se enfocan a que se pueda perfilar el tipo de contenido dependiendo del usuario que lo consume y ofrecen una seguridad general enfocada a dar protección a todo el sitio web.
            
          .col-10.col-lg-6
            figure
              img(src='@/assets/curso/tema4/img3.svg', alt='imagen ambiental', style="width: 610px;").m-auto


    p.mb-4 El resumen de las funcionalidades de un CMS se presenta a continuación:

    .row.justify-content-center.mb-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema4/img4-1.svg', alt=' funcionalidades de un CMS', style="").m-auto


    separador
    #t_4_3.titulo-segundo.color-acento-contenido
      .h2 4.3 Características

    .row.fondo5.mb-4
      .col-lg-12.p-md-5
          
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            ol.lista-ol--cuadro
              li.mb-4 
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 El <em>frontend</em>, corresponde a la parte visible del CMS para los usuarios que acuden como invitados o usuarios registrados.
              li.mb-4 
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 Conformación modular para la configuración y personalización de los sitios web.
              li.mb-4 
                .lista-ol--cuadro__vineta
                  span 3
                p.mb-0 Administración de usuarios, roles, perfiles y permisos de acceso.
              li.mb-4 
                .lista-ol--cuadro__vineta
                  span 4
                p.mb-0 Componentes para la creación, edición, publicación de contenidos.
              li.mb-4 
                .lista-ol--cuadro__vineta
                  span 5
                p.mb-0 Plantillas para distribuir y mantener el diseño del sitio web.
              li.mb-4 
                .lista-ol--cuadro__vineta
                  span 6
                p.mb-0 Posibilidad de extensiones que complementan las funcionalidades en el gestor de contenidos.
              li.mb-4 
                .lista-ol--cuadro__vineta
                  span 7
                p.mb-0 Características de manejo de internacionalización en varios idiomas.
                
          .col-lg-6
            figure
              img(src='@/assets/curso/tema4/img5.svg', alt=' imagen ambiental', style="width: 508px;").m-auto





    separador
    #t_4_4.titulo-segundo.color-acento-contenido
      .h2 4.4 Clasificación CMS

    p.mb-5 Se clasifican normalmente teniendo en cuenta los siguientes tres aspectos: de acuerdo al lenguaje de programación, a la distribución de la licencia y a las funcionalidades que presenta.


    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-center(titulo="Teniendo en cuenta el lenguaje de programación")
        .col-lg-6.mb-4.mb-md-0
          ul.lista-ul.mb-0
            li 
              i.fas.fa-layer-group(style="color: #039BE5;")
              p.mb-0
                b Lenguaje Java: 
                b-none jAPS, Liferay, DSpace, Fedora, Nuxeo EP, Magnolia, Hippo CMS, Calenco, Polopoly, IBM Lotus Web Content Management, Day Communiqué WCM, Jarimba, Vignette…
                
            li 
              i.fas.fa-layer-group(style="color: #039BE5;")
              p.mb-0
                b Lenguaje PHP: 
                b-none Drupal,CMS Made Simple, Joomla!, Mambo, PHP-Nuke, TikiWiki, TYPO3, WordPress, Xoops, Zikula, Jadu, ExpressionEngine, Accrisoft Freedom, CMS 10, Dim Works CMS, Content-SORT, Prodigia Easy Site Manager, PipePS, SiteAd CMS…
                
            li 
              i.fas.fa-layer-group(style="color: #039BE5;")
              p.mb-0
                b ASP.NET de Microsoft: 
                b-none DotNetNuke Community Edition, Umbraco, mojoPortal, Kentico CMS, SharePoint Server, Telligent Community, Ektron CMS400.NET, Quantum Art QP7, webControl CMS…
                
        .col-lg-5
          figure
            img(src='@/assets/curso/tema4/img6.svg', alt='imagen ambiental', style="width: 505px;").m-auto
            
      .row.justify-content-center(titulo="Con base en la licencia")
        .col-lg-6.mb-4.mb-md-0
          ul.lista-ul.mb-0
            li 
              i.fas.fa-layer-group(style="color: #039BE5;")
              p.mb-0
                b De <em>software</em> libre (<em>Open Source</em>): 
                b-none significa que esta herramienta no presenta costos de licencia y el código fuente es accesible para ser modificado por los desarrolladores. El soporte técnico de este tipo de CMS es asumido por la entidad que lo implementa o por medio de comunidades <em>online</em> que comparten y mantienen su documentación. En esta categoría, algunos de los gestores más reconocidos son WordPress, Drupal, Joomla, Plone, TYPO3, OpenCMS, PHPNuke o Moodle.
                
            li 
              i.fas.fa-layer-group(style="color: #039BE5;")
              p.mb-0
                b De código privado: 
                b-none presentan costos de licencia y servicio, el código fuente es propietario por tanto sólo puede ser accedido y modificado por la compañía o personas que lo desarrollaron. En cuanto al soporte técnico es parte de la oportunidad de negocio y normalmente es de excelente calidad, así como una gran cantidad de información documental. Los gestores más destacados son CMS10, Eximius2 CMS, Contendo CMS, Jarimba, CMS HYDRAportal, OnBase, IWEB, Oracle Portal, PipePS, Paloo, Smartone CMS, Vbulletin, XCM – Xeridia Content Manager, ZWeb Publisher CMS.
            
                
        .col-lg-5
          figure
            img(src='@/assets/curso/tema4/img7.svg', alt='imagen ambiental', style="width: 400px;").m-auto
            
      .row.justify-content-center(titulo="De acuerdo a su funcionalidad")
        .col-lg-6.mb-4.mb-md-0
          ul.lista-ul.mb-0
            li 
              i.fas.fa-layer-group(style="color: #039BE5;")
              p.mb-0
                b Plataformas en general: 
                b-none se destacan los siguientes nombres (Drupal, Gekko, E107, Joomla, Mambo, PHP-Nuke, TYPO3, TYPOLight, XOOPS, ZWeb Publisher CMS, ADSM Portal 2.0, 360 Web Manager <em>Software</em>, GTLive).
              
            li 
              i.fas.fa-layer-group(style="color: #039BE5;")
              p.mb-0
                b Sitios de educación: 
                b-none entre los cuales se encuentran (ATutor, Claroline, Dokeos, eCollege, FrogTeacher, Moodle, Sakai Project, Scholar360, Synergeia, Teleto).
            li 
              i.fas.fa-layer-group(style="color: #039BE5;")
              p.mb-0
                b <em>Blogs</em>: 
                b-none WordPress, bBlog, DotClear, Lifetype, Plone, Nucleus CMS, Blogger, Textpatter.
            li 
              i.fas.fa-layer-group(style="color: #039BE5;")
              p.mb-0
                b Galerías: 
                b-none Gallery, Pixelpost, Expression Engine.
            li 
              i.fas.fa-layer-group(style="color: #039BE5;")
              p.mb-0
                b <em>Wikis</em>: 
                b-none sitios donde grupos de personas publican contenido de manera rápida (MediaWiki, TikiWiki, Twiki).
            li 
              i.fas.fa-layer-group(style="color: #039BE5;")
              p.mb-0
                b Comercio electrónico: 
                b-none para ventas <em>online</em> (osCommerce, Magento, Zen Cart, Drupal e-Commerce, CubeCart, Open cart, VirtueMart).
            li 
              i.fas.fa-layer-group(style="color: #039BE5;")
              p.mb-0
                b <em>Groupware</em>: 
                b-none para coordinar trabajo colaborativo en procesos de negocio (Webcollab, eGroupWare, Groupware).
            
                
        .col-lg-5
          figure
            img(src='@/assets/curso/tema4/img8.svg', alt='imagen ambiental', style="width: 520px;").m-auto
            


    p.mb-5 A continuación, se presenta la clasificación de los CMS:

    figure.mb-4
      img(src='@/assets/curso/tema4/img9.svg', alt='imagen ambiental', style="width: ").m-auto


    separador
    #t_4_5.titulo-segundo.color-acento-contenido
      .h2 4.5 Tipos CMS

    .row.justify-content-center
      .col-lg-6.mb-4.mb-lg-0
        p.mb-4 Los tipos dependen a su vez de los tipos de páginas web en que se desee involucrar o que se desee crear, para ello cuentan con una serie de gestores de contenidos muy especializados, equipados con herramientas y características acordes a cada necesidad.
        p.mb-4 Se pueden encontrar los siguientes gestores de contenidos para utilizarlos en:
        .row.justify-content-center
          .col-lg-8
            .p-5(style="background-color: #FFF5D6")
              p.mb-0 <em>Blogs</em>.
              p.mb-0 Páginas corporativas.
              p.mb-0 Tiendas online o <em>ecommerce</em>.
              p.mb-0 Sitios de <em>e-learning</em>.
              p.mb-0 Foros.
              p.mb-0 <em>Wikis</em>.
      .col-10.col-lg-6
        figure.mb-0
          img(src='@/assets/curso/tema4/img10.jpg', alt='imagen ambiental', style="width: 600px;").m-auto










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
