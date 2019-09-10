<template>
  <figcaption id="textImg">
    <img class="bg" :src="item.imgUrl" alt="img">
    <figure :class="{'unit': item.header, 'article': item.article }">
      <h1 v-if="item.header">{{item.header}}</h1>
      <section class="article-con" v-if="item.article">
        <p v-for="(p,index) in item.article.p" :key="index + 'P'" v-html="p"></p>
        <span v-for="(span,index) in item.article.span" :key="index + 'S'" v-html="span"></span>
      </section>
    </figure>
  </figcaption>
</template>

<script>
  import {getStore, setStore} from '../config/mUtils'

  export default {
    data() {
      return {
        item: {}
      }
    },
    created() {
      if (getStore('content')) {
        this.item = getStore('content');
      } else {
        this.initData();
      }
    },
    mounted() {
      this.initData();
    },
    watch: {
      $route() {
        this.initData();
      }
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

  #textImg {
    position: relative;
    margin: 50px auto;
  }

  #textImg figure {

  }

  .unit {
    display: -webkit-box;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .unit h1 {
    display: inline;
    padding: 16px 28px;
    background: rgba(0, 0, 0, 0.5);

    @include sc(28px, #fff);
  }

  .article {
    display: -webkit-box;
    position: absolute;
    left: 10px;
    top: 10px;
    @include wh(100%, 100%);
  }

  .article-con > * {
    position: absolute;

    @include sc(44px,red);
    @include wh(380px, 210px);
  }

  .article-con p:nth-child(1) {
    left: 266px;
  }

  .article-con p:nth-child(2) {
    left: 20px;
    top: 335px;
  }

  .article-con span {
    left: 1003px;
    top: 99px;
  }

  .bg {
    @include wh(1400px, 850px);
  }


</style>
