<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-center.align-items-center.mb-4.m_left11   
      .col-lg-10
        .bg_15
          .row.justify-content-center.align-items-center.mb-4      
            .col-lg-2.mb-4.mb-lg-0
              figure.p_left
                img.img-t.m-auto(src='@/assets/curso/tema3/img01.svg')
            .col-lg-10        
              p.m-0 Para el manejo de los equipos de medición, se requiere conocer elementos que están orientados desde la presión, los instrumentos y el volumen; para ello, observe la síntesis que se proporciona desde el estudio del componente formativo donde se profundiza en estos aspectos:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
