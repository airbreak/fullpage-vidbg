<template>
  <div class="wrapper-box">
    <!-- home -->
    <iframe src="http://localhost:8080/#/login" ref="iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="100%" height="100%" @load="vueFunc"></iframe>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {

    }
  },
  methods: {
    vueFunc() {
      try {
        setTimeout(() => {

          let autoHeight = this.$refs.iframe.contentWindow.document.documentElement.scrollHeight;
          this.$refs.iframe.style.height = autoHeight + "px";

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
    height: 100%
  }
</style>
