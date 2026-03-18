<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Cuenta contable: naturaleza, débitos, créditos y saldos
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img36.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La cuenta contable es la unidad básica para registrar y organizar la información financiera, representando elementos del negocio bajo el método de partida doble. Su movimiento se interpreta según su naturaleza y reglas de débito y crédito, permitiendo calcular saldos y analizar efectos acumulados con coherencia normativa. 
    
    p.mb-5 En este punto se profundizará en su concepto, estructura, naturaleza, regla general y saldos, desde su cálculo hasta su interpretación. 

    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Concepto y estructura de la cuenta contable

    .color___box_1
      .px-5

        p.mb-5 La cuenta contable es un registro que agrupa movimientos de un mismo rubro para acumular sus aumentos y disminuciones y determinar su saldo. Se identifica por nombre y código, y se clasifica como activo, pasivo, patrimonio, ingreso, costo o gasto. (Pamplona, Universidad de, (s.f)). La estructura de la cuenta contable se presenta en la siguiente tabla: 

        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 3.
              span Elementos de una cuenta contable y su propósito
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Elemento
                    th.ajuste-border-tabla.texto-left Qué describe
                    th.texto-left Ejemplo
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Nombre o denominación
                    td.ajuste-border-tabla.texto-left Identifica el rubro que se registra
                    td.texto-left Caja; Clientes; Ventas
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Código (si aplica)
                    td.ajuste-border-tabla.texto-left Ubica la cuenta en un catálogo o plan de cuentas
                    td.texto-left 1105; 1305; 4135 (según plan)
                  tr
                    td.ajuste-border-tabla.texto-left Naturaleza
                    td.ajuste-border-tabla.texto-left Define el comportamiento general frente a débito/crédito
                    td.texto-left Activo: naturaleza débito
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Movimientos
                    td.ajuste-border-tabla.texto-left Registra aumentos y disminuciones por transacciones
                    td.texto-left Ingreso en caja; pago a proveedor
                  tr
                    td.ajuste-border-tabla.texto-left Saldo
                    td.ajuste-border-tabla.texto-left Resultado neto entre débitos y créditos
                    td.texto-left Saldo deudor en caja
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Soporte
                    td.ajuste-border-tabla.texto-left Documento que respalda el registro
                    td.texto-left Factura; recibo; comprobante

        .row.justify-content-center.mb-0
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 1.
              span Estructura básica de una cuenta contable
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img37.svg', alt='El esquema muestra la estructura básica de una cuenta contable, identificada por código y nombre, dividida en debe y haber para registrar movimientos débito y crédito. Finalmente, el saldo resulta del lado con mayor acumulación.').m-auto

    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Naturaleza de las cuentas y regla general de aumento/disminución

    .row.align-items-center.mb-5
      .col-xl
        .box___style_5.fit___box_5-1(data-aos="zoom-in")
          p La naturaleza de una cuenta indica en qué lado (debe o haber) se registran normalmente sus aumentos.
          p Aclaración importante:
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Débito ≠ bueno.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Crédito ≠ malo.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Son posiciones técnicas.
          p.mb-0 Para entender la dinámica, en el siguiente esquema se presenta la naturaleza de las cuentas “débito” y las “crédito”:
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img38.jpg', alt='').m-auto
    
    .row.justify-content-center.mb-5
      .col-xl-7
        h4.mb-5.text-center Naturaleza de las cuentas “débito” y “crédito”

        .row.justify-content-center.mb-5
          .col-xl-6.col-md-9(data-aos="zoom-in")
            .box___style_6.h-100
              .row.justify-content-center.mb-3
                .col-12
                  .box___style_7.mb-3
                    figure(data-aos="fade-right")
                      img(src='@/assets/curso/temas/img39.svg', alt="" style="max-width: 110px").m-auto
                    h5.text-center Naturaleza “débito”: aumenta en “debe” - disminuye en “haber”
                p.mb-0 #[b Activos]
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Costos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Gastos.
          .col-xl-6.col-md-9(data-aos="zoom-in").espacio___movil_4
            .box___style_6.h-100
              .row.justify-content-center.mb-3
                .col-12
                  .box___style_7.mb-3
                    figure(data-aos="fade-right")
                      img(src='@/assets/curso/temas/img39.svg', alt="" style="max-width: 110px").m-auto
                    h5.text-center Naturaleza “crédito”: aumenta en “haber” - disminuye en “debe”
                p.mb-0 #[b Pasivos]
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Patrimonio.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Ingresos.

    .color___box_1
      .px-5

        p.mb-5 Las cuentas débito aumentan en el “debe” y las crédito en el “haber”; no obstante, las cuentas correctoras pueden tener naturaleza contraria, por lo que debe revisarse su dinámica antes de registrar. Las reglas, según el tipo de cuenta son:

        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 4.
              span Regla general de movimiento (aumento/disminución) según tipo de cuenta
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Tipo de cuenta
                    th.ajuste-border-tabla.texto-left Naturaleza
                    th.ajuste-border-tabla.texto-left Aumenta por
                    th.texto-left Disminuye por
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Activo
                    td.ajuste-border-tabla.texto-left Débito
                    td.ajuste-border-tabla.texto-left Débito
                    td.texto-left Crédito
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Pasivo
                    td.ajuste-border-tabla.texto-left Crédito
                    td.ajuste-border-tabla.texto-left Crédito
                    td.texto-left Débito
                  tr
                    td.ajuste-border-tabla.texto-left Patrimonio
                    td.ajuste-border-tabla.texto-left Crédito
                    td.ajuste-border-tabla.texto-left Crédito
                    td.texto-left Débito
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Ingresos
                    td.ajuste-border-tabla.texto-left Crédito
                    td.ajuste-border-tabla.texto-left Crédito
                    td.texto-left Débito
                  tr
                    td.ajuste-border-tabla.texto-left Costos
                    td.ajuste-border-tabla.texto-left Débito
                    td.ajuste-border-tabla.texto-left Débito
                    td.texto-left Crédito
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Gastos
                    td.ajuste-border-tabla.texto-left Débito
                    td.ajuste-border-tabla.texto-left Débito
                    td.texto-left Crédito

        p.mb-5 Para conocer las reglas de “débito” y “crédito” por naturaleza de la cuenta, e identificar claramente en qué lado se registran los aumentos y en qué las disminuciones, se presentan en la siguiente tabla:

        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 5.
              span Regla de débito y crédito por naturaleza de la cuenta
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Categoría
                    th.ajuste-border-tabla.texto-left Aumenta con
                    th.ajuste-border-tabla.texto-left Disminuye con
                    th.texto-left Saldo usual
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Activo
                    td.ajuste-border-tabla.texto-left Débito
                    td.ajuste-border-tabla.texto-left Crédito
                    td.texto-left Débito
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Pasivo
                    td.ajuste-border-tabla.texto-left Crédito
                    td.ajuste-border-tabla.texto-left Débito
                    td.texto-left Crédito
                  tr
                    td.ajuste-border-tabla.texto-left Patrimonio
                    td.ajuste-border-tabla.texto-left Crédito
                    td.ajuste-border-tabla.texto-left Débito
                    td.texto-left Crédito
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Ingresos
                    td.ajuste-border-tabla.texto-left Crédito
                    td.ajuste-border-tabla.texto-left Débito
                    td.texto-left Crédito
                  tr
                    td.ajuste-border-tabla.texto-left Gastos
                    td.ajuste-border-tabla.texto-left Débito
                    td.ajuste-border-tabla.texto-left Crédito
                    td.texto-left Débito
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Costos
                    td.ajuste-border-tabla.texto-left Débito
                    td.ajuste-border-tabla.texto-left Crédito
                    td.texto-left Débito

    p.mb-5 Para facilitar la comprensión de la naturaleza de las cuentas y la aplicación de la regla general de aumento y disminución, se presenta el siguiente esquema:

    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 2.
          span Naturaleza de las cuentas y regla general de movimiento
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img40.svg', alt='El gráfico resume la naturaleza de las cuentas y la regla general de registro, facilitando la decisión sobre en qué lado (debe o haber) debe anotarse un movimiento. Presenta las categorías contables según su comportamiento habitual, junto con ejemplos prácticos que orientan la aplicación correcta del registro y evitan errores frecuentes en la partida doble.').m-auto
    
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Activo, pasivo y patrimonio
    
    p.mb-5 En el marco de la ecuación contable, es fundamental distinguir los elementos que conforman la situación financiera de una entidad. Seguidamente, se explican el activo, el pasivo y el patrimonio, junto con su comportamiento en el registro contable.

    .row.align-items-center.mb-5
      .col-xl-auto
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src="@/assets/curso/temas/img2.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in")
          .row(titulo="Activo").ajuste-cajaAcordion
            .col-xl-7.mb-4
              p.mb-0 El activo representa recursos controlados por la entidad que generarán beneficios futuros, como caja, inventarios o cuentas por cobrar. Generalmente tiene naturaleza débito: aumenta en el debe y disminuye en el haber.
            .col-xl-5.mb-3
              figure
                img(src='@/assets/curso/temas/img41.jpg', alt='').m-auto 
          .row(titulo="Pasivo").ajuste-cajaAcordion
            .col-xl-7.mb-4
              p.mb-0 El pasivo representa obligaciones presentes que implican salida futura de recursos, como proveedores o impuestos por pagar. Generalmente tiene naturaleza crédito: aumenta en el haber y disminuye en el debe.
            .col-xl-5.mb-3
              figure
                img(src='@/assets/curso/temas/img42.jpg', alt='').m-auto 
          .row(titulo="Patrimonio").ajuste-cajaAcordion
            .col-xl-7.mb-4
              p.mb-0 El patrimonio es el valor residual del activo después de restar los pasivos y representa la participación de los propietarios. Generalmente tiene naturaleza crédito: aumenta en el haber y disminuye en el debe.
            .col-xl-5.mb-3
              figure
                img(src='@/assets/curso/temas/img43.jpg', alt='').m-auto 

    p.mb-5 Seguidamente, se expone un esquema que permite comprender la ecuación contable y la dinámica del activo, pasivo y patrimonio.

    .row.justify-content-center.mb-5
      .col-xl-5
        .box___style_8.mb-3(data-aos="zoom-in")
          h4.mb-0.text-center ACTIVO, PASIVO Y PATRIMONIO
        p.mb-0.text-center ECUACIÓN CONTABLE: ACTIVO = PASIVO + PATRIMONIO
    
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Activo")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img44.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Activo
            p #[b Qué representa]: recursos controlados por la organización.
            p #[b Ejemplo]: caja - bancos - inventarios - cuentas por cobrar - equipos.
            p #[b Naturaleza Usual]: débito: aumenta en el debe y disminuye en el haber.
            p #[b Regla General]: aumenta en el debe y disminuye en el haber.
            p #[b Ejemplo]:
            p Ventas de contado caja
            p.color___arrowcircle (Activo) Aumenta <i class="fas fa-arrow-alt-circle-right"></i> Debe
            p.color___arrowcircle (Ingresos) Aumenta <i class="fas fa-arrow-alt-circle-right"></i> Haber

      .py-3.py-md-4(titulo="Patrimonio")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img45.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Patrimonio
            p #[b Qué representa]: participación residual de los propietarios.
            p #[b Ejemplo]: aportes, reservas, resultados acumulados.
            p #[b Naturaleza Usual]: crédito aumenta en el debe y disminuye en el haber.
            p #[b Regla General]: aumenta en el haber y disminuye en el debe.
            p #[b Ejemplo]:
            p Ventas de contado caja
            p.color___arrowcircle (Activo) Aumenta <i class="fas fa-arrow-alt-circle-right"></i> Debe capital
            p.color___arrowcircle (Patrimonio) Aumenta <i class="fas fa-arrow-alt-circle-right"></i> Haber
      
      .py-3.py-md-4(titulo="Pasivo")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img46.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Pasivo
            p #[b Qué representa]: obligaciones presentes con terceros.
            p #[b Ejemplo]: proveedores, préstamos, impuestos por pagar, nómina por pagar.
            p #[b Naturaleza Usual]: crédito aumenta en el debe y disminuye en el haber.
            p #[b Regla General]: aumenta en el debe y disminuye en el haber.
            p #[b Ejemplo]:
            p Compra a crédito inventarios
            p.color___arrowcircle (Activo) Aumenta <i class="fas fa-arrow-alt-circle-right"></i> Debe proveedores
            p.color___arrowcircle (Pasivo) Aumenta  <i class="fas fa-arrow-alt-circle-right"></i> Haber

    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Ingresos, costos y gastos

    .box___style_1.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img47.png', alt='').m-auto
        .col-xl
          p.mb-0 Los ingresos, costos y gastos permiten explicar el resultado del periodo y evaluar la sostenibilidad de la operación. Los ingresos representan beneficios económicos generados por la actividad empresarial y aumentan el patrimonio, distintos de los aportes de los propietarios. 
    
    p.mb-5 En el siguiente apartado se ampliará la explicación de los ingresos, costos y gastos, precisando su definición, clasificación y tratamiento contable para interpretar adecuadamente el resultado del periodo.

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ingresos
                p.mb-0 Los ingresos son incrementos de beneficios económicos que aumentan el patrimonio, distintos de aportes de propietarios. Generalmente tienen naturaleza crédito, pues aumentan en el haber.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img48.png', alt='' style="max-width: 500px").m-auto
              
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Gastos
                p.mb-0 El gasto es el consumo de recursos destinado a apoyar la administración, ventas y operación general del negocio. No se incorpora directamente al producto o servicio vendido, pero es necesario para el funcionamiento de la empresa.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img49.png', alt='' style="max-width: 500px").m-auto
              
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Costos
                p.mb-0 El costo es el valor de los recursos utilizados directamente para producir o vender un bien o servicio, como materia prima, mano de obra y otros costos necesarios.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img50.png', alt='' style="max-width: 500px").m-auto
    
    p.mb-5 Con el fin de diferenciar adecuadamente ingresos, costos y gastos y comprender su efecto en el resultado del periodo, se presenta la siguiente tabla, que organiza sus características, ejemplos y regla general de movimiento.

    .row.justify-content-center.mb-0
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 6.
          span Comparación rápida entre ingresos, costos y gastos (para registrar e interpretar)
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Categoría
                th.ajuste-border-tabla.texto-left Qué representa
                th.ajuste-border-tabla.texto-left Ejemplos típicos
                th.ajuste-border-tabla.texto-left Naturaleza (regla general)
                th.texto-left Dónde se observa
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Ingresos
                td.ajuste-border-tabla.texto-left Entradas generadas por la venta de bienes o la prestación de servicios durante el periodo
                td.ajuste-border-tabla.texto-left Ventas, prestación de servicios, comisiones
                td.ajuste-border-tabla.texto-left Crédito: aumenta en el haber, disminuye en el debe
                td.texto-left Estado de resultados
              tr
                td.ajuste-border-tabla.texto-left Costos
                td.ajuste-border-tabla.texto-left Recursos consumidos directamente para producir o vender lo que genera el ingreso
                td.ajuste-border-tabla.texto-left Costo de ventas, materia prima, mano de obra directa, costos indirectos de fabricación
                td.ajuste-border-tabla.texto-left Débito: aumenta en el debe, disminuye en el haber
                td.texto-left Estado de resultados (costo de ventas)
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Gastos
                td.ajuste-border-tabla.texto-left Consumos para administrar, vender o sostener la operación (no se incorporan directamente al producto/servicio)
                td.ajuste-border-tabla.texto-left Arriendo, servicios públicos, publicidad, papelería, nómina administrativa
                td.ajuste-border-tabla.texto-left Débito: aumenta en el debe, disminuye en el haber
                td.texto-left Estado de resultados (gastos)
        
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Saldos: cálculo e interpretación básica

    p.mb-5 El saldo es el resultado final de una cuenta al comparar débitos y créditos. Si el débito es mayor, el saldo es deudor; si el crédito es mayor, es acreedor. Estos se calculan así:

    .row.justify-content-center.mb-5
      .col-xl-10
        .box___style_4.mb-5(data-aos="zoom-in")
          h4.mb-0.text-center Cálculo e interpretación básica del saldo

        .row.justify-content-center.mb-5
          .col-xl-4.col-md-9(data-aos="zoom-in")
            .box___style_6.h-100
              .row.justify-content-center.mb-3
                .col-12
                  .box___style_7.mb-3
                    figure(data-aos="fade-right")
                      img(src='@/assets/curso/temas/img51.svg', alt="" style="max-width: 110px").m-auto
                    h5.text-center Caso
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Débitos > Créditos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Créditos > Débitos. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Débitos = Créditos.
          .col-xl-4.col-md-9(data-aos="zoom-in").espacio___movil_4
            .box___style_6.h-100
              .row.justify-content-center.mb-3
                .col-12
                  .box___style_7.mb-3
                    figure(data-aos="fade-right")
                      img(src='@/assets/curso/temas/img52.svg', alt="" style="max-width: 110px").m-auto
                    h5.text-center Cálculo
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Saldo = Débitos - Créditos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Saldo = Créditos - Débitos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Saldo = 0.
          .col-xl-4.col-md-9(data-aos="zoom-in").espacio___movil_4
            .box___style_6.h-100
              .row.justify-content-center.mb-3
                .col-12
                  .box___style_7.mb-3
                    figure(data-aos="fade-right")
                      img(src='@/assets/curso/temas/img53.svg', alt="" style="max-width: 110px").m-auto
                    h5.text-center Lectura del saldo
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Saldo deudor (común en activos, costos y gastos).
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Saldo acreedor (común en pasivos, patrimonio e ingresos).
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Cuenta sin saldo al cierre del periodo.
    
    p.mb-5 Los pasos para calcular, con su respectivo procedimiento, para obtener el saldo de una cuenta contable, se detallan en la siguiente figura:

    .row.justify-content-center.mb-5
      .col-xl-10
        .box___style_4.mb-5(data-aos="zoom-in")
          h4.mb-0.text-center Pasos para calcular y leer el saldo de una cuenta contable

        PasosA.color-acento-contenido(tipo="n")
          .row
            .col-lg
              h3 Paso 1
              p.mb-0 Sume los valores del DEBE (débito) y del HABER (crédito) registrados en la cuenta.
            .col-auto(data-aos="zoom-in").espacio___movil_3
              figure
                img(src='@/assets/curso/temas/img54.png', alt='' style="width: 300px").m-auto
          .row
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img55.png', alt='' style="width: 300px").m-auto
            .col-lg.espacio___movil_3.fit___pasosA-left
              h3 Paso 2
              p.mb-0 Compare las sumas: Identifique cuál es mayor (DEBE o HABER).
          .row
            .col-lg
              h3 Paso 3
              p.mb-0 Reste la menor de la mayor: la diferencia es el saldo.
            .col-auto(data-aos="zoom-in").espacio___movil_3
              figure
                img(src='@/assets/curso/temas/img56.png', alt='' style="width: 300px").m-auto
          .row
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img57.png', alt='' style="width: 300px").m-auto
            .col-lg.espacio___movil_3.fit___pasosA-left
              h3 Paso 4
              p.mb-0 Determine el tipo de saldo: Deudor si DEBE > HABER. Acreedor si HABER > DEBE. Saldo Cero si son iguales.
          .row
            .col-lg
              h3 Paso 4
              p.mb-0 Interprete el saldo según la clase de cuenta (Activo, Pasivo, Patrimonio, Ingreso, Costo o Gasto) y revise si es coherente.
            .col-auto(data-aos="zoom-in").espacio___movil_3
              figure
                img(src='@/assets/curso/temas/img58.png', alt='' style="width: 300px").m-auto

    p.mb-5 El saldo no solo muestra cuánto queda, sino qué representa en la realidad del negocio: efectivo disponible, obligaciones pendientes, ingresos acumulados o gastos del periodo, según la cuenta y su naturaleza. A continuación, se presenta un ejemplo breve para observar cómo el saldo se obtiene de la diferencia entre lados y cómo se interpreta de acuerdo con la clase de cuenta.

    .color___box_1
      .px-5

        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 7.
          span Ejemplos prácticos de cálculo e interpretación
        .tabla-a(data-aos="zoom-in").mb-5
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Cuenta
                th.ajuste-border-tabla.texto-left Total Debe
                th.ajuste-border-tabla.texto-left Total Haber
                th.texto-left Saldo e interpretación
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Caja (Activo)
                td.ajuste-border-tabla.texto-left $5.500.000
                td.ajuste-border-tabla.texto-left $1.500.000
                td.texto-left Saldo deudor $4.000.000: efectivo disponible
              tr
                td.ajuste-border-tabla.texto-left Proveedores (Pasivo)
                td.ajuste-border-tabla.texto-left $3.000.000
                td.ajuste-border-tabla.texto-left $8.000.000
                td.texto-left Saldo acreedor $5.000.000: obligación pendiente
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Ventas (Ingreso)
                td.ajuste-border-tabla.texto-left $0
                td.ajuste-border-tabla.texto-left $12.000.000
                td.texto-left Saldo acreedor $12.000.000: ingresos acumulados del periodo
              tr
                td.ajuste-border-tabla.texto-left Servicios públicos (Gasto)
                td.ajuste-border-tabla.texto-left $600.000
                td.ajuste-border-tabla.texto-left $0
                td.texto-left Saldo deudor $600.000: gasto acumulado del periodo
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Situación en la cuenta
                td.ajuste-border-tabla.texto-left Cálculo
                td.ajuste-border-tabla.texto-left Tipo de saldo
                td.texto-left Lectura rápida
              tr
                td.ajuste-border-tabla.texto-left Total Debe > Total Haber
                td.ajuste-border-tabla.texto-left Saldo = Debe - Haber
                td.ajuste-border-tabla.texto-left Saldo deudor
                td.texto-left Predomina el débito; común en activos, costos y gastos
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Total Haber > Total Debe
                td.ajuste-border-tabla.texto-left Saldo = Haber - Debe
                td.ajuste-border-tabla.texto-left Saldo acreedor
                td.texto-left Predomina el crédito; común en pasivos, patrimonio e ingresos
              tr
                td.ajuste-border-tabla.texto-left Total Debe = Total Haber
                td.ajuste-border-tabla.texto-left Saldo = 0
                td.ajuste-border-tabla.texto-left Cuenta saldada
                td.texto-left No hay diferencia neta; puede ser normal al cierre o en cuentas transitorias
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Saldo “inusual” para su clase
                td.ajuste-border-tabla.texto-left Revisar registro
                td.ajuste-border-tabla.texto-left Alerta
                td.texto-left Puede indicar devoluciones, anticipos, notas crédito o un registro invertido.

        p.mb-0 En síntesis, la cuenta contable organiza y resume los hechos económicos mediante la partida doble, interpretando movimientos según su naturaleza y saldo. Relacionada con las categorías contables, permite comprender aumentos, disminuciones y efectos acumulados, apoyándose en la cuenta T para verificar registros.

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
