<template>
  <div class="wrapper-box">
    <iframe v-show="loadedFlag" v-loading="!loadedFlag" class="iframe-box" src="https://devd.bmkp.cn/enterpriseVehicle/index.html#/index" ref="iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="100%" height="100%" @load="vueFunc"></iframe>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      loadedFlag:false
    }
  },
  methods: {
    vueFunc() {
      try {
        setTimeout(() => {
          let autoHeight = document.documentElement.scrollHeight
          this.$refs.iframe.style.minHeight = autoHeight - 90 + "px"
          this.loadedFlag = true
        }, 20);
      } catch (err) {
        　　console.log("vueFunc ");
      }
    },
  }
}
</script>

<style scoped lang="scss">
  .wrapper-box{
    height: 100%;
    overflow-y: auto;
    .nav-box{
      height: 61px;
    }
    .iframe-box{
      // padding-top: 70px;
      box-sizing: border-box;
    }
  }
</style>
