<template>
    <div id="box">
      <left></left>
      <transition name="router-slid" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
  import left from './left';
  import { getData } from "../mixin/mixin";

  export default {
    data() {
      return {

      }
    },
    components: {
      left
    },
    mixins: [ getData ],
    mounted() {

    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  @import '@/../static/style/mixin';

  #box {
    display: flex;
    flex-direction: row;
  }
</style>
