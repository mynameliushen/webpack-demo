<template>
  <div>
    <v-header></v-header>
    <v-main></v-main>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VHeader from './pages/header.vue'
import VMain from './pages/main.vue'
import VFooter from './pages/footer.vue'
export default {
  name: 'App',
  components: {
    VHeader,
    VMain,
    VFooter
  }
}
</script>
<style lang="stylus" scoped>
</style>
