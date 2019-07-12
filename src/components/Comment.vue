<template lang="html">
  <div>
      <label>评论</label>
      <hr>
      <div>
          <li v-for="item in items">XXX 评论: XXX</li>
      </div>
      <div style="padding:5px">
          <textarea style="width: 80%;height: 50px" placeholder="内容" v-model="content"></textarea>
      </div>
      <div style="paddding-top: 10px">
          <button>评论</button>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        items: [
            {comment: "test1"},
            {comment: "test1"},
            {comment: "test1"},
            {comment: "test1"},
            {comment: "test1"}
        ],
        content: ''
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="css" scoped>

</style>
