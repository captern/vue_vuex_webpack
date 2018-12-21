<template>
  <div class="titles-area">
    <div class="upper-view">
      <div class="chines">{{chinese}}</div>


      <div class="link" v-if="linkTitle">
        <a :href="link">{{linkTitle}}</a>
      </div>
    </div>

    <div class="english">{{english}}</div>
  </div>
</template>

<script>
  export default {
    props: {
      english: '',
      chinese: '',
      linkTitle: '',
      link: ''
    },
    data() {
      return {}
    },
    mounted() {
    },
    methods: {},
    components: {}
  }
</script>

<style lang="scss" scoped>
  .titles-area {
    position: relative;
    top: 0;
    .upper-view {
      display: flex;
      .chines, .link {
        flex: 1;
        height: 110px;
        line-height: 120px;
      }
      .chines {
        font-size: 48px;
      }
      .link {
        font-size: 36px;
        text-align: right;
        margin-top: -10px;
        a {
          font-size: 28px;
          color: #ffcd32;
          background-color: black;
          padding: 10px 20px;
          @include borderRadius(20px)
        }
      }
    }
    .english {
      position: absolute;
      top: 0;
      font-size: 96px;
      opacity: 0.4;
    }
  }
</style>

