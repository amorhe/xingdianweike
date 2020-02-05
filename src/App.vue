<template>
  <div id="app">
    <router-view />
    <Tabbar v-if="$route.meta.barShow" />
  </div>
</template>

<script>
  import Tabbar from '@/components/tabbar'
  export default {
    name: 'App',
    components:{
      Tabbar
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #1B1C31;
  }
  ul,li {list-style-type: none}
  img{
    content:'normal'!important;
    display: block;
  }
  .font_bold {
    font-weight: bold;
  }
  .tab_empty {
    height: 120px;
  }
  .buy_empty {
    height: 170px;
  }
  .tt {
    color: #191E32;
    font-size: 30px;
    font-weight: bold;
  }
  .dayuIcon {
    height: 24px;
    margin-left: 30px;
  }
  button,input {border: none;outline: none}
  a {
    color: inherit!important;
  }
</style>
