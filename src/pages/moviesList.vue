<template lang="html">
  <div class='container'>
      <div>
          <movie-index-header></movie-index-header>
      </div>
      <div class="contentMain">
          <div>
              <div class="contentLeft">
                  <ul class="cont-ul">
                      <movie-list></movie-list>
                  </ul>
              </div>
          </div>
          <!-- <div>
              <div class="contentRight">
                  <ul class="cont-ul">

                  </ul>
              </div>
          </div> -->
          <common-footer></common-footer>
      </div>
  </div>
</template>

<script>
import CommonFooter from '@/components/CommonFooter'
import MovieIndexHeader from '@/components/MovieIndexHeader'
import MovieList from '@/components/MovieList'
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
    MovieList
  }
}
</script>

<style lang="css" scoped>
    .container {
        width: 100%;
        margin: 0 auto
    }
    .contentMain {
        padding-top: 150px;
    }
    .contentText {
        font-size: 15px;
        padding-top: 20px;
    }
</style>
