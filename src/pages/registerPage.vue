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
            <label for="">重复输入密码</label>
            <input type="password" placeholder="重复密码">
        </div>
        <div class="box">
            <label for="">请输入手机号</label>
            <input type="text" placeholder="手机号">
        </div>
        <div class="box">
            <label for="">请输入邮箱</label>
            <input type="text" placeholder="邮箱">
        </div>
        <div class="box">
            <button>注册</button>
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
