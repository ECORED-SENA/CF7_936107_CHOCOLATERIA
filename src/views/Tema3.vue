<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1(data-aos="fade-right") Producto no conforme

    .row
      .col-lg-12
        figure
          img.img-t.m_left(src='@/assets/curso/introduccion/img01.svg')

    p.m_top5 Se conoce como producto no conforme aquel que no cumple con algún requisito definido en los sistemas de gestión de calidad propios de cada empresa o proceso productivo, recordemos que dichos sistemas controlan la ejecución de las fases de los procesos de producción; con el fin de que se cumplan con todos los estándares solicitados por normatividad o por los estándares establecidos internamente.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema3/img01.svg')
      .col-lg-11
        .bg_color2.p-4.px-5(data-aos="fade-left")
          p.m-0 En cada proceso se debe establecer en que parte del sistema se pueden presentar fallas que lleven al producto no conforme con el fin de minimizar, eliminar el riesgo o reparar la falla.
      
    p.text-bold Los siguientes son los requisitos que debe de cumplir el producto en toda la cadena productiva para no ser considerado como no conforme:

    .bg_08.p-5.mb-5
      .row.justify-content-end
        .col-lg-12
          figure
            img.img-t.m_left7(src='@/assets/curso/introduccion/img03.svg')
      ImagenInfografica.color-secundario.m_top6(data-aos="fade-down-right")
        template(v-slot:imagen)
          figure
            img.img-t.m-auto(src='@/assets/curso/tema3/img02.png', alt='Texto que describa la imagen')

        .tarjeta.color-acento-botones.p-3(x="44%" y="18.8%" numero="")
          p.m-0 Se observa aspecto y tamaño, se buscan las que han tenido lesiones causadas por hongos o contacto con animales, así un color diferente al habitual.

        .tarjeta.color-acento-botones.p-3(x="58%" y="37%" numero="")
          p.m-0 Se identifican los que presentan un olor fétido y se separan de las que se van a procesar.

        .tarjeta.color-acento-botones.p-3(x="48.4%" y="53.7%" numero="")
          p.m-0 Se determina la humedad de estas, ésta no puede exceder el 7 %.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .row.align-items-center.mb-4(data-aos="fade-right")
          .col-auto 
            img.img-t.m-auto(src='@/assets/curso/tema1/img03.svg')
          .col-8.col-lg-6
            h4.m-0.color-text1 Almendra
        p Se toma una muestra del canal principal de transformación, se analiza el porcentaje de cáscara para determinar con cuánta almendra se cuenta para la transformación, las almendras que se observan con algún deterioro físico se retiran del proceso.

        .row.align-items-center.mb-4(data-aos="fade-right")
          .col-auto 
            img.img-t.m-auto(src='@/assets/curso/tema1/img03.svg')
          .col-8.col-lg-6
            h4.m-0.color-text1 Pasta de cacao
        p Respecto a los análisis microbiológicos, los siguientes son los resultados que el producto debe tener para ser considerado apto para seguir con su proceso de transformación:
      .col-lg-4
        figure(data-aos="fade-left")
          img.img-t.m-auto(src='@/assets/curso/tema3/img03.png', alt='')

    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
        h5 Tabla 2.
        span <em>Análisis microbiológicos y resultados</em>

    .bg_10
      .row.justify-content-center.mb-5(data-aos="fade-down-right")
        .col-lg-7   
          .tabla-a.color-secundario
            table
              thead
                tr.color_02            
                  td.text-bold(colspan="4") Análisis
                  td.text-bold.text-center(colspan="3") Resultado                
              tbody
                tr.color_03
                  td(colspan="4") Recuento de Bacterias aerobias totales
                  td.text-center(colspan="3") <18000/g                
                tr.color_04
                  td(colspan="4") Enterococos
                  td.text-center(colspan="3") <90/g
                tr.color_03
                  td(colspan="4") Estafilococos coagulasa positivos
                  td.text-center(colspan="3") <90/g               
                tr.color_04
                  td(colspan="4") Enterobacterias fermentadoras de lactosa
                  td.text-center(colspan="3") <90/g
                tr.color_03
                  td(colspan="4") E. Coli
                  td.text-center(colspan="3") <0.9/g                
                tr.color_04
                  td(colspan="4") Mohos
                  td.text-center(colspan="3") <90/g
                tr.color_03
                  td(colspan="4") Levaduras
                  td.text-center(colspan="3") <90/g               
                tr.color_04
                  td(colspan="4") Bacilos de salmonella
                  td.text-center(colspan="3") no detectables en 30g

      p.mb-5 En cuanto a los análisis físicos y organolépticos, su cantidad de partículas, la más gruesa debe ser de 45 µm, su valor de pH 5 en promedio su olor, aroma y sabor característico (40g de Sacarosa, 60g Sólido de cacao mezclado homogéneamente).

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema3/img04.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .bg_09.p-5
            .row
              .col-lg-12
                figure
                  img.img-t.m_left8(src='@/assets/curso/tema3/img05.png')
            p.m-0 Los productos no conforme también incluyen el producto final de la cadena de transformación, es decir:  pastillas de chocolate de mesa, chocolatinas, bombones, hojuelas de cobertura etc. Esto también se conoce como defectos.  En general deben cumplir con una apariencia, olor y forma agradable que corresponda a los estándares comerciales, generalmente hacen parte del proceso de elaboración.

        .row.justify-content-end
          .col-lg-12
            figure
              img.img-t.m_left9(src='@/assets/curso/tema3/img05.png')

      .row.align-items-center.mb-4(data-aos="fade-right")
          .col-auto 
            img.img-t.m-auto(src='@/assets/curso/tema1/img03.svg')
          .col-8.col-lg-6
            h4.m-0.color-text1 Normativa
      
    p.mb-5 Respecto a la legislación que se maneja en la actualidad a nivel nacional, los siguientes son las NTC y resoluciones que regulan la calidad del producto final; se presenta cada normativa y cada objetivo que le corresponde: 

    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="NTC 1252: 2021")
            .col-lg-11                           
              p Cacao en grano, especificaciones y requisitos de calidad.
          .row(titulo="NTC 793:2016")
            .col-lg-11                            
              p Chocolate de mesa.               
          .row(titulo="NTC 574:2016")
            .col-lg-11                           
              p Grasas y aceites animales y vegetales comestibles, manteca de cacao.
          .row(titulo="NTC 3619:2012")
            .col-lg-11                           
              p Chocolate de mesa instantáneo.
          .row(titulo="Resolución 1511 de 2011")
            .col-lg-11                           
              p Requisitos sanitarios que deben cumplir el chocolate y productos de chocolate de mesa, cobertura y sucedáneos de chocolate.
          .row(titulo="NTC 486:2008")
            .col-lg-11                           
              p Masa o pasta o licor de cacao y torta de cacao para la fabricación de productos de cacao y chocolate.
          .row(titulo="NTC 792:2008")
            .col-lg-11                           
              p Chocolate y sus sucedáneos para el consumo directo.
          .row(titulo="Resolución 5109 de 2005")
            .col-lg-11                           
              p Por la cual se establece el reglamento técnico sobre los requisitos de rotulado o etiquetado que deben cumplir los alimentos envasados y materias primas de alimentos para consumo humano.
      .col-lg-5(data-aos="fade-right")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema3/img06.png', alt='')

    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto 
        img.img-t.m-auto(src='@/assets/curso/tema1/img03.svg')
      .col-8.col-lg-6
        h4.m-0.color-text1 Tipos y manejo

    p.mb-5 Los productos no conformes del proceso productivo del cacao se asocian al material generado en cada una de las fases, lo ideal es que se pueda reutilizar en el mismo proceso, esto con el fin de disminuir pérdidas; los siguientes son los más conocidos en el cacao: 

    .row.justify-content-center
      .col-lg-10
        PasosA.color-primario(tipo="l")
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
              h4 Cascarilla
              p La manera de consumo recomendada es la de infusión, en agua caliente se le agrega la cascarilla y se deja reposar, se recomienda no cocinarla para evitar la pérdida de sus nutrientes.
            .col-lg-5(data-aos="fade-left")
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema3/img07.png', alt='Texto que describa la imagen')
                
          .row.justify-content-end.align-items-center
            .col-lg-5.mb-4.mb-lg-0.order-last.order-lg-first(data-aos="fade-right")
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema3/img08.png', alt='Texto que describa la imagen')                
            .col-lg-7.text-start.order-first.order-lg-last.mb-4.mb-lg-0(data-aos="fade-left")
              h4 Cenizas de cáscara de cacao
              p Se utiliza para elaborar jabón o como fertilizante en cultivos, incluyendo el del cacao.
              
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
              h4 Recortes de chocolate
              p Se utilizan para realizar chocolates de forma casera, se genera en la fase de moldeado y sus características de calidad son las mismas del producto final.
            .col-lg-5(data-aos="fade-left")
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema3/img09.png', alt='Texto que describa la imagen')



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
