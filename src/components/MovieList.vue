<template lang="html">
  <div class="movieList">
      <div>
        
        <router-link :to="movieSrc" class="goods-link-list">
          
        </router-link>  
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieSrc: ''
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="css" scoped>
.movieList {
  padding: 5px;
  border-bottom: 1px dashed #ababab;
}
</style>
