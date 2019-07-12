<template lang="html">
  <div class="container">
      <div>
          <movie-index-header></movie-index-header>
      </div>
      <div class="contentMain">
          <div class="">
              <h1>电影名称</h1>
              <div class="viewNum">下载次数: </div>
          </div>
          <div class="">
              <button>点击下载</button>
          </div>
          <div >
              <img class="headerImg" src="" alt="">
          </div>
          <div class="btnPosition">
              <div class="SupportBtn">点赞</div>
          </div>
          <comment :movie_id="movie_Id"></comment>
      </div>
      <common-footer></common-footer>
  </div>
</template>

<script>
import CommonFooter from '@/components/CommonFooter'
import MovieIndexHeader from '@/components/MovieIndexHeader'
import Comment from '@/components/Comment'
export default {
  data() {
    return {
        movie_Id: ""
    }
  },
  methods: {

  },
  components: {
    CommonFooter,
    MovieIndexHeader,
    Comment
  }
}
</script>

<style lang="css" scoped>
.headerImg {
    height: 200px;
}
.container {
    width: 100%;
    margin: 0 auto;
}
.contentMain {
    padding-top: 150px;
}
.btnPosition {
    padding-left: 48%
}
.SupportBtn {
    width: 60px;
    border: 1px solid #000;
}
.viewNum {
    font-size: 10px;
}
</style>
