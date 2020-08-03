<template>
  <div class="input">
    <el-container>
      <el-header class="header">基本信息</el-header>
      <transition name="el-zoom-in-center">
        <el-main class="main transition-box" v-show="show">
          <InputUserImage class="image"></InputUserImage>
          <BaseInfo></BaseInfo>
        </el-main>
      </transition>
    </el-container>
  </div>
</template>

<script>
  import InputUserImage from 'views/Input/childComps/InputUserImage'
  import BaseInfo from 'views/Input/childComps/BaseInfo'
  export default {
    components: {
      InputUserImage,
      BaseInfo
    },
    data() {
      return {
        show: false
      }
    },
    activated() {
      this.show = true
    },
    deactivated() {
      this.show = false
    },

   

    methods: {
      imagLoad(url){
        console.log(url)
      }
    }

  }
</script>
<style scoped>
  .input {
    width: 100%;
  }

  .test1 {
    width: 50%;
  }

  .el {
    margin-bottom: 10px;
  }

  .header {
    font-size: 30px;
  }

  .main {

    display: flex;

  }

  .image {
    margin-top: 3vh;
  }
</style>