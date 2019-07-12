<template lang="html">
  <div class="headerPic">
    <div>
      <p class="imgTitle">{{recommandTitle}}</p>
      <a href="baidu.com">
        <img :src="path" class="headerImg"/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: "/static/imgs/bg.b160810.png",
      recommandTitle: "曾经熟悉的画面"
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="css" scoped>
  .headerPic {
    height: 300px;
    width: 100%;
    background-color: antiquewhite;
  }

  .headerImg {
    height: 300px;
    width: 100%;
  }

  .imgTitle {
    z-index: 2;
    padding-left: 45%;
    padding-top: 230px;
    position: absolute;
    color: #fff;
    font-size: 20px;
  }
</style>


