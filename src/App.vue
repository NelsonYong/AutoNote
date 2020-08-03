<template>
  <div id="app" :class="value?'isDark':''">
    <el-container>
      <el-aside width="25vw">
        <MainBar></MainBar>

      </el-aside>
      <el-main width="75vw" v-loading="loading">
        <!-- <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949" class="choose">
        </el-switch> -->
        <keep-alive>
          <router-view :key="$route.fullPath" />
        </keep-alive>
      </el-main>
    </el-container>
  </div>
</template>
<script>
  import MainBar from 'components/common/MainBar'
  export default {
    components: {
      MainBar
    },
    data() {
      return {
        loading: false,
        value: false
      }
    },
    mounted() {
      this.$bus.$on('loading', () => {
        this.loading = true
        new Promise((reslove, reject) => {
          setTimeout(() => {
            this.loading = false
          }, 2000)
          reslove('success')
        }).then((res) => {
          console.log(res)
          this.$notify({
            showClose: true,
            duration: 1000,
            message: '保存成功',
            type: 'success'
          })
        })
      })
    },
  }
</script>

<style>
  @import 'assets/css/base.css';
  

  .app {
    width: 100%;
    height: 100%;
  }

  .el-icon-circle-plus:active {
    transform: scale(1.3);
  }

  .choose {
    position: fixed;
    top: 1vh;
    left: 60vw;
    z-index: 1000;

  }

  .isDark {
    background-color: black;
   
  }
</style>