<template>
 <!-- demo content -->
  <div class="fullpage-container">
    <div class="fullpage-wp" v-fullpage="opts">
      <div class="page-1 page">
        <p class="part-1" v-animate="{value: 'bounceInLeft'}">vue-fullpage1</p>
      </div>
      <div class="page-2 page">
        <p class="part-2" v-animate="{value: 'bounceInRight'}">vue-fullpage2</p>
      </div>
      <div class="page-3 page">
        <p class="part-3" v-animate="{value: 'bounceInLeft', delay: 0}">vue-fullpage3</p>
        <p class="part-3" v-animate="{value: 'bounceInRight', delay: 600}">vue-fullpage3</p>
        <p class="part-3" v-animate="{value: 'zoomInDown', delay: 1200}">vue-fullpage3</p>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      opts: {
        navigation:true,
        navigationPosition:'right',
        start: 0,
        dir: 'v',
        duration: 500,
        beforeChange (prev, next){
          console.log('before')
        },
        afterChage (pre,next){
          console.log('after')
        }
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.page p {
  display: block;
  text-align: center;
  font-size: 26px;
  color: #eee;
}
.page-1 {
  padding-top: 100px;
  background: #1bbc9b;
}
.page-2 {
  padding-top: 100px;
  background: #000000;
}
.page-3 {
  padding-top: 50px;
  background: #aabbcc;
}
</style>
