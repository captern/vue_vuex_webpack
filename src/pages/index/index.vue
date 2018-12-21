<template>
  <div class="index">
    <!--<div v-if="recommends.length" class="slider-wrapper">-->
      <!--<div class="slider-content">-->
        <slider ref="slider">
          <div v-for="item in recommends">
            <a :href="item.linkUrl">
              <!--<img @load="loadImage" :src="item.picUrl">-->
              <img :src="item.picUrl">
            </a>
          </div>
        </slider>
      <!--</div>-->
    <!--</div>-->
    <TwoLanguageTitle english='Product' chinese='产品' linkTitle='查看更多' link="/title"></TwoLanguageTitle>
    <TwoLanguageTitle english='Walkthrough' chinese='攻略'></TwoLanguageTitle>
  </div>
</template>

<script>
  import {sliderItems, searchplace} from '../../server/api'
  import Slider from '../../base/slider/slider'
  import TwoLanguageTitle from '../../components/twoLanguageTitle'

  export default {
    data() {
      return {
        recommends: [
          {
            linkUrl: 'http://y.qq.com/w/album.html?albummid=000zQSi93tJtgY',
            picUrl: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1075114.jpg'
          },
          {
            linkUrl: 'https://y.qq.com/m/act/TNTB/index.html?openinqqmusic=1&ADTAG=jiaodiantu',
            picUrl: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/983421.jpg'
          }
        ]
      }
    },
    mounted() {
      sliderItems().then(res => {
        console.log(res)
        console.log(res)
        console.log(res)
      })
      searchplace('qqq', 'www').then(res => {
        console.log(res)
      })
    },
    methods: {},
    components: {
      Slider,
      TwoLanguageTitle
    }
  }
</script>

<style lang="scss" scoped>
  .slider-wrapper {

    .slider-content {

    }

  }
</style>

