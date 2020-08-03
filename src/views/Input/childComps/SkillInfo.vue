<template>
  <div class="skill">
    <el-container>
      <el-header class="header">具备技能<i class="el-icon-circle-plus" @click="addTag"></i></el-header>
      <transition name="el-zoom-in-center">
        <el-main class="main transition-box" v-show="show">
          <div class="content">
            <ul>
              <li v-for="(item, index) in SkillInfo" :key="index">
                <div class="item">
                  <div class="input">
                    <el-input placeholder="请输入技能名称" v-model="item.skill" clearable>
                    </el-input>
                  </div>
                  <div class="icon">
                    <el-rate v-model="item.val" show-text :texts="['了解','基础','熟悉','掌握','熟练']">
                    </el-rate>
                  </div>
                </div>
              </li>
            </ul>
            <el-row class="btn">
              <el-button type="primary" round @click="skillClick" class="btnItem">保存</el-button>
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
        // value: 1,
        SkillInfo: [{
          skill: '',
          val: 1
        }],
        show: false,
        type: 4
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
        let test = {
          skill: '',
          val: 1
        }
        this.SkillInfo.push(test)
      },
      skillClick() {
        let skillInfo = {}
        skillInfo.type = this.type
        skillInfo.info = this.SkillInfo
        this.$store.commit('getSkillInfo', skillInfo)
        this.$bus.$emit('loading')
        this.$bus.$emit('skill')
      },
      reset() {
        this.SkillInfo.splice(1, this.SkillInfo.length - 1)
        this.SkillInfo[0].skill = ''
        this.SkillInfo[0].val = 1
      }
    }

  }
</script>
<style scoped>
  .header {
    font-size: 30px;
  }

  .content {
    width: 60%;
    border-radius: 15px;
    background: #ffffff;
    box-shadow: 11px 11px 22px #c7c7c7,
      -11px -11px 22px #ffffff;

    padding: 2vw;

  }

  .item {
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3vh;
  }

  .btn {
    display: flex;
    justify-content: flex-end;
  }
</style>