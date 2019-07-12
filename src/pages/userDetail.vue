<template lang="html">
  <div class="container">
      <MovieIndexHeader></MovieIndexHeader>
      <user-message class="userMessage"></user-message>
      <div class="main">

      </div>
      <CommonFooter></CommonFooter>
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

  },
  components: {
    CommonFooter,
    MovieIndexHeader,
    UserMessage
  }
}
</script>

<style lang="css" scoped>
.container {
    width: 100%;
    margin: 0 auto;
}
.userMessage {
    padding-top: 60px;
    margin-top: -10px;
    margin-left: -10px;
}
.main {
    padding-top: 150px;
}
.box {
    display: flex;
    justify-content: center;
    padding-top: 10px;
}
</style>
