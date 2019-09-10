<template>
  <div id="left-wrapper" class="left-wrapper">
    <ul class="left-ul">
      <li v-for="(item,index) in leftList" :key="index" class="left-li" :class="{activity: index == menuIndex, endLast: index == leftList.length-1}"
          @click="chooseMenu(index)">
        <router-link class="left-li-a" :to="{path: item.router, query:{item: JSON.stringify(item)}}">
          <figcaption class="isTextImg" v-if="item.isTextImg" :title="item.title">
            <img :src="item.imgUrl" alt="img">
            <figure :class="{'unit': item.header, 'article': item.article }">
              <h1 v-if="item.header">{{item.header}}</h1>
              <section class="article-con" v-if="item.article">
                <p v-for="(p,index) in item.article.p" :key="index + 'P'" v-html="p"></p>
                <span v-for="(span,index) in item.article.span" :key="index + 'S'" v-html="span"></span>
              </section>
            </figure>
          </figcaption>
          <p class="isText" v-if="item.isText">
            {{item.text}}
          </p>
          <figcaption class="isVideo" v-if="item.isVideo" :title="item.title">
            <img :src="item.videoImg" alt="img">
            <figure>
              <p>{{item.videoText}}</p>
            </figure>
          </figcaption>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import {getStore, setStore} from '../config/mUtils'
  import {getData} from "../mixin/mixin"
  import BScroll from 'better-scroll'

  export default {
    data() {
      return {
        leftScroll: null,
        menuIndex: 0,
        timer: null
      }
    },
    mixins: [getData],
    methods: {
      chooseMenu(index) {
        this.menuIndex = index
      },
      addIndex() {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          if (this.menuIndex < this.leftList.length - 1) {
            this.menuIndex = ++this.menuIndex;
            this.$router.push({
              path: this.leftList[this.menuIndex].router,
              query: {item: JSON.stringify(this.leftList[this.menuIndex])}
            })
            this.leftScroll.next();
          }
        },250);
      },
      reduceIndex() {
        clearTimeout(this.timer);
        if (this.menuIndex > 0) {
          this.timer = setTimeout(() => {
            this.menuIndex = --this.menuIndex;
            this.$router.push({
              path: this.leftList[this.menuIndex].router,
              query: {item: JSON.stringify(this.leftList[this.menuIndex])}
            })
            this.leftScroll.prev();
          },250);
        }
      },
      windowAddMouseWheel(e) {
        e = e || window.event
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
          if (e.wheelDelta > 0) { //当滑轮向上滚动时
            this.reduceIndex();

          }
          if (e.wheelDelta < 0) { //当滑轮向下滚动时

            this.addIndex();
          }
        } else if (e.detail) {  //Firefox滑轮事件
          if (e.detail > 0) { //当滑轮向上滚动时
            this.reduceIndex();
          }
          if (e.detail < 0) { //当滑轮向下滚动时
            this.addIndex();
          }
        }
      },
      listen() {
        if (document.addEventListener) {
          window.addEventListener('mousewheel', this.windowAddMouseWheel, false);
        }
        window.addEventListener("DOMMouseScroll", this.windowAddMouseWheel, false);
      },
      initScroll() {
        this.leftScroll = new BScroll('#left-wrapper', {
          probeType: 3,
          deceleration: 0.001,
          swipeTime: 2000,
          click: true,
          scrollbar: {
            fade: true,
            interactive: false
          },
          mouseWheel: true,
          snap: {
            loop: false,
            threshold: 0.1,
            stepY: 250,
          }
        });
      },
    },
    created() {
      setStore('content', this.leftList[0]);
      this.menuIndex = getStore('index');
    },
    mounted() {
      this.listen();

      this.initScroll();
    },
    watch: {
      menuIndex() {
        setStore('index',this.menuIndex);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/../static/style/mixin';

  #left-wrapper {
    padding: 10px;
    width: 400px;
    height: 940px;
    overflow: hidden;
    border-right: 2px solid #ccc;
    background: #fff;
    flex-shrink: 0;
  }

  .left-li-a > * {
    padding: 10px;
    width: 100%;

    @include borderRadius(6px);
  }

  .left-li:hover {
    background-color: #ccc;
  }

  .activity {
    background-color: #ccc;
  }

  .left-ul {
    padding: 20px 0;
  }

  .left-li {
    margin: 20px auto;
    text-align: left;
  }

  .left-li img {
    width: 100%;
  }

  .isTextImg, .isVideo {
    position: relative;
  }

  .unit {
    display: -webkit-box;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  .unit h1 {
    display: inline;
    padding: 16px 28px;
    background: rgba(0, 0, 0, 0.5);

    @include sc(12px, #fff);
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

    @include sc(12px,red);
    @include wh(90px, 50px);
  }

  .article-con p:nth-child(1) {
    left: 80px;
  }

  .article-con p:nth-child(2) {
    left: 20px;
    top: 105px;
  }

  .article-con span {
    left: 265px;
    top: 35px;
  }

  .isText {
    background: rgba(18, 183, 245, 0.5);
  }

</style>
