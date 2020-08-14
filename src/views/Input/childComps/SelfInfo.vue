<template>
  <div class="self-info">
    <el-container>
      <el-header class="header">自我评价</el-header>
      <transition name="el-zoom-in-center">
        <el-main class="main transition-box" v-show="show">
          <div class="content" id="self">
            <div class="label">性格/工作态度/抗压能力/学习到什么:</div>
            <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 10}" placeholder="请输入自我介绍内容" v-model="selftext"
              size="medium ">
            </el-input>
            <el-row class="btn">
              <el-button type="primary" round @click="selfClick" class="btnItem">保存</el-button>
              <el-button type="info" round class="btnItem" @click="reset">取消</el-button>
            </el-row>
          </div>

          <div class="submit">
            <div class="sub-btn">
              <el-button type="primary" round class="btnItem sub-btn-item" @click="subAll">全部提交到服务器</el-button>
            </div>
          </div>

          <div class="lizi">
            <p>示例</p>
            <p>本人为人诚恳、乐观向上、拥有较强的组织能力和适应能力。
              热爱程序开发工作，具备一定的软件分析、设计、开发和应用能力，拥有较强的学习能力和团队协作精神，能快速适应工作环境。
              能适应高强度工作，有耐心有毅力，对新技术有着强烈的追求。
              对工作保持高度热情，有着良好的心态的较好的抗压能力。
              全身心投入并以真诚负责的态度对待工作，寻求自我价值的不断提升。</p>
          </div>
        </el-main>
      </transition>
    </el-container>
  </div>
</template>

<script>
  import Btn from 'components/common/Btn'
   import {
    PushData
    // getGoodsData
  } from 'network/data.js'

  export default {
    components: {
      Btn
    },
    data() {
      return {
        selftext: '',
        show: false,
        type: 6
      }
    },
    activated() {
      this.show = true
    },
    deactivated() {
      this.show = false
    },
    methods: {
      selfClick() {
        let selfInfo = {}
        selfInfo.type = this.type
        selfInfo.info = this.selftext
        this.$store.commit('getSelfInfo', selfInfo)
        this.$bus.$emit('loading')
        this.$bus.$emit('self')
      },

      reset() {
        this.selftext = ''
      },

      subAll(){

        PushData(this.$store.state.UserNote).then(res=>{
          console.log(res)
        })

      }

    }

  }
</script>
<style scoped>
  .header {
    font-size: 30px;
  }

  .content {
    width: 50%;
    border-radius: 15px;
    background: #ffffff;
    box-shadow: 11px 11px 22px #c7c7c7,
      -11px -11px 22px #ffffff;

    padding: 2vw;
  }

  .label {
    margin-bottom: 1vh;
    font-weight: 800;
    margin-top: 2vh;
  }

  .btn {
    margin-top: 2vh;
    justify-content: flex-end;
  }

  .lizi {
    margin-top: 10vh;
    width: 50%;
    border-radius: 15px;
    background: #ffffff;
    box-shadow: 11px 11px 22px #c7c7c7,
      -11px -11px 22px #ffffff;

    padding: 2vw;
  }

  .submit {
    display: flex;
    width: 50%;
    justify-content: center;

  }

  .sub-btn {
    margin-top: 6vh;

    width: 50%;

  }

  .sub-btn-item {
    width: 100%;
    font-size: 1.3vw;
  }
</style>