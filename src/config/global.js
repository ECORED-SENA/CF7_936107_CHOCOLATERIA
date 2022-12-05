export default {
  global: {
    componenteFormativo: 'Monitoreo y evaluación de la etapa de producción',
    descripcionCurso:
      'En el presente componente formativo se explicarán los parámetros técnicos de los procesos de producción en los productos no conformes de la obtención de cobertura base, todo esto según los requerimientos técnicos y normatividad vigente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.svg'),
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
        titulo:
          'Manejo de equipos para medición de presión, peso, volumen y temperatura',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Métodos de medición de variables',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Producto no conforme',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Contingencia y procedimiento',
        desarrolloContenidos: true,
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
      tema: 'Producto no conforme',
      referencia:
        'NTC 1252:2021. Cacao en grano. Especificaciones y requisitos de calidad.',
      tipo: 'Norma Técnica ',
      link:
        'https://tienda.icontec.org/gp-cacao-en-grano-especificaciones-y-requisitos-de-calidad-ntc1252-2021.html',
    },
    {
      tema: 'Contingencia y procedimiento',
      referencia:
        'Resolución 2674 de 2013. Requisitos sanitarios. Ministerio de Salud y Protección Social',
      tipo: 'Resolución',
      link:
        'https://www.foman.com.co/legislacion-alimentos-colombia/resolucion-2674-de-2013/',
    },
  ],
  glosario: [
    {
      termino: 'Barómetro',
      significado:
        'Instrumento que sirve para determinar la presión atmosférica.',
    },
    {
      termino: 'Evaluación',
      significado: 'Estimar, apreciar, calcular el valor de algo.',
    },
    {
      termino: 'Monitoreo',
      significado:
        'Observar mediante aparatos especiales el curso de uno o varios parámetros fisiológicos o de otra naturaleza para detectar posibles anomalías.',
    },
    {
      termino: 'Normativa',
      significado:
        'Conjunto de normas aplicables a una determinada materia o actividad.',
    },
    {
      termino: 'Protocolo',
      significado: 'Secuencia detallada de un proceso.',
    },
    {
      termino: 'Proceso',
      significado:
        'Conjunto de las fases sucesivas de un fenómeno natural o de una operación artificial.',
    },
    {
      termino: 'Textura',
      significado: 'Estructura, disposición de las partes de un cuerpo.',
    },
    {
      termino: 'Termómetro',
      significado: 'Instrumento que sirve para medir la temperatura.',
    },
    {
      termino: 'Viscosidad',
      significado:
        'Propiedad de los fluidos que caracteriza su resistencia a fluir, debida al rozamiento entre sus moléculas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguilar, H. (2016). Manual para la Evaluación de la Calidad del Grano de Cacao. Lima, Cortes: FHIA. 22p.',
      link:
        'http://www.fhia.org.hn/descargas/Proyecto_de_Cacao_SECO/Manual_para_la_Evaluacion_de_la_Calidad_del_Grano_de_Cacao.pdf',
    },
    {
      referencia:
        'Cajo Piche, M. (2021). Control de Calidad en Chocolate. Editorial Barreto SAC, Lima.',
      link:
        'https://repositorio.unamad.edu.pe/bitstream/handle/20.500.14070/705/Control%20de%20calidad%20en%20chocolates_Mar%C3%ADa%20Cajo.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. Resolución 1511 de 2011. por la cual se establece el reglamento técnico sobre los requisitos sanitarios que debe cumplir el chocolate y productos de chocolate para consumo humano, que se procese, envase, almacene, transporte, comercialice, expenda, importe o exporte en el territorio nacional.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Resolucion-1511-de-2011.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. Resolución 2674 de 2013. Por la cual se reglamenta el artículo 126 del Decreto Ley 019 de 2012 y se dictan otras disposiciones.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-2674-de-2013.pdf',
    },
    {
      referencia:
        'NTC 1252:2021. Cacao en grano. Especificaciones y requisitos de calidad.',
      link:
        'https://tienda.icontec.org/gp-cacao-en-grano-especificaciones-y-requisitos-de-calidad-ntc1252-2021.html',
    },
    {
      referencia:
        'NTC 486: 2008. Masa o pasta o licor de cacao y torta de cacao para la fabricación de productos de cacao y chocolate.',
      link: 'https://docplayer.es/61306678-Norma-tecnica-colombiana-486.html',
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
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Abel Gordillo Peña',
        cargo: 'Experto Temático',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Leydy Jhuliana Jaramillo Mejía',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor Metodológico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
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
        nombre: 'Carlos Julian Ramirez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Juan Daniel Polanco Muñoz',
        cargo: 'Validación de diseño',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Marcia Elizabeth Solano Alvarez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Caceres Arenales',
        cargo: 'Validación ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
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
