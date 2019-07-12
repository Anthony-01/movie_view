<template lang="html">

  <div class="newList">
      <router-link :to="newSrc" class="good-list-link">

      </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
        newSrc: ''
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="css" scoped>
    .newList {
        padding: 5px;
        border-bottom: 1px dashed #ababab;
    }
</style>
