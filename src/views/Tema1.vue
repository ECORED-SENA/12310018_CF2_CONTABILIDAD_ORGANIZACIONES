<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Importancia y utilidad de la contabilidad en una organización
    
    .row.align-items-center.mb-5
      .col-xl
        .box___style_2.mb-3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/img1.jpg', alt='').m-auto
            .col-xl
              p.mb-0 La contabilidad es la herramienta que transforma las operaciones diarias en información ordenada, verificable y comparable. Bajo la regulación colombiana, su función trasciende el simple registro, convirtiéndose en un sistema de trazabilidad y control que permite sustentar cada transacción con evidencia sólida (soportes y facturas), reduciendo errores y facilitando auditorías.
        p.mb-0 La contabilidad permite controlar recursos y proyectar liquidez para tomar decisiones estratégicas basadas en datos, sustentando con evidencia la operación de la organización. En la siguiente, se presentan los usos de la contabilidad:
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img2.png', alt='').m-auto
    
    .color___box_1
      .px-5

        .row.justify-content-center.mb-0
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 1.
              span Para qué sirve la contabilidad en una organización
            .tabla-a(data-aos="zoom-in")
              table
                caption Nota. La tabla sintetiza usos de la contabilidad y el tipo de decisiones o controles que apoya en la gestión. Fuente: elaboración propia con base en Ley 1314 de 2009 y DUR 2420 de 2015. (Colombia, Congreso de la República de, 2009).
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Uso
                    th.ajuste-border-tabla.texto-left Qué permite observar
                    th.texto-left Ejemplo práctico
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Gestión
                    td.ajuste-border-tabla.texto-left Desempeño del negocio
                    td.texto-left Comparar ventas del mes vs. meta
                  tr
                    td.ajuste-border-tabla.texto-left Control
                    td.ajuste-border-tabla.texto-left Orden y trazabilidad
                    td.texto-left Soportar un pago con documento y registro
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Decisiones
                    td.ajuste-border-tabla.texto-left Elegir con evidencia
                    td.texto-left Ajustar precios si el margen es bajo
                  tr
                    td.ajuste-border-tabla.texto-left Transparencia
                    td.ajuste-border-tabla.texto-left Comparabilidad
                    td.texto-left Presentar resultados a socios o aliados
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Cumplimiento
                    td.ajuste-border-tabla.texto-left Soportes y reportes
                    td.texto-left Preparar información para obligaciones
                  
        <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
        Separador
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Contabilidad en la organización: concepto, utilidad y usuarios de la información

        p.mb-5 La contabilidad organiza hechos económicos para generar información útil, facilitando el control y la toma de decisiones. En el siguiente pódcast, se profundizará en el concepto de contabilidad, su utilidad y sus usuarios.

        .row.align-items-center.m-0
          .col-xl
            .row.align-items-center.justify-content-center.box___style_3(data-aos="zoom-in")
              .col-auto
                figure(data-aos="fade-right")
                  img(src="@/assets/curso/temas/img3.svg" style="max-width: 220px").m-auto
              .col.espacio___movil_3
                h4.mb-4 Pódcast
                TarjetaAudio.color-acento-contenido.mb-3(
                  texto="Sintonía Contable: El lenguaje de los negocios"
                  :audio="require('@/assets/componentes/audios/Podcast_CF2_12310018_contabilidad_organizacion.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
          .col-xl-auto
            figure(data-aos="fade-left").d-none.d-xl-block
              img(src="@/assets/curso/temas/img4.jpg" ).m-auto

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
