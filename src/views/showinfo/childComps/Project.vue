<template>
  <div class="projects">
    <div class="block">
      <el-timeline v-if="proInfo.length!=0">
        <el-timeline-item :timestamp="item.date[0]" placement="top" v-for="(item, index) in proInfo" :key="index">
          <el-card>
            <h4>项目名称:{{item.title}}</h4>
            <h4>所属业务:{{item.type}}</h4>
            <p>{{item.text}}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        proInfo: []
      }
    },

    mounted() {
      this.$bus.$on('project', () => {
        // this.header=this.baseInfo[this.baseInfo.length-1].key
        this.proInfo = this.$store.state.UserNote.projectInfo.info
       
      })

    }

  }
</script>
<style scoped>
  .projects {
    width: 100%;
    border-radius: 15px;
    background: #ffffff;
    box-shadow: 11px 11px 22px #c7c7c7,
      -11px -11px 22px #ffffff;

    padding: 2vw;


  }
</style>