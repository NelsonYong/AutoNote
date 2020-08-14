<template>
  <div class="task">
    <!-- <el-button @click="changeDrawer" type="primary" style="margin-left: 16px;">
      点我打开
    </el-button> -->
    <el-drawer title="简历书写提示栏" :visible.sync="drawer" :with-header="true" :modal="false" :direction="dir" class="header" size="15%">
      <div class="content">
        <el-collapse accordion>
          <el-collapse-item v-for="(item, index) in data" :key="index">
            <div class="item" slot="title">{{item.title}}</div>
            <div class="text">
              <ul>
                <li v-for="(item, index) in item.other" :key="index">{{item}}</li>
              </ul>
            </div>
          </el-collapse-item>
        </el-collapse>
        <!-- <div class="item">基本信息</div>
        <div class="item">教育经历</div>
        <div class="item">工作经历</div>
        <div class="item">项目经历</div>
        <div class="item">自我介绍</div> -->
      </div>
    </el-drawer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
        dir: "rtl",
        title: ['基本信息', '教育背景', '工作经历', '具备技能', '项目经历', '自我介绍'],
        data: [{
          title: '基本信息',
          other: ['姓名', '年龄', '联系方式', '邮箱', '头像']
        }, {
          title: '教育背景',
          other: ['学校名称', '学历', '主修课程', '成绩/绩点']
        }, {
          title: '工作经历',
          other: ['主要描述经历即可-不限职业']
        }, {
          title: '具备技能',
          other: ['根据主修课程不同', 'HTML', 'CSS', 'JavaScript', 'Vue', 'WebPack']
        }, {
          title: '项目经历',
          other: ['针对需要寻求的这份工作而言的项目', '如开发了xxx项目']
        }, {
          title: '自我介绍',
          other: ['本来乐观开朗，模板网上大把']
        }]
      }
    },
    methods: {
      changeDrawer() {
        this.drawer = true
      }
    }
  }
</script>
<style scoped>
  .content{
    padding: 2vw;
  }
  .task{
    z-index: 1000;
    background-color: white;
  }

  .el-drawer__header{
    padding-left: 6vw;
  }


  .item {
    width: 100%;
    border-radius: 15px;
    background: #ffffff;
    box-shadow: 11px 11px 22px #c7c7c7,
      -11px -11px 22px #ffffff;

    line-height: 6vh;
    padding-left: 2vw;
    vertical-align: middle;

  }

  .text{
    margin-top: 5vh;
  }
</style>