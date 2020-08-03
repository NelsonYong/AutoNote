<template>
  <div class="base-info">
    <div class="item" v-for="(item, index) in baseInfo" :key="index">
      <div class="title"><span>{{item.title}}:</span></div>
      <el-input :placeholder="'请输入'+item.title" v-model="item.key" clearable v-if="index==1||index==2"
        :maxlength="index==1?'3':'11'" suffix-icon="el-icon-success" class="input">
      </el-input>

      <el-input :placeholder="'请输入'+item.title" v-model="item.key" clearable v-else>
      </el-input>
    </div>
    <el-row class="btn">
      <el-button type="primary" round @click="baseClick" class="btnItem">保存</el-button>
      <el-button type="info" round class="btnItem" @click="reset">取消</el-button>
    </el-row>
  </div>
</template>

<script>
  import Btn from 'components/common/Btn'
  import {
    getHomeMultiData
    // getGoodsData
  } from 'network/home.js'
  export default {
    components: {
      Btn
    },

    data() {
      return {

        name: '',
        type: 1,
        baseInfo: [{
            title: '姓名',
            key: ''
          },
          {
            title: '年龄',
            key: ''
          },
          {
            title: '联系方式',
            key: ''
          },
          {
            title: '籍贯',
            key: ''
          },
          {
            title: '学历',
            key: ''
          },
          {
            title: '所学专业',
            key: ''
          },
          {
            title: '应聘的岗位',
            key: ''
          }
        ]
      }
    },
    created() {
      // getHomeMultiData().then(res => {
      //   console.log(res)
      // })

    },


    methods: {
      baseClick() {

        let baseinfo = {}
        baseinfo.type = this.type
        baseinfo.info = this.baseInfo
        this.$store.commit('getBaseInfo', baseinfo)
        this.$bus.$emit('loading')
        this.$bus.$emit('base')

        this.$bus.$emit('header', this.baseInfo[this.baseInfo.length-1].key)
      },
      reset() {
        for (let index = 0; index < this.baseInfo.length; index++) {
          this.baseInfo[index].key = ''
        }
      }

    }

  }
</script>
<style scoped>
  .base-info {
    width: 30%;
    margin-left: 5vw;
    padding: 2vw;
    border-radius: 15px;
    background: #ffffff;
    box-shadow: 11px 11px 22px #c7c7c7,
      -11px -11px 22px #ffffff;


  }

  .item {
    margin-bottom: 2vh;
  }

  .title {
    margin-bottom: 0.5vh;
    font-weight: 800;
  }

  .btn {
    display: flex;
    justify-content: space-around;
  }

  .el-icon-success {
    color: lightgreen;
  }
</style>