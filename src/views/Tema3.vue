<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 JavaScript
    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        .p-5(style="background-color: #039BE5")
          p.mb-0.text-white Es un lenguaje de programación que se inserta en una página <em>web</em> que es interpretado por los navegadores, el concepto de interpretado hace referencia a la ejecución secuencial línea por línea que hace el intérprete del navegador ante todo del lado cliente, aunque hoy en día también se logra del lado servidor con el apoyo de Node.js, el cual no es compilado como otros lenguajes de programación. Este lenguaje está orientado a brindar posibilidades de construcción de código HTML de manera dinámica; es decir, el programa que se crea construye el conjunto de <em>tags</em> HTML de manera automática multiplicando de manera sustancial el enriquecimiento del diseño de las interfaces <em>web</em>.	
      .col-10.col-lg-5
        figure
          img(src='@/assets/curso/tema3/img1.svg', alt='imagen ambiental', style="width: 450px;").m-auto
          




    #t_3_1.titulo-segundo.color-acento-contenido
      .h2 3.1 Introducción 

    .contenedor-total
      figure
        img.mx-auto(src='@/assets/curso/tema3/img2.jpg' alt='Imagen ambiental' style='')
      .contenedor-text
        .row.mb-4.mb-lg-0
          .col-lg-10
            p.mb-0 Es importante tener en cuenta que JavaScript y Java con lenguajes diferentes, dado que por llevar el mismo nombre se puede presentar para confusiones; para insertar código JavaScript a una página web se puede hacer de las siguientes formas: 


    .row.justify-content-center.align-items-center.mb-5
      .col-9.col-lg-6.mb-4.mb-lg-0
        figure
          img.mx-auto(src='@/assets/curso/tema3/img3.svg' alt='Imagen ambiental' style='width:590px;')
      .col-lg-6
        ul.lista-ul.mb-0
          li 
            i.fas.fa-layer-group(style="color: #039BE5;")
            p.mb-0 Con código que se agrega dentro de la misma página.
              
          li 
            i.fas.fa-layer-group(style="color: #039BE5;")
            p.mb-0 Con archivos independientes que se almacenan en rutas diferentes a la página.
              
          li 
            i.fas.fa-layer-group(style="color: #039BE5;")
            p.mb-0 Con código referenciado en otras páginas web ya publicadas en la red internet.
              
    

    .row.fondo3.mb-5.mb-lg-0
      .col-lg-12.p-lg-5
        .row.justify-content-center.mb-5
          .col-11.col-lg-5.mb-4.mb-lg-0
            .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img4.svg')})`}")
                .tarjeta-flip__contenido.p-4.p-xl-5
                  .code.pt-1.px-0
                    code  &lt;html&gt; <br>&emsp;&lt;head&gt; <br>&emsp;&emsp;&lt;title&gt; Página web con código JavaScript embebido <br>&emsp;&emsp;&lt;/title&gt; <br>&emsp;&emsp; &lt;script type="text/javascript"&gt; insertar tag con atributo type indicando el uso del lenguaje JavaScript <br> alert(“Mi primer mensaje usando JavaScript”); <br>&emsp;&emsp;&emsp;&lt;/script&gt; <br>&emsp;&lt;/head&gt; <br>&emsp;&lt;body&gt; <br>&emsp;&emsp;&lt;p&gt; Contenido de la página web &lt;/p&gt;  <br>&emsp;&lt;/body&gt; <br>&lt;/html&gt;
              
                
          .col-11.col-lg-5
            .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img5.svg')})`}")
                .tarjeta-flip__contenido.p-4.p-xl-5
                  .code.pt-1.px-0
                    code  &lt;html&gt; <br>&emsp;&lt;head&gt; <br>&emsp;&emsp;&lt;title&gt; Página web con código JavaScript embebido desde otros archivos fuera de la página actual. <br>&emsp;&emsp;&lt;/title&gt; <br>&emsp;&emsp; &lt;script src="static/js/miCodeUno.js"&gt; &lt;/script&gt; <br>&emsp;&emsp; &lt;script src="static/js/miCodeDos.js"&gt; &lt;/script&gt; <br>&emsp;&emsp;&lt;script src="static/js/miCodeTres.js"&gt; &lt;/script&gt; <br>&emsp;&lt;/head&gt; <br>&emsp;&lt;body&gt; <br>&emsp;&emsp;&lt;p&gt; Contenido de la página web &lt;/p&gt;  <br>&emsp;&lt;/body&gt; <br>&lt;/html&gt;
                    
        .row.justify-content-center.mb-0
          .col-lg-10
            p.mb-4 El resultado de la ejecución del código anterior se puede visualizar a continuación:
            .row.justify-content-center
              .col-4.col-lg-2
                a.boton.color-secundario.indicador__container(@click="modal1 = true")(style="border-radius: 100px; background: linear-gradient(to bottom, #039BE5, #027FBC);")
                  span.text-center 
                    b.text-white Ejecutar en el navegador
                  .indicador--click(v-if="mostrarIndicador")
                    
            ModalA(:abrir-modal.sync="modal1")
              .row
                .col-12
                  figure.mb-4
                    img.m-auto(src='@/assets/curso/tema3/img6.png' alt='Imagen ambiental' style='')



    p.mb-4 Ejemplo de inclusión de código desde archivos con extensión .js en url diferentes a la de la página:

    .row.justify-content-center
      .col-10.col-lg-10
        figure.mb-5
          img.m-auto(src='@/assets/curso/tema3/img8.png' alt='Imagen ambiental' style='')
          


    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      .h2 3.2 Versiones
      
      
    .row.justify-content-center.gx-0.mb-5
      .col-lg-7.mb-4.mb-lg-0(style="background-color: #039BE5")
        .p-5
          p.mb-0.pt-lg-5.text-white El lenguaje JavaScript aparece aproximadamente a mediados de los años noventa elaborado por Brendan Eich, como una forma de mejorar la experiencia de usuario, puesto que en aquella época la velocidad de internet era demasiado lenta y se requería de un lenguaje del lado cliente al momento de realizar una petición <em>web</em>. En 1996 se propuso determinar un estándar, puesto que cada navegador lo interpretaba a su manera y por eso surgió ECMA-262 Ed.1 ES1. La evolución del lenguaje se muestra en la siguiente línea del tiempo:
      .col-10.col-lg-5
        figure
          img(src='@/assets/curso/tema3/img9.jpg', alt='imagen ambiental', style="").m-auto

    .tarjeta.fondo-slider.p-4.mb-4
      SlyderA(tipo="b")
        .row.justify-content-center.pt-4
          .col-11.col-lg-12
            figure
              img(src='@/assets/curso/tema3/img10.svg', alt='linea de tiempo javascript', style="").m-auto
        .row.justify-content-center.pt-4
          .col-11.col-lg-12
            figure
              img(src='@/assets/curso/tema3/img10-2.svg', alt='linea de tiempo javascript', style="").m-auto

    separador
    #t_3_3.titulo-segundo.color-acento-contenido
      .h2 3.3 Sintaxis


    .tarjeta.fondo-slider.p-4.mb-4
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.pt-4
          .col-11.col-lg-5.mb-4.mb-md-0
            p.mb-4 En Javascript existe un conjunto de elementos que permiten conformar un programa, variables, constantes, operadores, expresiones que corresponden a una forma de combinación de variables, constantes y operadores, sentencias encargadas de guardar un orden lógico y funciones como el conjunto de sentencias que permiten resolver un problema; para todos estos elementos existen una serie de reglas que se deben cumplir al momento de escribir el código así:
            p.mb-0 Variables: se definen como espacios de memoria reservada para almacenar algún dato y que se identifican con un nombre para definirlas, se debe utilizar la palabra "var" seguida del nombre, el símbolo igual y un valor finalizado con punto y coma.
              
              
          .col-10.col-lg-5(style="background-color: #12263F; color: #039BE5;")
            .p-5
              p(style="color: #039BE5;") var nombreVariable = 20;
              p(style="color: #039BE5;") var a = 5;
              p(style="color: #039BE5;") var b = 3;
              p.mb-0(style="color: #039BE5;") var multiplicar = a*b;
              
        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-md-0
            p.mb-0 Las constantes, como su nombre lo indica, sirven para definir valores únicos que se pueden utilizar en diferentes partes del programa; se definen con la palabra const seguida del nombre de variable, el símbolo igual y termina con punto y coma.
              
          .col-10.col-lg-5(style="background-color: #12263F; color: #039BE5;")
            .p-5
              p.text-center.mb-0(style="color: #039BE5;") const gravedadTierra = 9.8;
              
        .row.justify-content-center.align-items-center.pt-lg-5
          .col-11.col-lg-5.mb-4.mb-md-0
            p.mb-4 Los operadores se definen en tres grupos: operadores de asignación, operadores de relación y los operadores lógicos.
            ul.lista-ul.mb-0
              li 
                i.fas.fa-layer-group(style="color: #039BE5;")
                p.mb-0 Los operadores de asignación son igual =, suma +=, resta -=, multiplicación *=, división /= y módulo %.
              li 
                i.fas.fa-layer-group(style="color: #039BE5;")
                p.mb-0 Los operadores de relación son mayor  &gt;, mayor igual  &gt;=, menor  &lt;, menor igual &lt;= , igual que == y diferente de !=.
              li 
                i.fas.fa-layer-group(style="color: #039BE5;")
                p.mb-0 Los operadores lógicos para evaluar verdadero o falso son AND && , OR || y NOT !.
            .cajon.color-acento-botones.p-4
              p.mb-0 Las sentencias se conforman como la combinación de constantes, variables y operadores:
              
          .col-10.col-lg-5(style="background-color: #12263F; color: #039BE5;")
            .p-5
              p(style="color: #039BE5;") var nombreVariable = 20;
              p(style="color: #039BE5;") const gravedadTierra = 9.8;
              p.mb-0(style="color: #039BE5;") var resultado =  nombreVariable -  gravedadTierra;
            
        .row.justify-content-center.align-items-center
          .col-11.col-lg-5.mb-4.mb-md-0
            p.mb-0 Las funciones permiten identificar con un nombre una acción dentro de un programa, es la combinación de sentencias, variables, constantes y expresiones; se escribe utilizando la palabra 
              b <em>function </em>
              b-none seguida de una lista de parámetros de entrada, separados por comas, encerrados entre paréntesis (), en donde el conjunto de sentencias que operan esas entradas se encierran entre llaves {}.
              
          .col-10.col-lg-5(style="background-color: #12263F; color: #039BE5;")
            .p-5
              p.mb-0(style="color: #039BE5;") function sumarDatos(parametroUno, parametroDos, parametroTres) {
              p.text-center.mb-0(style="color: #039BE5;") var a = parametroUno;
              p.text-center.mb-0(style="color: #039BE5;") var b = parametroDos;
              p.text-center.mb-0(style="color: #039BE5;") var c = parametroTres;
              p.text-center.mb-0(style="color: #039BE5;") var resultadoSuma = a + b + c;
              p.mb-0(style="color: #039BE5;") }
              
              
    





    separador
    #t_3_4.titulo-segundo.color-acento-contenido
      .h2 3.4 Tipos de datos

    .contenedor-total
      figure
        img.mx-auto(src='@/assets/curso/tema3/img11.jpg' alt='Imagen ambiental' style='')
      .contenedor-text
        .row.mb-4.mb-lg-0
          .col-auto.p-lg-4
            p.mb-0 Con relación a los tipos de datos JavaScript presenta una característica fundamental y es que cuenta con la capacidad de adaptarse al dato ingresado por el usuario; es decir, que el tipo de dato es dinámico cuando fue definido con la palabra de reserva variable.


    .row.justify-content-center.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Variables numéricas")
            .col-md-12
              p.mb-4 Se utilizan para definir variables enteras (<em>integer</em>), reales (<em>float</em>), hexadecimal(0x) y octal (0).
              .p-5(style="background-color: #12263F; color: #039BE5;")
                p.mb-0(style="color: #FFCA28;") var formatoEntero = 45;
                p.mb-0(style="color: #FFCA28;") var formatoFlotante = 78.123;
                p.mb-0(style="color: #FFCA28;") var formatoHexaDecimal = 0xF34;
                p.mb-0(style="color: #FFCA28;") var formatoOctal = 0568;
                
                  
          .row(numero="2" titulo="Variables de caracteres")
            .col-md-12
              p.mb-4 Permite almacenar cadenas de texto dentro de las comillas, para bajar un renglón en el texto se debe utilizar \n, para agregar un tabulador \t, para comilla simple \’, para comillas dobles \”, y para barra inclinada \\.
              .p-5(style="background-color: #12263F; color: #039BE5;")
                p.mb-0(style="color: #FFCA28;") var nombreApellidos = "JUAN ESTEBAN GOMEZ\n";
                p.mb-0(style="color: #FFCA28;") var mensaje = "Este es mi primer mensaje de bienvenida \t \'VALOR\'";
                  
          .row(numero="3" titulo="Variables tipo lógico")
            .col-md-12
              p.mb-4 Permiten definir variables <em>booleanas</em> falso o verdadero.
              .p-5(style="background-color: #12263F; color: #039BE5;")
                p.mb-0(style="color: #FFCA28;") var esCasada = true;
                p.mb-0(style="color: #FFCA28;") var tieneHijo = false;
                
          .row(numero="4" titulo="Variables tipo arreglo")
            .col-md-12
              p.mb-4 Denominados también como matrices o vectores y se usan para definir variables que se relacionan en un mismo conjunto; se definen entre corchetes separados por coma y valores entre comillas.
              .p-5(style="background-color: #12263F;")
                p.mb-0(style="color: #FFCA28;") var diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes","Sabado", "Domingo"];
                  
          .row(numero="5" titulo="Variables tipo objeto")
            .col-md-12
              p.mb-4 Son variables que a diferencia de los arreglos, se definen dentro de llaves con el nombre de propiedad y su valor.
              .p-5(style="background-color: #12263F;")
                p.mb-0(style="color: #FFCA28;") var miCarro = {
                p.mb-0(style="color: #FFCA28;") &emsp; placa = 'X45-56',
                p.mb-0(style="color: #FFCA28;") &emsp; modelo = 'X45-56',
                p.mb-0(style="color: #FFCA28;") &emsp; marca = 'X45-56',
                p.mb-0(style="color: #FFCA28;") &emsp;};
                p.mb-0(style="color: #FFCA28;") alert("Esta es la placa de mi carro..." + miCarro.placa);
                  
      .col-8.col-lg-6
        figure
          img.mx-auto(src='@/assets/curso/tema3/img12.svg' alt='Imagen ambiental' style='width:440px')



    separador
    #t_3_5.titulo-segundo.color-acento-contenido
      .h2 3.5 Estructuras de control

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p.mb-4 Cuando se hace un programa en JavaScript las líneas de código se ejecutan de manera secuencial; es decir, primera, segunda, tercera, cuarta, etc., pero nunca cuarta y luego tercera, siempre se enumeran de arriba hacia abajo correspondiendo esto con el flujo del programa; durante este flujo en algún punto de las secuencias es necesario tomar una decisión y es ahí donde se debe utilizar el concepto de condicionales con respuesta positiva o negativa, en otro punto del programa se necesitará realizar el recorrido a estructuras de datos; por ejemplo un arreglo y para ello utilizaremos el concepto de bucle.
        .cajon.color-acento-botones.p-4
          p.mb-0 El condicional <em>if</em>, el más conocido de los condicionales, si se cumple la condición continúa ese camino. Se escribe entre paréntesis después de la palabra reservada <em>if</em>.
      .col-10.col-lg-6
        figure
          img.mx-auto(src='@/assets/curso/tema3/img13.jpg' alt='Imagen ambiental' style='width:600px')

    .row.justify-content-center.align-items-center.mb-5.gx-0
      .col-10.col-lg-5.py-lg-4(style="background-color: #12263F;")
        .p-5
          p(style="color: #FFCA28;") var edad = 17;
          p.mb-0(style="color: #FFCA28;") //Condicional para saber si es mayor de edad
          p.mb-0(style="color: #FFCA28;") if(edad &gt; 18 ){
          p.mb-0(style="color: #FFCA28;") &emsp;  alert(“Ya puede solicitar la cédula”);
          p.mb-0(style="color: #FFCA28;") }
      .col-10.col-lg-5(style="background-color: #f6f6f6;")
        figure
          img.mx-auto(src='@/assets/curso/tema3/img14.svg' alt='Imagen ambiental' style='width:500px')


    .tarjeta.tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.pt-4
          .col-11.col-lg-5.mb-4.mb-md-0
            p.mb-0 
              b Condicional <em>if/else</em>, 
              b-none este condicional indica el camino alterno que puede seguir el programa en el caso que no se cumpla la condición de la palabra reservada <em>if</em>.
            
          .col-10.col-lg-5.mb-4.mb-md-0
            figure
              img.mx-auto(src='@/assets/curso/tema3/img15.svg' alt='Imagen que acompaña' style='')
                
        .row.justify-content-center.align-items-center.pt-4
          .col-11.col-lg-5.mb-4.mb-md-0
            p.mb-0 
              b Operador ternario, 
              b-none es una forma de escribir el condicional <em>if/else</em> pero de una manera más corta; se identifica con el símbolo 
              b ?
            
          .col-10.col-lg-5.mb-4.mb-md-0
            figure
              img.mx-auto(src='@/assets/curso/tema3/img16.svg' alt='Imagen que acompaña' style='')
            
        .row.justify-content-center.align-items-center.pt-4
          .col-11.col-lg-5.mb-4.mb-md-0
            p.mb-0 
              b Condicional <em>if</em> múltiple, 
              b-none sirve para evaluar múltiples condiciones conservando la estructura del condicional <em>if</em> y para el caso alternativo se escribe la palabra reservada <em>if else</em> acompañada de la nueva condición a cumplir.
            
          .col-10.col-lg-5.mb-4.mb-md-0
            figure
              img.mx-auto(src='@/assets/curso/tema3/img17.svg' alt='Imagen que acompaña' style='')
                
                
        .row.justify-content-center.align-items-center.pt-4
          .col-11.col-lg-5.mb-4.mb-md-0
            p.mb-0 
              b Condicional <em>switch</em>, 
              b-none define casos específicos a realizar en el caso de que la variable expuesta como condición sea igual a los valores que se especifican mediante los <em>case</em>.
            
          .col-10.col-lg-5.mb-4.mb-md-0
            figure
              img.mx-auto(src='@/assets/curso/tema3/img18.svg' alt='Imagen que acompaña' style='')
                
                
    .row.justify-content-center.align-items-center.mb-5.gx-0
      .col-10.col-lg-5(style="background-color: #f6f6f6;")
        figure
          img.mx-auto(src='@/assets/curso/tema3/img19.svg' alt='Imagen ambiental' style='width:500px')
          
      .col-10.col-lg-5.py-lg-1(style="background-color: #1565C0;")
        .p-5
          p.mb-0.text-white 
            b Bucles e iteraciones, 
            b.none útiles para programar tareas que se convierten en repetitivas en donde se involucra gran cantidad de volumen de datos permitiendo su automatización, para realizar un bucle es necesario tener en cuenta los siguiente conceptos: la condición tal como lo vimos en los <em>if</em>, esta se evalúa repetidamente, la iteración es la cantidad de repeticiones que ejecutó la condición, el contador es la variable que guarda en memoria el número en el cual va la repetición, el incremento es el número que se adiciona una vez se termine un ciclo y bucle infinito cuando no se realiza el incremento al contador, esto es necesario evitarlo.
        

    TabsA.color-acento-contenido.mb-5
      .tarjeta.tarjeta--azul.p-4(titulo="Bucle <em>while</em>")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h4.mb-4 Bucle <em>while</em> 
            ul.lista-ul.mb-0
              li 
                i.fas.fa-layer-group(style="color: #039BE5;")
                p.mb-0 Antes de entrar en el bucle <em>while</em>, se inicializa la variable i.
                  
              li 
                i.fas.fa-layer-group(style="color: #039BE5;")
                p.mb-0 Antes de realizar la primera iteración del bucle, se comprueba la condición.
                  
              li 
                i.fas.fa-layer-group(style="color: #039BE5;")
                p.mb-0 Si la condición es verdadera, se hace lo que está dentro del bucle.
                  
              li 
                i.fas.fa-layer-group(style="color: #039BE5;")
                p.mb-0 Se muestra por pantalla el valor de i y luego incrementamos el valor actual de i en 1.
                  
              li 
                i.fas.fa-layer-group(style="color: #039BE5;")
                p.mb-0 Se vuelve al inicio del bucle para hacer una nueva iteración. Se comprueba de nuevo la condición del bucle.
                  
              li 
                i.fas.fa-layer-group(style="color: #039BE5;")
                p.mb-0 Cuando la condición sea falsa, se sale del bucle y continúa el programa.
                  
          .col-11.col-lg-5
            figure
              img.mx-auto(src='@/assets/curso/tema3/img20.svg' alt='Imagen ambiental' style='width:315px')
                
      .tarjeta.tarjeta--azul.p-4(titulo="Bucle <em>for</em>")
        .row.justify-content-center.align-items-center
          .col-11.col-lg-5
            h4 Bucle <em>for</em>
            figure.mb-4
              img.mx-auto(src='@/assets/curso/tema3/img21.svg' alt='Imagen ambiental' style='width:315px')
              
            h4 Incremento múltiple
            figure.mb-0
              img.mx-auto(src='@/assets/curso/tema3/img22.svg' alt='Imagen ambiental' style='width:315px')
          .col-8.col-lg-6.mb-4.mb-lg-0
            figure
              img.mx-auto(src='@/assets/curso/tema3/img23.svg' alt='Imagen ambiental' style='width:423px')
            
                
      .tarjeta.tarjeta--azul.p-4(titulo="Bucle en arreglos")
        .row.justify-content-center
          .col-11.col-lg-5.mb-4.mb-lg-0
            h4 Bucle en arreglos 
            figure
              img.mx-auto(src='@/assets/curso/tema3/img22-b.svg' alt='Imagen ambiental' style='width:315px')
          .col-8.col-lg-6.mb-4.mb-lg-0
            figure
              img.mx-auto(src='@/assets/curso/tema3/img24.svg' alt='Imagen ambiental' style='width:392px')
            
                



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    modal1: false,
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
