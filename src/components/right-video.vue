<template>
  <div id="video">
    <video class="myVideo" controls="controls">
      <source :src="item.videoUrl" type="video/mp4"/>
    </video>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        item: {}
      }
    },
    created() {
      this.initData()
    },
    mounted() {
      this.initData()
    },
    watch: {
      "$route": "initData"
    },
    methods: {
      initData() {
        this.item = JSON.parse(this.$route.query.item)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/../static/style/mixin';

  #video {
    margin: 50px auto;
  }

  .myVideo {
    @include wh(1400px, 850px);
    @include borderRadius(16px);
  }
</style>
