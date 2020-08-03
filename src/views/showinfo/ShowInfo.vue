<template>
  <div class="show" :class="value?'isDark':''">
    <el-container>
      <el-header class="header">我的简历({{header}})
      </el-header>
      <transition name="el-zoom-in-center">
        <el-main class="main transition-box" v-show="show">
          <div class="content">
            <div class="title">基本信息</div>
            <Bases></Bases>
            <div class="title">教育背景</div>
            <Edu></Edu>
            <div class="title">工作经历</div>
            <Work></Work>
            <div class="title">具备技能</div>
            <Skill></Skill>
            <div class="title">项目经历</div>
            <Project></Project>
            <div class="title">自我评价</div>
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
</style>