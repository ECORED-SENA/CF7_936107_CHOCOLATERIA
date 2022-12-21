<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1(data-aos="fade-right") Métodos de medición de variables

    .row
      .col-lg-12
        figure
          img.img-t.m_left(src='@/assets/curso/introduccion/img01.svg')

    .row.justify-content-center.m_top5
      .col-lg-7(data-aos="fade-right")
        p.mb-5 La medición de variables en el proceso de transformación del cacao es muy importantes, ya que esto permitirá garantizar al consumidor un producto de calidad; en la actualidad existen técnicas que permiten su medición, en este caso la viscosidad y textura de las piezas de chocolate, las dos variables son analizadas de forma organoléptica, la primera por medio del sabor que el catador descubre una vez la prueba y la segunda por medio del tacto al manipular la pieza y encontrar que es lo deseado.

        .row.align-items-center.mb-4(data-aos="fade-right")
          .col-auto 
            img.img-t.m-auto(src='@/assets/curso/tema1/img03.svg')
          .col-8.col-lg-6
            h4.m-0.color-text1 Manejo e Interpretación
            
        p De la viscosidad y textura nacen diferentes variables que son importantes saberlas manejar e interpretar, buscando siempre estandarizar los procesos y así generar un producto acorde a las necesidades del consumidor. Para su interpretación se debe tener en cuenta: 
      .col-lg-5(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema2/img01.png')

    .bg_06.p-2.p-lg-4.mb-5
      .row.justify-content-end
        .col-lg-12
          figure
            img.img-t.m_left6(src='@/assets/curso/introduccion/img03.svg')
      .bg_07.p-4
        SlyderA(tipo="b")(data-aos="fade-right")
          .row.justify-content-around
            .col-11.col-lg-5.mb-4.mb-lg-0.align-self-center
              div 
                h4 Contenido Graso
                p El contenido en los chocolates es de 30% de grasa en promedio, aunque en la industria heladera, la cobertura debe tener un contenido graso más alto para permitir un buen proceso de producción. Para reducir la viscosidad y permitir que el chocolate fluya más fácilmente, se diluye manteca de cacao y/o grasa de leche (cuando se aplique) en el líquido de forma constante. 
            .col-11.col-lg-5.mt-0.mt-md-4
              figure
                img.img-t.m-auto(src='@/assets/curso/tema2/img02.png', alt='Texto que describa la imagen')
          .row.justify-content-around
            .col-11.col-lg-5.mb-4.mb-lg-0.align-self-center
              div
                h4 Lecitina
                p Se le agrega 0.2% en promedio con el fin de ayudar a reducir la viscosidad, si se agrega además, produce un espesamiento en el producto final. Este emulgente ayuda a separar las partículas de agua en la grasa. Cabe resaltar que en el chocolate el porcentaje de agua es muy bajo, sin embargo, este producto actúa en el azúcar atrayendo el agua y a la vez repeliendo la grasa. 
            .col-11.col-lg-5.mt-0.mt-md-4
              figure
                img.img-t.m-auto(src='@/assets/curso/tema2/img03.png', alt='Texto que describa la imagen')
          .row.justify-content-around
            .col-11.col-lg-5.mb-4.mb-lg-0.align-self-center
              div
                h4 Humedad
                p Al agregarle agua al chocolate, la viscosidad aumenta; cuando se forman capas sobre las partículas de azúcar se ve este comportamiento, aunque las piezas que contienen lípidos tensoactivos son más tolerantes a niveles altos de humedad. 
            .col-11.col-lg-5.mt-0.mt-md-4
              figure
                img.img-t.m-auto(src='@/assets/curso/tema2/img04.png', alt='Texto que describa la imagen')
          .row.justify-content-around
            .col-11.col-lg-5.mb-4.mb-lg-0.align-self-center
              div
                h4 Tamaño de Partículas
                p Cada partícula del chocolate está recubierta por una capa de grasa que ayuda a su lubricación, su distribución en cuanto a tamaño es un indicador de calidad del producto, si las partículas son pequeñas, su superficie debe ser grande y por ende se necesita mayor contenido de grasa; pero, si las partículas son grandes, su superficie es pequeña y por ende necesita menos grasa. Un chocolate es de mala calidad o calidad de combate cuando más del 15% de las partículas son mayores a 15 µm.
            .col-11.col-lg-5.mt-0.mt-md-4
              figure
                img.img-t.m-auto(src='@/assets/curso/tema2/img10.png', alt='Texto que describa la imagen')
          .row.justify-content-around
            .col-11.col-lg-5.mb-4.mb-lg-0.align-self-center
              div
                h4 Temperatura
                p Cuando las piezas de chocolate son expuestas a altas temperaturas, su estado de espesamiento aumenta, aunque este puede reducir si contienen lecitina, en especial en el chocolate oscuro. Las piezas que contienen fosfolípidos, cuando se exponen a temperaturas de 20°C, no presentan espesamiento.
            .col-11.col-lg-5.mt-0.mt-md-4
              figure
                img.img-t.m-auto(src='@/assets/curso/tema2/img05.png', alt='Texto que describa la imagen')
          .row.justify-content-around
            .col-11.col-lg-5.mb-4.mb-lg-0.align-self-center
              div
                h4 Tiempo de Conchado
                p Al comienzo, no todas las partículas están cubiertas de grasa y, por lo general, solo se ha agregado una pequeña cantidad de lecitina. El contenido de humedad también es ligeramente mayor que al final de la fase. Como resultado, la viscosidad aparente de la masa de chocolate crudo es muy alta y, a menudo, difícil de medir.
            .col-11.col-lg-5.mt-0.mt-md-4
              figure
                img.img-t.m-auto(src='@/assets/curso/tema2/img06.png', alt='Texto que describa la imagen')
          .row.justify-content-around
            .col-11.col-lg-5.mb-4.mb-lg-0.align-self-center
              div
                h4 Atemperado
                p Esta operación consiste en inducir la precristalización parcial de la manteca del cacao. Por lo tanto, durante el atemperado, la cantidad de partículas sólidas aumenta ligeramente y con ella, también su viscosidad. Por otra parte, es en este estado en el que se utiliza el chocolate para el moldeo.
            .col-11.col-lg-5.mt-0.mt-md-4
              figure
                img.img-t.m-auto(src='@/assets/curso/tema2/img07.png', alt='Texto que describa la imagen')
          .row.justify-content-around
            .col-11.col-lg-5.mb-4.mb-lg-0.align-self-center
              div
                h4 Tixotropía
                p Al agitar el chocolate después de mucho tiempo de reposo, la resistencia a la fuerza de deformación es inicialmente muy alta, disminuye y tiende a un valor estable después de 10 minutos. Por el contrario, cuando el chocolate se agita constantemente y luego se agita a menor velocidad, la resistencia aumenta y tiende al mismo valor obtenido en la curva ascendente.
            .col-11.col-lg-5.mt-0.mt-md-4
              figure
                img.img-t.m-auto(src='@/assets/curso/tema2/img08.png', alt='Texto que describa la imagen')

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
