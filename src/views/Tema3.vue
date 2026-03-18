<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Ciclo contable: de la transacción al registro

    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img18.png', alt='').m-auto
      .col-xl
        .box___style_5.fit___box_5(data-aos="zoom-in")
          p.mb-0 El ciclo contable es la secuencia organizada que transforma los hechos económicos cotidianos en información ordenada, verificable y útil para la toma de decisiones. Permite comprender costos, obligaciones y resultados, asegurando registros soportados y consistentes, alineados con la normativa colombiana vigente en información financiera.

    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Del hecho económico al registro contable: etapas, soportes y control del ciclo contable

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img19.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El ciclo contable comprende las etapas para reconocer, registrar, verificar y presentar la información financiera de un periodo. Inicia con un hecho económico respaldado por un soporte interno o externo y culmina con reportes listos para análisis. Sin evidencia documental, el registro pierde validez y sustento. 
    
    p.mb-5 A continuación, se presenta una guía práctica y organizada de esa secuencia, explicando claramente el propósito específico de cada paso dentro del proceso contable:

    .row.justify-content-center.mb-5
      .col-xl-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in")
          .row.align-items-center(titulo="Identificación del hecho económico").ajuste-cajaAcordion
            .col-xl-7.mb-4
              p.mb-0 Se reconoce qué ocurrió, cuándo ocurrió y qué impacto tiene (entrada o salida de recursos, obligaciones, ingresos, costos o gastos).
            .col-xl-5.mb-3
              figure
                img(src='@/assets/curso/temas/img20.jpg', alt='').m-auto 
          .row.align-items-center(titulo="Recolección del soporte").ajuste-cajaAcordion
            .col-xl-7.mb-4
              p.mb-0 Se verifica el documento que prueba la transacción (origen, fechas, valores, responsables y consistencia).
            .col-xl-5.mb-3
              figure
                img(src='@/assets/curso/temas/img21.jpg', alt='').m-auto 
          .row.align-items-center(titulo="Registro inicial (asiento)").ajuste-cajaAcordion
            .col-xl-7.mb-4
              p.mb-0 Se elabora el registro contable con base en la evidencia, de manera que refleje la naturaleza del movimiento.
            .col-xl-5.mb-3
              figure
                img(src='@/assets/curso/temas/img22.jpg', alt='').m-auto 
          .row.align-items-center(titulo="Mayorización y acumulación").ajuste-cajaAcordion
            .col-xl-7.mb-4
              p.mb-0 Se agrupan los movimientos para conocer saldos por cuenta y facilitar controles y conciliaciones.
            .col-xl-5.mb-3
              figure
                img(src='@/assets/curso/temas/img23.jpg', alt='').m-auto 
          .row.align-items-center(titulo="Verificaciones y ajustes").ajuste-cajaAcordion
            .col-xl-7.mb-4
              p.mb-0 Se revisan diferencias (por ejemplo, conciliación bancaria, depreciaciones, provisiones, inventarios, causaciones) y se registran ajustes cuando aplique.
            .col-xl-5.mb-3
              figure
                img(src='@/assets/curso/temas/img24.jpg', alt='').m-auto 
          .row.align-items-center(titulo="Preparación de reportes del periodo").ajuste-cajaAcordion
            .col-xl-7.mb-4
              p.mb-0 Se consolida la información para elaborar estados e informes, y se realizan procesos de cierre cuando corresponda.
            .col-xl-5.mb-3
              figure
                img(src='@/assets/curso/temas/img25.jpg', alt='').m-auto 
    
    .color___box_1
      .px-5

        p.mb-5 Para comprender cómo una transacción se transforma en información organizada, es importante conocer las etapas del ciclo contable. Enseguida, se presenta una tabla que resume cada fase y su producto esperado.

        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 2.
              span Etapas del ciclo contable
            .tabla-a(data-aos="zoom-in")
              table
                caption Nota. Fuente: elaboración propia a partir de (Unir, 2021); (Rojas, Contabilidad, 2018).
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Etapa
                    th.ajuste-border-tabla.texto-left Qué se realiza
                    th.texto-left Producto esperado
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Identificación
                    td.ajuste-border-tabla.texto-left Reconocer el hecho económico y sus condiciones (fecha, valor, partes, forma de pago).
                    td.texto-left Descripción de la transacción.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Soporte
                    td.ajuste-border-tabla.texto-left Seleccionar o elaborar el documento soporte (factura, recibo, comprobante, consignación, etc.).
                    td.texto-left Evidencia documental.
                  tr
                    td.ajuste-border-tabla.texto-left Registro
                    td.ajuste-border-tabla.texto-left Aplicar la partida doble y registrar el asiento contable (débitos y créditos).
                    td.texto-left Asiento en libro diario o registro equivalente.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Clasificación
                    td.ajuste-border-tabla.texto-left Trasladar movimientos a cuentas (mayorizar) para obtener saldos por cuenta.
                    td.texto-left Saldos por cuenta.
                  tr
                    td.ajuste-border-tabla.texto-left Verificación
                    td.ajuste-border-tabla.texto-left Revisar coherencia de saldos (por ejemplo, balance de prueba).
                    td.texto-left Balance de comprobación.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Informe
                    td.ajuste-border-tabla.texto-left Presentar estados financieros u otros reportes según necesidad.
                    td.texto-left Estados financieros e informes.

        p.mb-5 Esta secuencia permite que cada cifra tenga una explicación: parte de un soporte, se convierte en registro y termina siendo información útil para control interno y para la toma de decisiones. En guías académicas colombianas, esta lógica se presenta precisamente como una cadena:

    .row.justify-content-center.mb-5
      .col-xl-10
        .box___style_4(data-aos="zoom-in")
          h4.mb-0.text-center Secuencia general del ciclo contable

    .fondo___carrusel.fit___carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-0
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-4
              .col-8
                img(src='@/assets/curso/temas/img28.svg' style="max-width: 90px").m-auto
            p.mb-0.text-center Hecho económico (transacción).
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-4
              .col-8
                img(src='@/assets/curso/temas/img29.svg' style="max-width: 90px").m-auto
            p.mb-0.text-center  Soporte (documento fuente).
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-4
              .col-8
                img(src='@/assets/curso/temas/img30.svg' style="max-width: 90px").m-auto
            p.mb-0.text-center Análisis (contable).
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-4
              .col-8
                img(src='@/assets/curso/temas/img31.svg' style="max-width: 90px").m-auto
            p.mb-0.text-center Registro (asiento).
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-4
              .col-8
                img(src='@/assets/curso/temas/img32.svg' style="max-width: 90px").m-auto
            p.mb-0.text-center Mayorización (libro mayor).
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-4
              .col-8
                img(src='@/assets/curso/temas/img33.svg' style="max-width: 90px").m-auto
            p.mb-0.text-center Verificación (balance de prueba).
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-4
              .col-8
                img(src='@/assets/curso/temas/img34.svg' style="max-width: 90px").m-auto
            p.mb-0.text-center Ajustes y cierre del periodo.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-4
              .col-8
                img(src='@/assets/curso/temas/img35.svg' style="max-width: 90px").m-auto
            p.mb-0.text-center Información financiera (reportes).

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
