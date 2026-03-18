<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Cuenta T: estructura y uso para registrar movimientos
    
    .box___style_1.fit___box_1.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img59.png', alt='').m-auto
        .col-xl
          p.mb-0 La cuenta T es una representación gráfica del libro mayor en forma de “T” que divide cada cuenta en dos lados: el debe (débito) a la izquierda y el haber (crédito) a la derecha. Esta separación permite registrar los movimientos de manera ordenada y visualizar con claridad si una cuenta aumenta o disminuye, así como el saldo que resulta de comparar los totales del debe y del haber. Además, facilita comprobar la lógica de la partida doble, porque cada transacción debe quedar equilibrada: la suma de los débitos registrados debe ser igual a la suma de los créditos. Aunque la cuenta T no reemplaza el registro formal ni los sistemas contables, funciona como un apoyo práctico para comprender el sentido del registro, detectar errores frecuentes (por ejemplo, invertir debe/haber) y revisar la coherencia de un asiento antes de codificarlo en el plan de cuentas. (Rojas, Contabilidad, 2018).
    
    p.mb-0 A lo largo del capítulo se explicará cómo se construye una cuenta T, cómo se registran movimientos paso a paso y cómo se verifica el equilibrio del registro con ejemplos que permiten interpretar el saldo y asegurar coherencia.

    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Representación gráfica y relación con la partida doble

    p En la cuenta T, el nombre se ubica arriba y el formato divide en debe y haber. El debe registra débitos y el haber créditos; estos no indican algo positivo o negativo, sino el lado donde se registra cada movimiento según la naturaleza de la cuenta.
    p.mb-5 La relación con la partida doble se observa en la verificación del registro: por cada transacción, la suma de los valores llevados al “debe”, debe ser igual a la suma de los valores llevados al haber. Esta igualdad se comprueba en el mismo momento del registro, lo que convierte a la cuenta T en una herramienta práctica para validar la coherencia del asiento antes de continuar con el proceso contable.

    .color___box_1
      .px-5

        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 3.
              span Estructura básica de una cuenta T
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img60.svg', alt='La imagen presenta el esquema de una cuenta T, con el nombre en la parte superior y dos columnas: debe y haber. Permite registrar débitos y créditos, calcular totales y determinar el saldo como diferencia entre ambos lados.').m-auto

        p.mb-5 Para identificar las partes de la cuenta T y cómo se usan para registrar y revisar movimientos, se presenta la siguiente tabla:

        .row.justify-content-center.mb-0
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 8.
              span Elementos de la cuenta T y su función
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Elemento
                    th.texto-left ¿Para qué sirve?
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Nombre de la cuenta
                    td.texto-left Identifica el recurso, obligación o resultado que se registra (p. ej., Caja, Proveedores, Ventas).
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Debe (débito/cargo)
                    td.texto-left Registra movimientos que, según la naturaleza de la cuenta, representan aumentos o disminuciones.
                  tr
                    td.ajuste-border-tabla.texto-left Haber (crédito/abono)
                    td.texto-left Registra movimientos que, según la naturaleza de la cuenta, representan aumentos o disminuciones.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Saldo
                    td.texto-left Muestra el efecto acumulado: diferencia entre el total del debe y el total del haber.
      
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Procedimiento de registro en cuenta T

    p.mb-5 La cuenta T es una representación gráfica con debe y haber que permite visualizar cómo una transacción afecta activos, pasivos, patrimonio, ingresos, costos o gastos. Facilita comprobar la partida doble, reducir errores y calcular saldos. Su uso implica identificar el hecho económico, aplicar reglas según la naturaleza de la cuenta y verificar el equilibrio. La regla general para ubicar los movimientos, según la naturaleza de la cuenta, se explican en la siguiente tabla:

    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 9.
          span Guía práctica para decidir el lado de registro en cuenta T
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Tipo de cuenta
                th.ajuste-border-tabla.texto-left Cuando aumenta
                th.texto-left Cuando disminuye
            tbody
              tr
                td.ajuste-border-tabla.texto-left Activo
                td.ajuste-border-tabla.texto-left Se registra en el debe
                td.texto-left Se registra en el haber
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Pasivo
                td.ajuste-border-tabla.texto-left Se registra en el haber
                td.texto-left Se registra en el debe
              tr
                td.ajuste-border-tabla.texto-left Patrimonio
                td.ajuste-border-tabla.texto-left Se registra en el haber
                td.texto-left Se registra en el debe
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Ingresos
                td.ajuste-border-tabla.texto-left Se registra en el haber
                td.texto-left Se registra en el debe
              tr
                td.ajuste-border-tabla.texto-left Costos
                td.ajuste-border-tabla.texto-left Se registra en el debe
                td.texto-left Se registra en el haber
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Gastos
                td.ajuste-border-tabla.texto-left Se registra en el debe
                td.texto-left Se registra en el haber
    
    p.mb-5 El procedimiento sugerido para registrar una transacción en cuentas T, se desarrolla en el esquema que se presenta a continuación:

    .row.justify-content-center.mb-5
      .col-xl-10
        .box___style_4(data-aos="zoom-in")
          h4.mb-0.text-center Procedimiento sugerido para registrar una transacción con cuentas T

    .fondo___carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-0
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.align-items-center.mb-4
              .col-12
                .box___style_9.text-center
                  h2.mb-0 1
            p.mb-0.text-center Leer la transacción ¿qué pasó? ¿por cuánto?.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.align-items-center.mb-4
              .col-12
                .box___style_9.text-center
                  h2.mb-0 2
            p.mb-0.text-center Identificar las cuentas afectadas (minimo dos).
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.align-items-center.mb-4
              .col-12
                .box___style_9.text-center
                  h2.mb-0 3
            p.mb-0.text-center Idea estupenda determinar la naturaleza (activo, pasivo, patrimonio, ingreso, costo, gasto).
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.align-items-center.mb-4
              .col-12
                .box___style_9.text-center
                  h2.mb-0 4
            p.mb-0.text-center Idea moderna definir el movimiento (débito o crédito).
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.align-items-center.mb-4
              .col-12
                .box___style_9.text-center
                  h2.mb-0 5
            p.mb-0.text-center Idea fenomenal registrar en cuenta T (debe / haber).
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.align-items-center.mb-4
              .col-12
                .box___style_9.text-center
                  h2.mb-0 6
            p.mb-0.text-center Idea brillante verificar partida doble (suma débitos = suma créditos).
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.align-items-center.mb-4
              .col-12
                .box___style_9.text-center
                  h2.mb-0 7
            p.mb-0.text-center Idea simple calcular saldos e interpretar (¿aumento? o ¿disminuyó?).
          
        <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
        Separador
        #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.3 Determinación de saldos y verificación del equilibrio

        .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img61.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El saldo de una cuenta T surge de comparar debe y haber: si el debe es mayor, es saldo deudor; si el haber supera, es acreedor, según la naturaleza de la cuenta. El equilibrio se verifica por transacción y en conjunto, garantizando coherencia y detección de errores.
    
    p.mb-5 Para comprender de manera práctica cómo funciona el registro en cuenta T y la aplicación de la partida doble, se invita al aprendiz a observar el siguiente video. Allí se explica paso a paso el ejemplo de la panadería, mostrando cómo se afectan las cuentas, cómo se registran los movimientos y cómo se verifica el equilibrio contable.

    figure(data-aos="zoom-in").mb-5
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") #[b Video]: ejemplo de registro y verificación con cuentas T.
    
    p.mb-0 En este capítulo se presentó la cuenta T como una herramienta gráfica que permite representar, de forma clara, cómo se registran los movimientos contables en el debe y el haber. Se explicó su relación directa con la partida doble, mostrando que toda transacción debe mantener el equilibrio entre débitos y créditos, y que la cuenta T facilita comprobar esa coherencia antes de elaborar asientos y consolidar la información. También se desarrolló el procedimiento de registro en cuenta T, desde la identificación de las cuentas afectadas y su naturaleza, hasta la determinación de saldos, para interpretar el efecto acumulado de los movimientos y asegurar que el registro sea consistente.

</template>

<script>
export default {
  name: 'Tema5',
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
