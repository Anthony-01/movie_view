<template lang="html">
  <div class="container">
      <MovieIndexHeader></MovieIndexHeader>
      <div class="main">
        <div class="box">
            <label for="">请输入用户名:</label>
            <input type="text" placeholder="用户名">
        </div>
        <div class="box">
            <label for="">请输入密码:</label>
            <input type="password" placeholder="密码">
        </div>
        <div class="box">
            <button>登录</button>
            <button style="margin-left: 10px" @click="greet">注册</button>
            <button style="margin-left: 10px">忘记密码</button>
        </div>
      </div>
      <CommonFooter></CommonFooter>
  </div>
</template>

<script>
import CommonFooter from '@/components/CommonFooter'
import MovieIndexHeader from '@/components/MovieIndexHeader'
export default {
  data() {
    return {

    }
  },
  methods: {
      greet: function(event) {
          console.log(event.target);
          if (event) {
              alert(event.target.tagName);
          }
      }
  },
  components: {
    CommonFooter,
    MovieIndexHeader
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
.box {
    display: flex;
    justify-content: center;
    padding-top: 10px;
}
</style>
