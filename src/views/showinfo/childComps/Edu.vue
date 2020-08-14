<template>
  <div class="eduinfo" v-if="eduInfo!=null">
    <div class="item">
      <div class="title">毕业/就读学校:</div>
      <div class="value">{{eduInfo.school}}</div>
    </div>
    <div class="item">
      <div class="title">所在学院:</div>
      <div class="value">{{eduInfo.schoolItem}}</div>
    </div>
    <div class="item">
      <div class="title">毕业/就读日期:</div>
      <div class="value" v-if="eduInfo.date!=null">{{eduInfo.date[0]}}~{{eduInfo.date[1]}}</div>
    </div>
    <div class="item">
      <div class="title">主修课程:</div>
      <div class="value">
        <div class="pro">
          <div v-for="(item, index) in eduInfo.projects" :key="index" class="proitem">
            <el-tag effect="dark">{{item}}</el-tag>
          </div>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="title">平均绩点</div>
      <div class="value">
        <!-- <el-progress type="circle" :percentage="percentage"></el-progress> -->
        <el-progress :text-inside="true" :stroke-width="26" :percentage="percentage" :status="status"></el-progress>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: ['毕业/就读学校', '所在学院', '毕业/就读日期', '主修课程', '平均绩点'],
        eduInfo: {},
        percentage: 0,
        status: 'exception'
      }

    },
    filters: {},
    mounted() {
      this.$bus.$on('edu', () => {
        this.eduInfo = this.$store.state.UserNote.eduInfo
        this.percentage = parseFloat((this.eduInfo.scroe / 4) * 100).toFixed(2)
        this.format()
        console.log(this.eduInfo)
      })

    },

    methods: {
      format() {

        if (this.percentage <= 60) {
          this.status = "exception"
        }
        if (this.percentage > 60 && this.percentage <= 80) {
          this.status = "warning"
        }
        if (this.percentage > 70 && this.percentage <= 90) {
          this.status = ""
        }
        if (this.percentage > 90) {
          this.status = "success"
        }



      }
    }

  }
</script>
<style scoped>
  .eduinfo {
    width: 100%;
    height: 50vh;
    border-radius: 15px;
    background: #ffffff;
    box-shadow: 11px 11px 22px #c7c7c7,
      -11px -11px 22px #ffffff;
    padding: 2vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .item {
    display: flex;
  }

  .title {
    font-weight: 800;
    padding-right: 0.5vw;
    width: 20%;
  }

  .value {
    width: 80%;

  }

  .pro {
    display: flex;
    flex-wrap: wrap;
  }

  .proitem {
    margin-left: 0.3vw;
    margin-top: 0.2vw;
  }
</style>