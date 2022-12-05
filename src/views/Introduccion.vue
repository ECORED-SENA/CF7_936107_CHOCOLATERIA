<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1(data-aos="fade-right") Introducción

    .row
      .col-lg-12
        figure
          img.img-t.m_left(src='@/assets/curso/introduccion/img01.svg')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p Las buenas prácticas de manufactura permiten garantizar las condiciones sanitarias en la preparación, manipulación, envasado, almacenamiento, transporte y distribución de los alimentos, para garantizar la inocuidad del producto terminado, ofreciéndole a los consumidores productos de excelente calidad. Al igual que llevar el registro, control, verificación y mejora de los procesos, permitiendo la trazabilidad y gestión de la calidad, competitividad y productividad.
        p En la producción del chocolate, la cobertura es el chocolate que utilizan los chocolateros y los pasteleros como materia prima o se utiliza para cubrir frutas u otros alimentos congelados; puede ser negro o en leche, normalmente tiene agregado manteca de cacao a su fórmula en función del uso. De esta manera, se puede seguir profundizando en la producción del chocolate a partir de los temas que serán abordados en el componente formativo; para conocer más de estos observe el siguiente video: 
      .col-lg-5(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/introduccion/img02.png')

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    .row.justify-content-end
      .col-lg-12
        figure
          img.img-t.m_left1(src='@/assets/curso/introduccion/img03.svg')
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
