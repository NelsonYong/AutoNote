<template>
  <div class="work">
    <div class="block">
      <el-timeline v-if="workInfo.length!=0">
        <el-timeline-item :timestamp="item.date[0]" placement="top" v-for="(item, index) in workInfo" :key="index">
          <el-card>
            <h4>工作名称:{{item.title}}</h4>
            <h4>工作介绍:</h4>
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
        workInfo: [],
       
      }
    },

    mounted() {
      this.$bus.$on('work', () => {
        // this.header=this.baseInfo[this.baseInfo.length-1].key
        this.workInfo = this.$store.state.UserNote.workInfo.info
        console.log(this.workInfo)
      })

    }

  }
</script>
<style scoped>
  .work {
    width: 100%;
    border-radius: 15px;
    background: #ffffff;
    box-shadow: 11px 11px 22px #c7c7c7,
      -11px -11px 22px #ffffff;

    padding: 2vw;


  }
</style>