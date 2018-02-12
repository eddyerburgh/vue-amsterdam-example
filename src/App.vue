<template>
  <div id="app">
    <modal-component
      :visible="displayModal"
      :close="closeModal"
    >
      Hello, World!
    </modal-component>
  </div>
</template>

<script>
import ModalComponent from './components/Modal'

export default {
  name: 'app',
  components: {
    ModalComponent
  },
  data () {
    return {
      displayModal: true
    }
  },
  methods: {
    closeModal () {
      this.displayModal = false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
