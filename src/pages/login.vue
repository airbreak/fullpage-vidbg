<template>
  <div id="login-wrapper">
    <div id="pageContain">

      <div class="page page1 current">
        <div class="contain">
            <el-button @click="showLoginModal">登录</el-button>
        </div>
      </div>

      <div class="page page2">
        <div class="contain">

        </div>
      </div>

      <div class="page page3" data-step="4" data-step-restart="0">
        <div class="contain">
          <p class="demo-data-step">data-step可以让你在不切屏的情况下更换动画</p>
        </div>
      </div>

      <div class="page page4">
        <div class="contain">

        </div>
      </div>

      <div class="page page5">
        <div class="contain">

        </div>
      </div>

      <div class="page page6">
        <div class="contain">

        </div>
      </div>
    </div>
    <ul id="navBar">
      <li>0</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
    <transition name="fade" mode="out-in">
      <div v-if="loginModalFlag" class="login-modal">
        <div class="login-box">
          <el-form
            :model="formData"
            status-icon
            :rules="rules"
            ref="loginForm"
            label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="account">
              <el-input v-model="formData.account" auto-complete="false"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input v-model="formData.pass" auto-complete="false" type="password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login('loginForm')">登录</el-button>
              <el-button type="primary" @click="close()">关闭</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import FullPage from '@/utils/fullPage.js'
import vidbg from '@/utils/vidbg.js'
import '@/styles/vidbg.css';
export default {
  name: 'login',
  data() {
    return {
      formData:{
        account: 'admin',
        pass: '123456'
      },
      rules: {
        account: [
          {required: true, message:'请输入账号', trigger:'blur'},
          {min: 3, max:10, message: '长度在3 - 10个字符', trigger: 'blur'}
        ],
        pass: [
          {required: true, message:'请输入密码', trigger:'blur'},
          {min: 3, max:10, message: '长度在3 - 10个字符', trigger: 'blur'}
        ]
      },
      loginModalFlag:false
    }
  },
  mounted (){
    this.$nextTick(() => {
      this.initFullPage()
      this.initVidbg()
    })
  },
  methods: {
    initFullPage() {
      let runPage;

      runPage = new FullPage({

        id : 'pageContain',                            // id of contain
        slideTime : 800,                               // time of slide
        continuous : false,                            // create an infinite feel with no endpoints
        effect : {                                     // slide effect
                transform : {
                  translate : 'Y',				   // 'X'|'Y'|'XY'|'none'
                  scale : [.1, 1],				   // [scalefrom, scaleto]
                  rotate : [0, 0]				       // [rotatefrom, rotateto]
                },
                opacity : [0, 1]                       // [opacityfrom, opacityto]
            },
        mode : 'wheel,touch,nav:navBar',               // mode of fullpage
          start : 0,                                     // which page will display when install
        easing : 'ease'                                // easing('ease','ease-in','ease-in-out' or use cubic-bezier like [.33, 1.81, 1, 1];
          //  ,onSwipeStart : function(index, thisPage) {   // callback before pageChange
          //    return 'stop';
          //  }
          //  ,beforeChange : function(index, thisPage) {   // callback before pageChange
          //    return 'stop';
          //  }
          //  ,callback : function(index, thisPage) {       // callback when pageChange
          //    alert(index);
          //  };
      });
    },
    initVidbg() {
       vidbg(document.getElementById('login-wrapper'), [
          {src: 'http://cf.cdn.vid.ly/3l6g3m/webm.webm', type: 'webm'},
          {src: 'http://cf.cdn.vid.ly/3l6g3m/mp4.mp4', type: 'mp4'},
          {src: 'http://cf.cdn.vid.ly/3l6g3m/ogv.ogv', type: 'ogg'}
        ], true);
    },
    showLoginModal() {
      this.loginModalFlag = true
    },
    login(formName) {
       this.$refs[formName].validate((valid)=>{
        if(valid) {
          this.$store.dispatch('LOGIN',this.formData).then(() => {
            this.$router.push({path:'/home'})
          })
        }
      })
    },
    close() {
      this.loginModalFlag = false
    }
  }
}
</script>

<style scoped>
  body {
    	width: 100%;
      *cursor: default;
    	overflow: hidden;
    	font: 16px/1.5 "Microsoft YaHei",Helvetica,STHeiti STXihei,Microsoft JhengHei,Arial;
    }
    #pageContain {
    	overflow: hidden;
    }
    .page {
    	display: none;
    	width: 100%;
    	height: 100%;
    	overflow: hidden;
    	position: absolute;
    	top: 0;
    	left: 0;
    }
    .contain {
    	width: 100%;
    	height: 100%;
    	display: none;
    	position: relative;
    	z-index: 0;
    }
    .current .contain,.slide .contain {
    	display: block;
    }
    .current {
    	display: block;
    	z-index: 1;
    }
    .slide {
    	display: block;
    	z-index: 2;
    }
    .swipe {
        display: block;
        z-index: 3;
        transition-duration: 0ms !important;
        -webkit-transition-duration: 0ms !important;
    }
    .page1 {
    	background-color: rgb(55, 193, 227, .4);
    }
    .page2 {
    	background-color: rgba(0, 153, 34,.4);
    }
    .page3 {
      background-color: rgb(153, 34, 17,.4);
    }
    .page4 {
    	background: #ff00ff;
    }
    .page5 {
    	background: #00ff00;
    }
    .page6 {
    	background: #22ffff;
    }
    #navBar {
    	z-index: 3;
    	position: absolute;
    	top: 10%;
    	right: 3%;
    }
    #navBar .active {
        background: #ccc;
    }
    #navBar li {
        cursor: pointer;
        margin-bottom: 10px;
        transition: all .7s ease;
        border-radius: 50%;
        line-height: 40px;
        text-align: center;
        width: 40px;
        height: 40px;
    }



    p {
        width: 200px;
        height: 100px;
        color:#fff;
        text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -100px;
        margin-top: -50px;
        opacity: 1;
        transition: all .8s ease;
        transform-origin: 50% 50%;
    }
    .step1 p {
        transform: translate(0, -50px);
        -webkit-transform: translate(0, -50px);
    }
    .step2 p {
        opacity: 0;
        transform: scale(2);
        -webkit-transform: scale(2);
    }
    .step3 p {
        transform: scale(1);
        -webkit-transform: scale(1);
        opacity: 1;
    }
    .step4 p {
        -webkit-transform: rotate(360deg) translate(0,-200px) scale(.3);
        transform: rotate(360deg) translate(0,-200px) scale(.3);
        opacity: 0;
    }

    .login-modal{
      position: fixed;
      z-index: 99999;
      left:0;
      top:0;
      bottom: 0;
      right: 0;
      background-color: rgba(0,0,0,0.7);

    }
     .login-box{
        position: absolute;
        top: 50%;
        left:50%;
        transform: translate(-50%, -50%);
        height: 350px;
        width: 500px;
        background-color: #fff;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
      }
      .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
      }
      .fade-enter, .fade-leave-to {
        opacity: 0;
      }
</style>
