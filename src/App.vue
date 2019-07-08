<template lang="pug">
  #app
    #nav.flex.justify-between
      div.flex(@click="toggleListClicked")
        font-awesome-icon(icon="bars")
      div.flex
        router-link(to="/") Home |
        router-link(to="/about")  About
    router-view
</template>

<script>
  export default {
    methods: {
      toggleListClicked() {
        this.$store.commit('toggleListDisplay')
      }
    }
}
</script>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

#nav

  padding: .75rem
  a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
      color: #42b983
</style>
