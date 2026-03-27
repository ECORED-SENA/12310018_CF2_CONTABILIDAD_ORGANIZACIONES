<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Soportes contables: finalidad como respaldo del registro

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img5.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los soportes contables son la base verificable del registro. Todo hecho económico debe demostrarse con documentos fechados y autorizados. Distingue soportes externos e internos y resalta su función en la trazabilidad, control y legalidad contable.
    
    p.mb-5 Sin soportes adecuados no existe registro confiable. La organización documental, conservación y correspondencia entre comprobantes y asientos garantizan transparencia, control y validez legal de la información contable.

    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Soportes externos: tipos frecuentes y su uso

    .row.align-items-center.mb-5
      .col-xl
        p Los soportes externos son documentos que evidencian transacciones realizadas con terceros (clientes, proveedores o bancos). Funcionan como la base documental y el punto de partida del registro contable, ya que aportan la evidencia necesaria para que cada asiento sea verificable, fechado y autorizado, garantizando la transparencia en ventas, compras y pagos.
        p.mb-0 A continuación, se listan detalladamente los soportes externos más conocidos, describiendo su uso contable específico y la importancia que tienen para evidenciar las transacciones con terceros:
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img6.jpg', alt='').m-auto
    
    .row.justify-content-center.mb-5
      .col-xl-10
        .box___style_4(data-aos="zoom-in")
          h4.mb-0.text-center Soportes externos
    
    SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img7.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Factura electrónica de venta
        p.mb-0 Respalda la venta de bienes y/o servicios; soporta el reconocimiento de ingresos, impuestos asociados y cuentas por cobrar o recaudo. (DIAN, s.f.).
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img7.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Nota crédito electrónica
        p.mb-0 Respalda disminuciones o ajustes posteriores a una factura (por devoluciones, descuentos o correcciones), afectando el valor reconocido originalmente. (DIAN, s.f.).
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img7.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Nota débito electrónica
        p.mb-0 Respalda incrementos o ajustes posteriores a una factura (por mayores valores o cargos adicionales) cuando corresponda. (DIAN, s.f.).
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img7.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Documento equivalente electrónico POS
        p.mb-0 Respalda ventas soportadas con tiquete POS; cuando identifica al comprador, puede otorgar beneficios fiscales al adquiriente. (DIAN).
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img7.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Documento equivalente electrónico (otros tipos)
        p.mb-0 Soporta operaciones que, por su naturaleza, se documentan con equivalentes; puede dar derecho a impuestos descontables y a costos/deducciones según condiciones. (DIAN, s.f.).
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img7.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Factura del proveedor
        p.mb-0 Respalda compras de bienes o servicios; soporta el reconocimiento de costos/gastos o activos y la correspondiente obligación (cuentas por pagar). (DIAN, s.f.).
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img7.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Documento soporte en compras a no obligados a facturar
        p.mb-0 Respalda la compra de un bien o servicio cuando el proveedor no está obligado a facturar; el comprador lo genera con numeración autorizada para soportar costos/deducciones o impuestos descontables. (DIAN).
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img7.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Extracto bancario
        p.mb-0 Evidencia movimientos y saldos en cuentas bancarias; soporta entradas/salidas de efectivo y sirve de base para conciliaciones. (Decreto 2649, 1993).
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img7.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Comprobante de consignación/transferencia
        p.mb-0 Evidencia un pago o recaudo; soporta la salida/entrada de dinero y la cancelación o creación de obligaciones.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img7.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Contrato u orden de servicio/compra
        p.mb-0 Evidencia condiciones (objeto, valor, plazo) de una operación con terceros; soporta el registro por causación cuando aplica.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img7.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Remisión, guía o acta de entrega/recibo
        p.mb-0 Evidencia entrega o recepción de bienes/servicios; apoya el registro cuando se requiere demostrar el momento y la realidad de la operación.
    
    p.mb-0 Finalmente, para sostener el registro, estos soportes deben poder asociarse al comprobante y conservarse de modo que sea posible su verificación; la norma señala que pueden adherirse al comprobante o conservarse archivados dejando constancia, en orden cronológico (Decreto 2649 , 1993).

    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Soportes internos: notas y comprobantes contables

    .row.align-items-center.mb-5
      .col-xl
        p.mb-3 Los soportes internos documentan transacciones y ajustes generados dentro de la empresa, garantizando que cada registro sea trazable y verificable. Estos insumos fundamentan los comprobantes de contabilidad, documentos numerados y autorizados que formalizan el asiento contable detallando fechas, cuantías y cuentas afectadas. En conjunto, este sistema asegura la eficacia probatoria y el cumplimiento de las normas mercantiles al mantener la correspondencia exacta entre la evidencia física y los libros oficiales.
        .box___style_5(data-aos="zoom-in")
          p.mb-0 Ejemplos frecuentes de soportes internos, como notas y comprobantes contables, y su aplicación práctica en el registro, control, formalización y trazabilidad de las transacciones económicas de la organización, son las que se detallarán en este apartado:
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img8.png', alt='').m-auto
    
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Notas internas (soportes)
    
    p.mb-5 Las notas internas son documentos generados por la organización para justificar y respaldar hechos económicos o ajustes que no tienen un soporte de terceros, garantizando trazabilidad y control. A continuación, se explicarán los tipos de notas internas:

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Nota de contabilidad (ajuste o corrección)
                p.mb-0 Respalda reclasificaciones, correcciones o causaciones sin documento externo, indicando cálculo y justificación.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img11.png', alt='' style="max-width: 500px").m-auto
              
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Nota de provisión o deterioro
                p.mb-0 Sustenta el valor reconocido, señalando criterio y base de cálculo.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img12.png', alt='' style="max-width: 500px").m-auto
              
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Nota de depreciación o amortización
                p.mb-0 Documenta el gasto del periodo y el método aplicado al activo o intangible.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img13.png', alt='' style="max-width: 500px").m-auto

            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Nota bancaria 
                p.mb-0 Soporta ajustes por movimientos o novedades bancarias con extractos o reportes anexos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img14.png', alt='' style="max-width: 500px").m-auto

    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Comprobantes contables (documento del asiento)
    
    p.mb-5 Los comprobantes contables son documentos internos que respaldan y formalizan los asientos contables, evidenciando ingresos, egresos o ajustes, y garantizando soporte, control y trazabilidad en el registro. Ahora, se procederá a explorar los tipos de comprobantes contables:

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Comprobante de ingreso
                p.mb-0 Respalda entradas de dinero, anexando soportes que evidencian el recaudo y su origen.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img15.png', alt='' style="max-width: 500px").m-auto
              
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Comprobante de egreso
                p.mb-0 Sustenta pagos a terceros y la salida de recursos, con identificación del beneficiario cuando aplique.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img16.png', alt='' style="max-width: 500px").m-auto
              
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Comprobante de ajustes y reclasificaciones
                p.mb-0 Registra ajustes sin flujo de efectivo, como depreciaciones o correcciones, con soporte interno.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img17.png', alt='' style="max-width: 500px").m-auto


    p.mb-0 Los soportes internos deben archivarse ordenadamente para garantizar verificación y exactitud de los registros. La normativa exige conservar libros y documentos contables por diez años, asegurando trazabilidad, respaldo y control documental adecuado.

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
