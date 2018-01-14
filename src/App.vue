<template>
  <div id="app">
    <Counter />
    <CounterWithVuex/>
    <LeakyBucket />
  </div>
</template>

<script>
import CounterWithVuex from './components/CounterWithVuex'
import Counter from './components/Counter'
import LeakyBucket from './components/LeakyBucket'

export default {
  name: 'app',
  components: {
    CounterWithVuex,
    Counter,
    LeakyBucket
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
