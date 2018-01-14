<template>
  <div class="counter">
    <span>counter: {{counter}}</span>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  computed: {
    counter () {
      return this.$store.state.counter
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    }
  }
}
</script>
