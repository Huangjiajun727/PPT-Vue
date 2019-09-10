<template>
  <p class="isText">
    {{item.text}}
  </p>
</template>

<script>
  export default {
    data() {
      return {
        item: {}
      }
    },
    created() {
      this.initData();
    },
    mounted() {
      this.initData();
    },
    watch: {
      "$route": "initData"
    },
    methods: {
      initData() {
        this.item = JSON.parse(this.$route.query.item);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/../static/style/mixin';
  .isText {
    padding: 20px;
    margin: 50px auto;
    background: rgba(18, 183, 245, 0.5);

    @include wh(1400px, 850px);
    @include sc(26px,#000);
    @include borderRadius(16px);
  }
</style>
