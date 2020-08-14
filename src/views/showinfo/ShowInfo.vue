<template>
  <div class="show" :class="value?'isDark':''">
    <el-container>
      <el-header class="header">我的简历({{header}})
      </el-header>
      <transition name="el-zoom-in-center">
        <el-main class="main transition-box" v-show="show">
          <div class="content">
            <div class="title">
              <el-divider content-position="left">
                <div class="img"><img src="~assets/img/userinfo.png" alt=""></div>
                <div class="text">基本信息</div>
              </el-divider>
            </div>
            <Bases></Bases>
            <div class="title">
              <el-divider content-position="left">
                <div class="img"><img src="~assets/img/edu.png" alt=""></div>
                <div class="text">教育背景</div>
              </el-divider>
            </div>
            <Edu></Edu>
            <div class="title">
              <el-divider content-position="left">
                <div class="img"><img src="~assets/img/skill.png" alt=""></div>
                <div class="text">具备技能</div>
              </el-divider>
            </div>
            <Skill></Skill>
            <div class="title">
              <el-divider content-position="left">
                <div class="img"><img src="~assets/img/work.png" alt=""></div>
                <div class="text">工作经历</div>
              </el-divider>
            </div>
            <Work></Work>
            <div class="title">
              <el-divider content-position="left">
                <div class="img"><img src="~assets/img/project.png" alt=""></div>
                <div class="text">项目经历</div>
              </el-divider>
            </div>
            <Project></Project>
            <div class="title">
              <el-divider content-position="left">
                <div class="img"><img src="~assets/img/self.png" alt=""></div>
                <div class="text">自我评价</div>
              </el-divider>
            </div>
            <Self></Self>
          </div>
        </el-main>
      </transition>
    </el-container>


  </div>
</template>

<script>
  import Bases from 'views/showinfo/childComps/Base'
  import Edu from 'views/showinfo/childComps/Edu'
  import Work from 'views/showinfo/childComps/Work'
  import Skill from 'views/showinfo/childComps/Skill'
  import Project from 'views/showinfo/childComps/Project'
  import Self from 'views/showinfo/childComps/Self'
  export default {
    components: {
      Bases,
      Edu,
      Work,
      Skill,
      Project,
      Self
    },
    data() {
      return {
        show: false,
        baseInfo: [],
        eduInfo: {},
        value: false,
        header: ''
      }
    },
    mounted() {
      this.$bus.$on('header', (header) => {
        this.header = header

      })
    },
    // updated() {
    //   this.$nextTick(() => {
    //     this.$bus.$on('save', () => {
    //       // this.header=this.baseInfo[this.baseInfo.length-1].key
    //       // this.baseInfo = this.$store.state.UserNote.baseInfo.info
    //       // this.eduInfo = this.$store.state.UserNote.eduInfo
    //       console.log(666666)
    //     })
    //   })
    // },
    activated() {
      this.show = true
      // this.$bus.$emit('base')
      // this.$bus.$emit('edu')
      // this.$bus.$emit('project')
      // this.$bus.$emit('self')
      // this.$bus.$emit('skill')
      // this.$bus.$emit('work')
    },
    deactivated() {
      this.show = false
    },


  }
</script>
<style scoped>
  .header {
    font-size: 30px;
  }

  .content {
    width: 70%;
    display: flex;
    flex-direction: column;
    padding: 2vw;
  }

  .title {
    padding-top: 2vh;
    padding-bottom: 2vh;

  }

  .isDark {

    background-color: black;

  }

  .title {
    font-size: 1vw;
    margin-top: 0.2vw;
  }

  .img {
    width: 32px;
    height: 32px;
  }

  .img img {
    width: 100%;
    height: 100%;
  }

  .el-divider__text {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 800;
  }

  .text {
    padding-left: 0.6vw;
  }
</style>