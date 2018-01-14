<template>
  <div>
    <span>counter: {{counter}}</span>
    <button @click="counter++">Increment</button>
  </div>
</template>

<script>
export default {
  name: 'counter-component',
  data: () => ({
    counter: 0
  })
}
</script>
