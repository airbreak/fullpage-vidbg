<template>
  <div class="header-box">
    <div class="left-box">
      <img class="logo" src="http://7xqnxu.com1.z0.glb.clouddn.com/FohqYNsxpHfQPPGxSDinylZwe8aH">
      <div class="nav-box">
      <!-- <el-menu :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect">
          <el-menu-item index="1"><router-link to="/home">首页1</router-link></el-menu-item>
          <el-menu-item index="2"><router-link to="/operation">运营1</router-link></el-menu-item>
          <el-menu-item index="3">司管</el-menu-item>
          <el-menu-item index="4">风控</el-menu-item>
          <el-menu-item index="5">客服</el-menu-item>
        </el-menu> -->
        <router-link v-for="item in permissionRouter"
          v-if="item.hidden!==false"
          :to="item.path"
          :key="item.path">{{item.name}}</router-link>
        <!-- <router-link to="/home">首页1</router-link>
        <router-link to="/operation">运营1</router-link>
        <router-link to="/operation1">司管</router-link>
        <router-link to="/operation2">风控</router-link>
        <router-link to="/operation3">客服</router-link> -->
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
