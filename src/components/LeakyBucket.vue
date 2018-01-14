<template>
  <div>
    <h1>{{title || 'User details'}}</h1>
    <user-details v-if="user" :user="user" />
    <spinner v-else />
  </div>
</template>

<script>
export default {
  beforeMount () {
    this.$http.get('/user')
      .then((user) => {
        this.user = user
      })
  },
  data: () => ({
    user: null
  }),
  props: ['title']
}
</script>
