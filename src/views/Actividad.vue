<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos de contabilidad y registro de transacciones',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar el nivel de comprensión de los aprendices sobre los fundamentos de la contabilidad, la clasificación de soportes y el ciclo contable, así como su capacidad para registrar transacciones mediante el uso de la cuenta T y la aplicación de la partida doble, fortaleciendo la generación de información financiera confiable para la toma de decisiones organizacionales fundamentada en datos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal de la contabilidad en una organización?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Únicamente el pago de impuestos y otras cargas fiscales ante el estado y proveedores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Transformar hechos cotidianos en información financiera ordenada, verificable y comparable.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Archivar documentos sin un orden específico, de manera libre y espontanea, según el criterio personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reemplazar la toma de decisiones de la gerencia y buscar alternativas estratégicas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué característica debe tener un soporte contable para que el registro sea confiable?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Estar debidamente fechado y autorizado por quienes intervienen.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Ser únicamente un mensaje verbal, puede ser un texto corto o extenso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ser un documento siempre emitido por una entidad bancaria, con la información del producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'No requiere firma si la transacción es económica, lo que importa es que tenga una descripción clara.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué ley regula en Colombia los principios y normas de contabilidad e información financiera (NIIF)?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ley 100 de 1993.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Decreto 410 de 1971.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ley 1314 de 2009.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ley 115 de 1994.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Quiénes se consideran usuarios externos de la información contable?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Directores generales y gerentes de área, según la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solamente los empleados de servicios generales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Inversionistas, prestamistas y entidades gubernamentales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Los competidores directos e indirectos de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de los siguientes es un ejemplo de soporte contable externo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Nota de depreciación, con toda la información.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comprobante de egreso, con valores correctos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Factura de compra enviada por un proveedor.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Nota de provisión, con descripciones claras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué documento se utiliza para realizar ajustes o disminuciones a una factura electrónica?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Nota débito electrónica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Nota crédito electrónica.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Comprobante de ingreso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Extracto bancario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'Según el Código de Comercio, ¿cuánto tiempo se deben conservar los libros y papeles contables?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '2 años.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '5 años.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Permanentes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '10 años.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿En qué etapa del ciclo contable se agrupan los movimientos para conocer los saldos de cada cuenta?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identificación del hecho económico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Recolección del soporte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mayorización y acumulación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Preparación de reportes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué representa la "Cuenta Contable" en el sistema de información?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una lista detallada de todos los contactos de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La unidad básica para registrar y organizar la información financiera.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El nombre del <i>software</i> contable y financiero, donde se registran las operaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un número de cuenta bancaria corporativa, con todos los beneficios y costos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Según su naturaleza, ¿qué cuentas aumentan con un registro en el Débito (Debe)?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pasivo, Patrimonio e Ingresos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pasivo y Gastos solamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Activo, Gastos y Costos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Patrimonio y Activos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué representa un "Pasivo" según el marco conceptual?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Obligaciones presentes de la entidad, surgidas a raíz de sucesos pasados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Los bienes que posee la empresa, tales como terrenos, vehículos y maquinaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El aporte inicial de los socios, con el que se realiza la constitución de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Los gastos del mes, tales como: operacionales y no operacionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿En qué lado de la Cuenta T se registran los "Créditos"?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'A la izquierda (Debe).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'En la parte superior.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'A la derecha (Haber).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'En cualquier lado, depende de la cuenta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué principio establece que "no hay deudor sin acreedor" y las sumas deben ser iguales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Principio de prudencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Devengo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Partida doble.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Periodo contable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Si una cuenta tiene un total Débito de $100 y un total Crédito de $40, ¿cuál es su saldo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Saldo acreedor de $60.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Saldo deudor de $60.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Saldo deudor de $140.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Saldo cero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Cuál es la función del "Comprobante de Egreso"?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Respaldar el pago de una suma de dinero a un tercero.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Registrar ventas realizadas, producto de las operaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Registrar la depreciación de activos, como de la maquinaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Solicitar un préstamo al banco, para incrementar el apalancamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué función cumplen los soportes contables dentro del proceso contable?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar la necesidad de registrar operaciones en los libros contables oficiales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituir los informes financieros en la toma de decisiones empresariales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Respaldar cada registro con evidencia verificable y trazable del proceso contable.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Reducir el uso de documentos físicos en procesos administrativos internos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué sucede si una transacción no tiene soporte contable válido?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El registro pierde validez y no puede considerarse confiable dentro del sistema contable.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Se puede registrar igualmente si existe conocimiento previo del hecho económico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Solo afecta el resultado del periodo sin alterar otros registros contables.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'No tiene impacto si el valor registrado coincide con el saldo esperado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es el propósito principal de la etapa de verificación en el ciclo contable?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registrar las transacciones iniciales según los documentos soporte disponibles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Clasificar las cuentas según su naturaleza dentro del plan contable definido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Identificar los hechos económicos antes de iniciar el registro contable formal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Revisar coherencia de saldos y realizar ajustes necesarios en registros contables.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué indica un saldo deudor en una cuenta contable al finalizar el periodo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que el total del haber es mayor que el debe en dicha cuenta contable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que el total del debe es mayor que el haber en dicha cuenta contable.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Que no existen movimientos registrados durante el periodo contable evaluado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que los valores registrados en ambos lados son exactamente iguales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el objetivo principal de la cuenta T en el registro contable?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituir los libros contables oficiales en el registro formal de operaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Clasificar las empresas según su actividad económica y tamaño empresarial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Visualizar los movimientos y comprobar el equilibrio entre débitos y créditos registrados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Determinar el valor de los activos sin considerar los pasivos existentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
