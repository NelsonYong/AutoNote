<template>
  <div class="work-info">
    <el-container>
      <el-header class="header">工作经历<i class="el-icon-circle-plus" @click="addTag"></i></el-header>
      <transition name="el-zoom-in-center">
        <el-main class="transition-box" v-show="show">
          <div class="content">
            <div class="item" v-for="(item, index) in workInfo" :key="index">
              <div class="title">
                <div class="label">工作介绍:</div>
                <el-input placeholder="请输入工作名称" v-model="item.title" clearable>
                </el-input>
              </div>
              <div class="date">
                <div class="block">
                  <div class="label">工作开始~结束时间:</div>
                  <el-date-picker v-model="item.date" type="daterange" range-separator="至" start-placeholder="开始日期"
                    end-placeholder="结束日期" value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
              </div>
              <div class="text">
                <div class="label">工作描述:</div>
                <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 10}" placeholder="请输入工作内容"
                  v-model="item.text" size="medium ">
                </el-input>
              </div>
            </div>
            <el-row class="btn">
              <el-button type="primary" round @click="workClick" class="btnItem">保存</el-button>
              <el-button type="info" round class="btnItem" @click="reset">取消</el-button>
            </el-row>
          </div>

        </el-main>
      </transition>
    </el-container>
  </div>
</template>

<script>
  import Btn from 'components/common/Btn'
  export default {
    components: {
      Btn
    },
    data() {
      return {
        workInfo: [{
          title: '',
          date: '',
          text: ''
        }],
        show: false,
        type: 3
      }
    },
    activated() {
      this.show = true
    },
    deactivated() {
      this.show = false
    },
    methods: {
      addTag() {
        let target = {
          title: '',
          date: '',
          text: ''
        }
        this.workInfo.push(target)

      },
      workClick() {
        let workInfo = {}
        workInfo.type = this.type
        workInfo.info = this.workInfo
        this.$store.commit('getWorkInfo', workInfo)
        this.$bus.$emit('loading')
        this.$bus.$emit('work')
      },
      reset() {
        for (let index = 0; index < this.workInfo.length; index++) {
          this.workInfo[index].title = ''
          this.workInfo[index].type = ''
          this.workInfo[index].text = ''
        }
        this.workInfo.splice(1, this.workInfo.length - 1)

      }
    }

  }
</script>
<style scoped>
  .header {
    font-size: 30px;
  }

  .work-info {
    z-index: 10;
  }

  .el-input__inner {
    z-index: 1;
  }

  .content {
    width: 60%;
  }

  .label {
    margin-bottom: 1vh;
    font-weight: 800;
    margin-top: 2vh;
  }

  .text {
    margin-bottom: 3vh;
  }

  .item {
    border-radius: 15px;
    background: #ffffff;
    box-shadow: 11px 11px 22px #c7c7c7,
      -11px -11px 22px #ffffff;

    padding: 2vw 2vw 2vw 2vw;
    margin-bottom: 3vh;
    margin-left: 5vw;


  }

  .btn {
    display: flex;
    justify-content: flex-end;
  }
</style>