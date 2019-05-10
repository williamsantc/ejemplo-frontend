<template>
  <b-row class="justify-content-center">
    <b-col md="6" sm="8">
      <b-form-group :label="titulo">
        <b-input v-model="nuevoDato" />
        <small>{{ subtitulo }}</small>
      </b-form-group>
      <b-btn variant="primary">Guardar</b-btn>
      <b-table :items="pokemones" :fields="campos" />
      <ejemplo-componente :texto-deseado="nuevoDato" />
    </b-col>
  </b-row>
</template>

<script>
import EjemploComponente from '../components/ejemploComponente'
export default {
  name: "VistaEjemplo",
  components: {
    EjemploComponente
  },
  data: function () {
    return {
      nuevoDato: 'hola mundo',
      titulo: 'texto titulo',
      subtitulo: '',
      pokemones: [],
      campos: [
        {key: 'ability.name', label: 'Nombre Habilidad'},
        'is_hidden'
      ]
    }
  },
  watch: {
    nuevoDato: function (newValue) {
      this.subtitulo = newValue.length > 10 ? 'Bien!' : ''
    }
  },
  created: async function () {
    try {
      const resp = await this.$http.get(
        "https://pokeapi.co/api/v2/pokemon/ditto/"
      )
      console.log(resp)
      this.pokemones = resp.data.abilities
    } catch (error) {
      console.log(error)
    }
    /*this.$http.get(
        "https://pokeapi.co/api/v2/pokemon/ditto/"
      ).then(resp => {
        
      }).catch(err => {

      })*/

      /* const prom = new Promise((resolve, reject) => {
        //.....
        setTimeout(() => {
          
        }, 6000);
        if(error) {
          return reject();
        }
        resolve();
      }) */
  }
}
</script>

<style>
</style>
