<template>
  <div>
    <sidebar></sidebar>
    <app-main></app-main>
  </div>
</template>

<script>
import AppMain from './components/AppMain'
import Sidebar from './components/Sidebar/index'
export default {
  data() {
    return {

    }
  },
  components :{
    AppMain,
    Sidebar
  }
}
</script>

<style scoped>
</style>
