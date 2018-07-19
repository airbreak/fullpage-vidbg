<template>
  <div class="header-box">
    <div class="left-box">
      <img class="logo" src="https://dummyimage.com/80x80/4A7BF7&text=%E5%BE%97%E9%9F%AC">
      <div class="nav-box">
        <router-link v-for="item in permissionRouter"
          v-if="item.hidden!==false"
          :to="item.path"
          :key="item.path">{{item.name}}</router-link>
      </div>
    </div>
    <div class="user-info-box">
      <img :src="avatar">
      <span>{{name}}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'home',
  data() {
    return {
      activeIndex: '1'
    }
  },
  computed: {
    ...mapGetters([
      'avatar',
      'name',
      'permissionRouter'
    ])
  },
  methods: {
    handleSelect(key, keyPath){
      console.log(key,keyPath)
    }
  }
}
</script>

<style scoped lang="scss">
  .header-box{
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    .left-box{
      display: flex;
      align-items: center;
      .logo{
        height: 70px;
      }
      .nav-box{
        height: 100%;
        margin-left: 30px;
        a {
          text-decoration: none;
          color: #3a4145;
          margin-right: 30px;
          &.router-link-active{
            color:rgb(255, 208, 75);
          }
        }
      }
    }
    .user-info-box{
      display: flex;
      align-items: center;
      img{
        height: 40px;
        width: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }

  .iframe-box{
    // padding-top: 70px;
    box-sizing: border-box;
  }
</style>
