<template>
  <div class="main" @click="changes">{{data}}</div>
</template>

<script>
export default {
  name: 'main',
  data() {
    return {
      data: 'main'
    }
  },
  methods: {
    changes () {
      this.data = 'this is main'
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../common/styles/varibale.styl'

.main
  padding 50px 0
  background blue
  font-size 30px
  text-align center
  color $fontcolor
</style>
