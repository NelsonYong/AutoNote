<template>
  <div class="edu">
    <el-container>
      <el-header class="header">教育背景</el-header>
      <transition name="el-zoom-in-center">
        <el-main class="main transition-box" v-show="show">
          <div class="edu-info">
            <div class="item-title">
              <div class="label">毕业/就读学校:</div>
              <el-input placeholder="请输入学校名称" v-model="school" clearable>
              </el-input>
            </div>
            <div class="item-title">
              <div class="label">所在学院:</div>
              <el-input placeholder="请输入学院名称" v-model="school_item" clearable>
              </el-input>
            </div>

            <div class="block">
              <div class="label">毕业/就读日期:</div>
              <el-date-picker v-model="date" type="daterange" range-separator="至" start-placeholder="开始日期"
                end-placeholder="结束日期" value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>


            <div class="item-title">
              <div class="label">主修课程</div>
              <el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false"
                @close="handleClose(tag)">
                {{tag}}
              </el-tag>
              <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small"
                @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
              </el-input>
              <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>

            </div>

            <div class="item-title">
              <div class="label">平均绩点</div>
              <div class="block">
                <el-slider v-model="scroe" show-input :max=4 :step=0.01>
                </el-slider>
              
              </div>
            </div>

          </div>
          <el-row class="btn">
            <el-button type="primary" round @click="eduClick" class="btnItem">保存</el-button>
            <el-button type="info" round class="btnItem" @click="reset">取消</el-button>
          </el-row>
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
        type: 2,
        school: '',
        school_item: '',
        date: [],
        projects: '',
        scroe: 0,
        show: false,
        dynamicTags: ['JavaScript', 'Python', 'Java'],
        // eduinfo: {
        //   type: 2,
        //   school: '',
        //   school_item: '',
        //   date: '',
        //   projects: '',
        //   scroe: 0,
        // },
        inputVisible: false,
        inputValue: ''

      }
    },
    activated() {
      this.show = true
    },
    deactivated() {
      this.show = false
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },

      eduClick() {
        let eduinfo = {}
        eduinfo.type = 2
        eduinfo.school = this.school
        eduinfo.schoolItem = this.school_item
        eduinfo.date = this.date
        eduinfo.projects = this.dynamicTags
        eduinfo.scroe = this.scroe

        this.$store.commit('getEduInfo', eduinfo)
        this.$bus.$emit('loading')
        this.$bus.$emit('edu')
      },
      reset() {
        this.school = ''
        this.school_item = ''
        this.date = []
        this.projects = ''
        this.scroe = 0
        this.dynamicTags = ['JavaScript', 'Python', 'Java']

      }



    }
  }
</script>
<style scoped>
  .edu {
    width: 100%;
    height: 100vh;
  }

  .header {
    font-size: 30px;
  }

  .main {
    width: 65%;
    border-radius: 15px;
    background: #ffffff;
    box-shadow: 11px 11px 22px #c7c7c7,
      -11px -11px 22px #ffffff;

  }

  .item-title,
  .block {
    margin-top: 3vh;
  }

  .label {
    margin-bottom: 1vh;
    font-weight: 800;
  }

  .btn {
    margin-top: 2vh;
    display: flex;
    justify-content: space-around;
  }

  .el-tag+.el-tag {
    margin-left: 10px;
  }

  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }

  .btn {
    justify-content: flex-end;
  }
</style>