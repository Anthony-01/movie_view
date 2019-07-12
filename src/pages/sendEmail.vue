<template lang="html">
  <div class="container">
      <movie-index-header></movie-index-header>
      <div class="main">

      </div>
      <common-footer></common-footer>
  </div>
</template>

<script>
import CommonFooter from '@/components/CommonFooter'
import MovieIndexHeader from '@/components/MovieIndexHeader'
import UserMessage from '@/components/UserMessage'
export default {
  data() {
    return {

    }
  },
  methods: {
    CommonFooter,
    MovieIndexHeader,
    UserMessage
  },
  components: {

  }
}
</script>

<style lang="css" scoped>
.container {
    width: 100%;
    margin: 0 auto;
}
.main {
    padding-top: 150px;
}
</style>
