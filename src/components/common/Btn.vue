<template>
  <el-row class="btn">
    <el-button type="primary" round @click="btnClick" class="btnItem">保存</el-button>
    <el-button type="info" round class="btnItem">取消</el-button>
  </el-row>
</template>

<script>
  export default {
    props: {
      type: Number
    },

    methods: {
      btnClick() {
        console.log(this.type)
      }
    }


  }
</script>
<style scoped>
  .btn {
    display: flex;
    justify-content: space-around;
  }

  .btnItem:active {
    transform: scale(1.2);
  }
</style>