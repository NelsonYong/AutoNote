<template>
  <div class="skill">
    <div class="content" v-if="SkillInfo.length!=0">
      <div class="skillItem" v-for="(item, index) in SkillInfo" :key="index">
        <div class="title">{{item.skill}}</div>
        <div class="val">
          <el-rate v-model="item.val" show-text :texts="['了解','基础','熟悉','掌握','熟练']" disabled="true">
          </el-rate>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        SkillInfo: []
      }
    },
    mounted() {
      this.$bus.$on('skill', () => {
        // this.header=this.baseInfo[this.baseInfo.length-1].key
        this.SkillInfo = this.$store.state.UserNote.skillInfo.info
        console.log(this.baseinfo)
      })

    },

  }
</script>
<style scoped>
  .skill {
    width: 100%;

    border-radius: 15px;
    background: #ffffff;
    box-shadow: 11px 11px 22px #c7c7c7,
      -11px -11px 22px #ffffff;

    padding: 2vw;

    display: flex;
    flex-direction: column;
  }

  .content{
    width: 100%;
  }

  .skillItem {
    display: flex;
    height: 5vh;
    flex-direction: row;
    align-items: center;
  }

  .title {
    width: 20%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-weight: 800;
    padding-right: 0.5vw;


  }
</style>