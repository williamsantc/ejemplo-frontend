<template>
  <b-alert show variant="primary">{{ texteVer }}</b-alert>
</template>

<script>
export default {
    name: 'EjemploComponente',
    props: {
        textoDeseado: {
            required: false,
            type: String,
            default: 'Vacio'
        }
    },
    data: function () {
      return {
        concatenar: ' prueba'
      }
    },
    computed: {
      texteVer: function () {
        return this.textoDeseado + ' concatenado:' + this.concatenar
      }
    }
}
</script>
