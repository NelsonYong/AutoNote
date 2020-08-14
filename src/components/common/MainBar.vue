<template>
  <div class="main-bar">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu :default-active="this.$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
      :collapse="isCollapse" router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">主页</span>
        </template>
        <el-menu-item-group>
          <span slot="title">信息输入</span>
          <el-menu-item index="/input">基本信息</el-menu-item>
          <el-menu-item index="/education">教育背景</el-menu-item>
          <el-menu-item index="/work">工作经历</el-menu-item>
          <el-menu-item index="/skill">具备技能</el-menu-item>
          <el-menu-item index="/project">项目经历</el-menu-item>
          <el-menu-item index="/self">自我评价</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="信息展示">

          <el-menu-item index="/show" class="show">
            <span>预览简历</span><span>
              <el-badge :value="3" class="showitem"> </el-badge>
            </span>
          </el-menu-item>

        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">调整</span>
          <el-menu-item index="1-4-1">字体大小</el-menu-item>
        </el-submenu>
      </el-submenu>
       <!-- @click="PdfPrint" -->
      <el-menu-item @click="PdfPrint">
        <i class="el-icon-menu"></i>
        <span slot="title">导出pdf</span>
      </el-menu-item>
      <!-- <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item> -->

      <el-menu-item @click="task">
        <i class="el-icon-setting"></i>
        <span slot="title">任务面板</span>
      </el-menu-item>
    </el-menu>
    <Task ref="task"></Task>
  </div>
</template>

<script>
  import Task from 'components/common/Task'
  export default {
    components: {
      Task
    },
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },

      task() {

        this.$refs.task.changeDrawer()
      },

      PdfPrint() {
        this.$bus.$emit('PdfPrint')
      }

    }

  }
</script>
<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;
    min-height: 400px;
  }

  .main-bar {
    position: fixed;
    left: 2vw;
    top: 5vh;
    bottom: 0;

  }

  .show {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .showitem {
    vertical-align: middle;
    position: relative;
    bottom: 3px;
  }
</style>