<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return  {
      transitionName:''
    }
  },
   watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
}
</script>

<style>
html {
  -ms-touch-action: none;  /* 阻止windows Phone 的默认触摸事件 */
}
body {
  margin: 0;
  padding: 0;
}
#app {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
ul {
    list-style: none;
}
</style>
