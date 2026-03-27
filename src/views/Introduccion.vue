<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .box___style_1.mb-0(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/intro/img1.png', alt='').m-auto
        .col-xl
          p.mb-0 Este componente formativo capacita al aprendiz en el uso de la contabilidad como herramienta estratégica para organizar y sustentar la información financiera, promoviendo la transparencia y la toma de decisiones. A través de un enfoque práctico, se aborda el manejo de soportes internos y externos, el ciclo contable y la naturaleza de las cuentas. Mediante el uso de la cuenta T, el aprendiz podrá realizar registros de débitos, créditos y calcular saldos, garantizando procesos contables ordenados, coherentes y verificables.

</template>

<script>
export default {
  name: 'Introduccion',
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
