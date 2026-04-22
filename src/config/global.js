export default {
  global: {
    Name: 'Fundamentos de contabilidad y registro de transacciones',
    Description:
      'Este componente formativo presenta la importancia de la contabilidad en la organización y desarrolla el registro de transacciones mediante soportes contables, ciclo contable, cuenta contable (débitos, créditos y saldos) y el uso de la cuenta T.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Importancia y utilidad de la contabilidad en una organización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Contabilidad en la organización: concepto, utilidad y usuarios de la información',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Soportes contables: finalidad como respaldo del registro',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Soportes externos: tipos frecuentes y su uso',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Soportes internos: notas y comprobantes contables',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Ciclo contable: de la transacción al registro',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Del hecho económico al registro contable: etapas, soportes y control del ciclo contable',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Cuenta contable: naturaleza, débitos, créditos y saldos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto y estructura de la cuenta contable',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Naturaleza de las cuentas y regla general de aumento/disminución',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Saldos: cálculo e interpretación básica',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Cuenta T: estructura y uso para registrar movimientos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Representación gráfica y relación con la partida doble',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Procedimiento de registro en cuenta T',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Determinación de saldos y verificación del equilibrio',
            hash: 't_5_3',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/12310018_CF2_DU.pdf',
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
  glosario: [
    {
      termino: 'Contabilidad',
      significado:
        'sistema que organiza y registra las transacciones económicas de una entidad para proporcionar información financiera útil.',
    },
    {
      termino: 'Soporte contable',
      significado:
        'documento que respalda una transacción económica, garantizando su veracidad y trazabilidad.',
    },
    {
      termino: 'Transacción',
      significado:
        'hecho económico que implica un intercambio de recursos entre dos o más partes.',
    },
    {
      termino: 'Ciclo contable',
      significado:
        'secuencia de pasos que transforma los hechos económicos en información financiera organizada.',
    },
    {
      termino: 'Cuenta contable',
      significado:
        'registro que agrupa movimientos de un mismo rubro para acumular sus aumentos y disminuciones y determinar su saldo.',
    },
    {
      termino: 'Débito',
      significado:
        'registro de un aumento en una cuenta de activo o gasto, o una disminución en una cuenta de pasivo, patrimonio o ingreso.',
    },
    {
      termino: 'Crédito',
      significado:
        'registro de un aumento en una cuenta de pasivo, patrimonio o ingreso, o una disminución en una cuenta de activo o gasto.',
    },
    {
      termino: 'Saldo',
      significado:
        'diferencia neta entre los débitos y créditos de una cuenta contable.',
    },
    {
      termino: 'Cuenta T',
      significado:
        'representación gráfica de una cuenta contable en forma de "T" que divide los débitos (debe) y los créditos (haber).',
    },
  ],
  referencias: [
    {
      referencia:
        'Actualícese. (18 de Marzo de 2022). Costos y gastos: estas son las claves para clasificarlos exitosamente. Obtenido de',
      link:
        'https://actualicese.com/costos-y-gastos-estas-son-las-claves-para-clasificarlos-exitosamente/?srsltid=AfmBOops1knKM8sEGrsB6MM6CvqayYYNNlWQjirb0An3IF1TX7TufjNQ&utm',
    },
    {
      referencia:
        'Actualícese. (18 de 03 de 2016). Comprobantes de contabilidad: ¿sabe cuáles son? Obtenido de',
      link:
        'https://actualicese.com/archivo/comprobantes-de-contabilidad-sabe-cuales-son/',
    },
    {
      referencia:
        'Ariza Herreño, Jessica Paola [y otros once autores]. (2021). CONTADURÍA PÚBLICA PARA JÓVENES. Universidad Santo Tomás, Sede Villavicencio.',
      link: '',
    },
    {
      referencia:
        'Ayala Cárdenas, S. I. (2017). Contabilidad básica general: Un enfoque administrativo y de control interno (versión digital). Corporación Universitaria Republicana.',
      link: '',
    },
    {
      referencia:
        'Colombia, Congreso de la República de. (2009). Ley 1314 Por la cual se regulan los principios y normas de contabilidad e información financiera y de aseguramiento de información aceptados en Colombia, se señalan las autoridades competentes, el procedimiento para su expedición y se determinan las entid. Diario Oficial No. 47.409 del 13 de julio de 2009.: Diario Oficial No. 47.409. Obtenido de',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=36833 ',
    },
    {
      referencia:
        'Colombia, Presidencia de la República de. (29 de diciembre de 1993). Decreto 2649 . Obtenido de',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=9863&utm ',
    },
    {
      referencia:
        'DIAN. (s.f.). Del documento equivalente electrónico tiquete de máquina registradora con sistema P.O.S. Obtenido de',
      link:
        'https://www.dian.gov.co/impuestos/factura-electronica/Documents/Abece-POS-Electronico-documento-equivalente.pdf ',
    },
    {
      referencia: 'DIAN. (s.f.). ¿Qué es la Factura Electrónica? Obtenido de',
      link:
        'https://micrositios.dian.gov.co/sistema-de-facturacion-electronica/factura-electronica/ ',
    },
    {
      referencia: 'Gerencie.com. (20 de 08 de 2022). Obtenido de',
      link: 'https://www.gerencie.com/metodo-de-la-partida-doble.html?utm ',
    },
    {
      referencia: 'Mincomercio. (2022). Comprobantes de egreso. ',
      link: '',
    },
    {
      referencia:
        'Ministerio de desarrollo económico. (1993). Decreto 2650 de 1993: Plan Único de Cuentas para comerciantes. ',
      link: '',
    },
    {
      referencia:
        'Pamplona, Universidad de. ((s.f)). Contabilidad I: fundamentos, cuenta T y registros (material académico).',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1971). Decreto 410.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2015). Decreto 2420 de 2015: Por medio del cual se expide el Decreto Único Reglamentario de las Normas de Contabilidad, de Información Financiera y de Aseguramiento de la Información y se dictan otras disposiciones. Diario Oficial No. 49.726 del 14 de diciembre de 2015. Obtenido de',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76745 ',
    },
    {
      referencia:
        'Rivera Cortes, Y., & Valbuena Torres, G. &. (2024). Contabilidad: sistema contable - Sistema de contabilidad financiera. Universidad de la Amazonia.',
      link: '',
    },
    {
      referencia:
        'Rojas, S. P. (2018). Contabilidad. AREANDINA. Fundación Universitaria del Área Andina. Obtenido de',
      link:
        'https://digitk.areandina.edu.co/entities/publication/518058f5-b9e1-445f-9c5a-05be71e9ec11 ',
    },
    {
      referencia:
        'Rojas, S. P. (2020). Contabilidad. Bogotá: Fundación Universitaria del Área Andina.',
      link: '',
    },
    {
      referencia:
        'Sánchez, H. M. (2015). Documento de Orientación Técnica 002. Orientaciones técnicas sobre la aplicación de las NIIF completas. Bogotá.',
      link: '',
    },
    {
      referencia:
        'Serrano, S. I. (2015). Contabilidad Básica General. Un enfoque administrativo y de control interno. Bogotá, D. C., Colombia: Corporación Universitaria Republicana.',
      link: '',
    },
    {
      referencia:
        'UNIR. (2021, 21 de julio). Ciclo contable: qué es y cuáles son sus etapas. UNIR - La Universidad en Internet.',
      link: 'https://www.unir.net/revista/empresa/ciclo-contable/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Germán Adolfo Rodríguez Pulido',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Risaralda',
        },
        {
          nombre: 'Paola Andrea Tello Zambrano',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Jose Calderon Gutierrez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
