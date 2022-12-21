<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1(data-aos="fade-right") Manejo de equipos para medición de presión, peso, volumen y temperatura

    .row
      .col-lg-12
        figure
          img.img-t.m_left(src='@/assets/curso/introduccion/img01.svg')

    .row.justify-content-center.mb-4.m_top5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Establecer los parámetros de calidad químicas, higiénicas y físicas son determinantes para obtener un producto final con las características deseadas; es así que, en los cacaos de aromas utilizados actualmente para la industria chocolatera, se hace necesario evaluar la calidad del grano. 
        .bg_color01.p-5.py-4
          p En la evaluación de la calidad del grano se utilizan diferentes equipos con el fin de lograr el producto final, que en este caso es el chocolate. <b>En este es importante medir la presión, peso, volumen y temperatura en cada fase.</b> A continuación, se explica cómo se realiza:
      .col-lg-5(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema1/img01.png')

    .row
      .col-lg-12
        figure
          img.img-t.m_left3(src='@/assets/curso/tema1/img08.svg')          

    .bg_01.p-5
      .row.align-items-center.mb-4(data-aos="fade-right")
        .col-auto 
          img.img-t.m-auto(src='@/assets/curso/tema1/img03.svg')
        .col-6.col-lg-3
          h4.m-0.color-text1 Presión

      p.mb-4 Esta medida representa la fuerza que se ejerce de manera vertical sobre una superficie, esta fuerza es continua y la superficie es estática, en el Sistema Internacional se mide por medio de pascales (Pa) que haciendo la conversión equivalen a un newton (N) Cabe resaltar que los cambios de presión que puede presentar una materia hacen que su estado cambie, o sea, pasen de estado gaseoso a líquido, como por ejemplo, los hidrocarburos.
      p.text-bold.mb-5(data-aos="fade-right") Existen varios tipos de presión, los siguientes son las que se asocian en la transformación del cacao:

      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-lg-12
          .row.justify-content-center.mb-4
            .col-lg-3.col-md-6.mb-4.mb-lg-0
              .tarjeta.bg_02.p-4
                figure.mb-4
                  img.img-t.m-auto(src='@/assets/curso/tema1/img04.svg')
                h4 Presión atmosférica: 
                p Fuerza que ejerce el aire sobre una superficie, esta depende de la altura del nivel del mar, cuando es mayor la altura, la presión es menor y cuando es menor la altura, la presión es mayor. 
            .col-lg-3.col-md-6.mb-4.mb-lg-0
              .tarjeta.bg_02.p-4
                figure.mb-4
                  img.img-t.m-auto(src='@/assets/curso/tema1/img05.svg')
                h4 Presión manométrica: 
                p Es la diferencia entre la presión absoluta y la atmosférica. Se aplica cuando la presión absoluta es mayor a la atmosférica, cuando esta presión es negativa se llama presión de vacío. 
            .col-lg-3.col-md-6.mb-4.mb-lg-0
              .tarjeta.bg_02.p-4
                figure.mb-4
                  img.img-t.m-auto(src='@/assets/curso/tema1/img06.svg')
                h4 Presión estática: 
                p Es la que tiene un fluido y es independiente de la velocidad con la que este se mueve.
            .col-lg-3.col-md-6.mb-4.mb-lg-0
              .tarjeta.bg_02.p-4
                figure.mb-4
                  img.img-t.m-auto(src='@/assets/curso/tema1/img07.svg')
                h4 Presión dinámica: 
                p Depende directamente de la velocidad con la que el fluido se mueve y de su propia densidad.

    .row.mb-5
      .col-lg-12
        figure
          img.m_left4(src='@/assets/curso/tema1/img09.svg')

    p.mb-4 Respecto a los instrumentos que miden la presión, se puede encontrar dos, el barómetro que se encarga de la atmosférica y el manómetro que mide la de los fluidos. 

    p.text-bold.mb-5(data-aos="fade-right") Los siguientes son los barómetros y manómetros usados en el proceso de transformación del cacao:

    .row.justify-content-center.mb-5
      .col-lg-12
        .row.justify-content-center.mb-5.m_top
          .col-lg-3.col-md-6.mb-4.mb-lg-0(data-aos="fade-right")
            .tarjeta-avatar
              img.img44.mx-auto(src='@/assets/curso/tema1/img10.png' alt='AvatarTop')
              .tarjeta.color_01
                .p-4.pt-5.pt-lg-4
                  h4.mt-5 Barómetro de mercurio:
                  p Tubo de vidrio de 850 mm de altura, parte superior sellado e inferior abierto. Mide la presión ajustando el mercurio en el tubo hasta que el peso de la columna iguala la fuerza atmosférica ejercida en el objeto. 
  
          .col-lg-3.col-md-6.mb-4.mb-lg-0.img_tarjeta.m_bottom(data-aos="fade-up")
            .tarjeta-avatar
              img.img-t.mx-auto.m_top1(src='@/assets/curso/tema1/img11.png' alt='AvatarTop')
              .tarjeta.color_01
                .p-4.pt-5.pt-lg-4
                  h4.mt-5 Barómetro aneroide: 
                  p Se caracteriza por su precisión, la presión atmosférica deforma la pared en el que se generó un vacío, moviendo así la aguja. 
        
          .col-lg-3.col-md-6.mb-4.mb-lg-0.img_tarjeta3.d-none.d-lg-block(data-aos="fade-left")
            .tarjeta-avatar
              img.img44.mx-auto.m_top4(src='@/assets/curso/tema1/img12.png' alt='AvatarTop')
              .tarjeta.color_01
                .p-4.pt-5.pt-lg-4
                  h4.mt-5 Manómetro de columna de líquido: 
                  p Es el ideal para medir pequeñas diferencias de presión, sus dos variables son: tubo de vidrio (indicaciones de presiones).

          .col-lg-3.col-md-6.mb-4.mb-lg-0.img_tarjeta.d-none.d-lg-block(data-aos="fade-up")
            .tarjeta-avatar
              img.img-t.mx-auto.m_top2(src='@/assets/curso/tema1/img13.png' alt='AvatarTop')
              .tarjeta.color_01
                .p-4.pt-5.pt-lg-4
                  h4.mt-5 Manómetro de Bourdon: 
                  p A medida que aumenta la presión a medir, el tubo tiende a desenrollarse, y a medida que disminuye, el tubo tiende a doblarse más.
    .row.justify-content-center
      .col-lg-12
        .row.justify-content-center
          .col-lg-3.col-md-6.d-lg-none.d-none(data-aos="fade-right")
            .tarjeta-avatar
              img.img44.mx-auto(src='@/assets/curso/tema1/img10.png' alt='AvatarTop')
              .tarjeta.color_01
                .p-4.pt-5.pt-lg-4
                  h4.mt-5 Barómetro de mercurio:
                  p Tubo de vidrio de 850 mm de altura, parte superior sellado e inferior abierto. Mide la presión ajustando el mercurio en el tubo hasta que el peso de la columna iguala la fuerza atmosférica ejercida en el objeto. 
  
          .col-lg-3.col-md-6.mb-4.mb-lg-0.img_tarjeta.d-lg-none.d-none(data-aos="fade-up")
            .tarjeta-avatar
              img.img-t.mx-auto.m_top1(src='@/assets/curso/tema1/img11.png' alt='AvatarTop')
              .tarjeta.color_01
                .p-4.pt-5.pt-lg-4
                  h4.mt-5 Barómetro aneroide: 
                  p Se caracteriza por su precisión, la presión atmosférica deforma la pared en el que se generó un vacío, moviendo así la aguja.

          .col-lg-3.col-md-6.mb-4.mb-lg-0.img_tarjeta3.d-lg-none.d-md-block(data-aos="fade-left")
            .tarjeta-avatar
              img.img44.mx-auto.m_top4(src='@/assets/curso/tema1/img12.png' alt='AvatarTop')
              .tarjeta.color_01
                .p-4.pt-5.pt-lg-4
                  h4.mt-5 Manómetro de columna de líquido: 
                  p Es el ideal para medir pequeñas diferencias de presión, sus dos variables son: tubo de vidrio (indicaciones de presiones).

          .col-lg-3.col-md-6.mb-4.mb-lg-0.img_tarjeta.d-lg-none.d-md-block(data-aos="fade-up")
            .tarjeta-avatar
              img.img-t.mx-auto.m_top2(src='@/assets/curso/tema1/img13.png' alt='AvatarTop')
              .tarjeta.color_01
                .p-4.pt-5.pt-lg-4
                  h4.mt-5 Manómetro de Bourdon: 
                  p A medida que aumenta la presión a medir, el tubo tiende a desenrollarse, y a medida que disminuye, el tubo tiende a doblarse más.

    p La presión y la temperatura están ligadas, esto se puede ver cuando a un gas se le aplica una presión, esta hace que las partículas se unan con una mayor velocidad, y gracias a esto se acumula energía que se hace visible por medio del calor. Gracias a lo anterior se puede afirmar que cuando las sustancias y/o partículas presentan una velocidad mayor a la inicial, su temperatura también aumenta.

    .row
      .col-lg-12
        figure
          img.img-t.m_left3(src='@/assets/curso/tema1/img08.svg')          

    .bg_color1.p-5.mb-5
      .row.align-items-center.mb-4(data-aos="fade-right")
        .col-auto 
          img.img-t.m-auto(src='@/assets/curso/tema1/img03.svg')
        .col-6.col-lg-3
          h4.m-0.color-text1 Temperatura

      p.mb-4 La temperatura provoca diversas manifestaciones que están íntimamente relacionadas con su valor. Al determinar el tamaño de estas manifestaciones con un dispositivo de medición, podemos conocer indirectamente el valor de la temperatura corporal. A continuación, las escalas que se utilizan a nivel mundial respecto a la medición de la temperatura:

      .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
        h5 Tabla 1.
        span <em>Escalas de temperatura</em>   

      .row.justify-content-center.mb-5(data-aos="fade-down-right")
        .col-lg-10    
          .tabla-a.color-secundario
            table
              thead
                tr.color_02            
                  td.text-bold.text-center(colspan="2") Escala
                  td.text-bold.text-center(colspan="3") Cero absoluto
                  td.text-bold.text-center(colspan="3") Fusión del hielo 
                  td.text-bold.text-center(colspan="2") Evaporación
              tbody
                tr.color_03
                  td.text-center(colspan="2") Kelvin
                  td.text-center(colspan="3") 0°K
                  td.text-center(colspan="3") 272.2 °K
                  td.text-center(colspan="2") 373.2°K
                tr.color_04
                  td.text-center(colspan="2") Rankine
                  td.text-center(colspan="3") 0°R
                  td.text-center(colspan="3") 491.7 °R
                  td.text-center(colspan="2") 671.7°R
                tr.color_03
                  td.text-center(colspan="2") Reamur
                  td.text-center(colspan="3") -218.5 °Re
                  td.text-center(colspan="3") 0 °Re
                  td.text-center(colspan="2") 80.0 °Re
                tr.color_04
                  td.text-center(colspan="2") Centígrada
                  td.text-center(colspan="3") -273.2 °C
                  td.text-center(colspan="3") 0 °C
                  td.text-center(colspan="2") 100.0 °C
                tr.color_03
                  td.text-center(colspan="2") Fahrenheit
                  td.text-center(colspan="3") -459.7 °F
                  td.text-center(colspan="3") 32 °F
                  td.text-center(colspan="2") 212.0 °F

      p.text-bold.mb-5 Respecto a los aparatos de medición, los siguientes son los que más se utilizan en el proceso de transformación del cacao:

      .row.align-items-center.mb-4(data-aos="fade-right")
        .col-lg-4.col-md-6.col-12.mb-4.mb-lg-0
          .bg_04.p-4
            .row.justify-content-center.mb-5
              .col-lg-10.mb-4.mb-lg-5
                figure
                  img.img-t.m-auto(src='@/assets/curso/tema1/img14.png', alt='')
              p.text-bold Termómetro de vidrio:
              p El líquido que contiene es mercurio, se expande cuando se calienta y sube por el tubular y marca en la escala el valor de la temperatura.
        .col-lg-4.col-md-6.col-12.mb-4.mb-lg-0
          .bg_04.p-4
            .row.justify-content-center
              .col-lg-10.mb-4.mb-lg-5
                figure
                  img.img-t.m-auto(src='@/assets/curso/tema1/img15.png', alt='')
              p.text-bold Termómetro bimetálico:
              p Determina la temperatura utilizando el coeficiente de dilatación desigual entre dos láminas de diferentes metales, firmemente conectadas, lo que se denomina lámina bimetálica. 
        .col-lg-4.col-md-6.col-12.mb-4.mb-lg-0
          .bg_04.p-4
            .row.justify-content-center.mb-5
              .col-lg-10.mb-4.mb-lg-5
                figure
                  img.img-t.m-auto(src='@/assets/curso/tema1/img16.png', alt='')
              p.text-bold Termómetro de bulbo:
              p Consiste en un bulbo que se conecta por un capilar en forma de espiral, existen tres tipos, el que se funciona por líquidos, vapor, gas y mercurio.  

    .row
      .col-lg-12
        figure
          img.img-t.m_left3(src='@/assets/curso/tema1/img08.svg')               

    .bg_color1.p-5
      .row.align-items-center.mb-4(data-aos="fade-right")
        .col-auto 
          img.img-t.m-auto(src='@/assets/curso/tema1/img03.svg')
        .col-6.col-lg-3
          h4.m-0.color-text1 Peso

      p(data-aos="fade-right") El peso es la unidad de medida que calcula la cantidad de materia que hay en los cuerpos, también se puede entender como la fuerza que ejerce un cuerpo sobre una superficie estándar. Su unidad de medida es el gramo (g) o el kilogramo (kg) y el uso de estas depende del lugar donde se va a medir. Se afirma que esta medida depende directamente de la gravedad; es decir, se toma como referencia la que se ejerce en la tierra, aunque también se tiene en cuenta la centrífuga debido a su rotación.
      p(data-aos="fade-left") Es una de las variables que más se debe de controlar en todo proceso agroindustrial, en cada fase se debe tener en cuenta el peso adecuado de cada materia prima, un mal gramaje puede influenciar en la calidad del producto final, el instrumento que se usa para realizar este proceso es la báscula, esta sirve precisamente para saber cuánto pesa cada producto; las siguientes son las más utilizadas:

      .row.justify-content-center.align-items-center
        .col-lg-7(data-aos="fade-left")
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Básculas de mesa")
              .col-lg-7                             
                p También conocida como báscula portátil, se utilizan encima de mesas o mesones, son las usadas en la industria de pastelería o repostería, o sea, en procesos de pesajes menores, soportan hasta 30 kilogramos. Son instrumentos claves en los procesos de mezclado, contaje y control de peso. 
              .col-lg-4
                img.img-t.m-auto(src='@/assets/curso/tema1/img17.png')
            .row(titulo="Básculas de plataforma")
              .col-lg-7                            
                p Tienen un plato de acero, el cual soporta cargas hasta 600 kilogramos, cuenta con un timón y ruedas en la parte inferior para poder manipularla con facilidad, a pesar de ser de plataforma, por sus dimensiones, la seguridad de los productos está garantizada. Son las ideales para pesar con mayor exactitud elementos pequeños utilizados en los procesos productivos. 
              .col-lg-4
                img.img-t.m-auto(src='@/assets/curso/tema1/img18.png')
            .row(titulo="Básculas de patín")
              .col-lg-7                             
                p Son básculas de alta resistencia, tiene forma de U y soporta hasta 2.500 kilogramos, y a pesar de esto se puede manipular con facilidad, tiene el agregado de medir temperatura y conteo de piezas de forma individual.
              .col-lg-4
                img.img-t.m-auto(src='@/assets/curso/tema1/img19.png')
        .col-lg-5(data-aos="fade-right")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema1/img20.png', alt='')

    .row.mt-5
      .col-lg-12
        figure
          img.img-t.m_left3(src='@/assets/curso/tema1/img08.svg')               

    .bg_color1.p-5
      .row.align-items-center.mb-4(data-aos="fade-right")
        .col-auto 
          img.img-t.m-auto(src='@/assets/curso/tema1/img03.svg')
        .col-6.col-lg-3
          h4.m-0.color-text1 Volumen

      .row.justify-content-center.mb-5.mb-lg-4
        .col-lg-7(data-aos="fade-right")
          p Se entiende como la medida de la extensión tridimensional de un objeto en un espacio determinado, su unidad de medida universal es el metro cúbico, pero en sustancias líquidas se mide por litros o en pequeñas proporciones por centímetros cúbicos; cuando la densidad del material es constante se puede expresar su volumen en peso.
          p Respecto al proceso de transformación del cacao, esta medida se usa en las pruebas de laboratorio de calidad. Para medir el líquido de cacao se utilizan probetas graduadas en cm³; ahora, si se desea medir el volumen de una pieza de chocolate, se debe de sumergir este en probeta con agua, se procede a medir la diferencia en líquido, sabiendo esto se resta al volumen inicial, obteniendo así el volumen de la pieza añadida. 
        .col-lg-5(data-aos="fade-left")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema1/img22.png')

      .bg_05.p-4
        .row
          .col-lg-12
            figure
              img.img-t.m_left5(src='@/assets/curso/tema1/img23.png')
        .row.justify-content-around.align-items-center
          .col-lg-2.mb-3(data-aos="fade-right")
            img.img-t.m-auto(src='@/assets/curso/tema1/img24.svg')
          .col-lg-10(data-aos="fade-left")
            p.m-0 El volumen puede presentarse de diferentes formas dependiendo de la temperatura y el estado de agregación de la materia. Los cuerpos en estado sólido cuentan con dos tipos de volúmenes, el fijo y el determinado; los líquidos y gases no cuentan con volumen fijo, por eso se pueden adaptar a los espacios donde se presentan. Dependiendo de la temperatura, los volúmenes de los tres tipos de sustancias conocidas (líquido, sólido y/o gaseoso) cambian al expandirse o contraerse. 



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
