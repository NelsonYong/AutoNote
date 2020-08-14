<template>
  <div>
    <!-- <el-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</el-button> -->
    <el-dialog title="请登录" :visible.sync="centerDialogVisible" width="30%" center :before-close="handleClose">
      <div class="id">
        <span>账 号</span>
        <el-input v-model="id" placeholder="请输入id" type="text" maxlength="6"></el-input>
      </div>
      <div class="password">
        <span>密 码</span>
        <el-input v-model="password" type="password" placeholder="请输入密码"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="reset">重 置</el-button>
        <el-button type="primary" @click="Login">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import {
    getUserInfo
    // getGoodsData
  } from 'network/login.js'

  import {
    setCookie,
    getCookie
  } from 'common/cookie.js'
  export default {
    data() {
      return {
        centerDialogVisible: false,
        id: null,
        password: null
      }
    },

    created() {

      let tips = getCookie("username")
      this.$store.commit('getUserId',tips)
      let flag = false
      if (tips != null) {
        flag = true
      }
      this.centerDialogVisible = !flag
    },

    methods: {
      handleClose() {
        this.centerDialogVisible = !this.$store.state.Loginable
      },
      Login() {
        getUserInfo(this.id, this.password).then(res => {
          console.log(res)
          if (res == 1) {
            console.log('登录成功')
            this.$store.commit('ChangeLoginState', true)
            this.handleClose()
            this.$notify({
              showClose: true,
              duration: 1000,
              message: '登录成功',
              type: 'success'
            })
            setCookie("username", this.id, 1)
            this.$store.commit('getUserId', this.id)
          } else {
            console.log('登录失败')
            this.handleClose()
            this.$notify({
              showClose: true,
              duration: 1000,
              message: '请检查账号和密码',
              type: 'error'
            })
            this.reset()
          }

        })

      },

      reset() {
        this.id = null
        this.password = null
      }
    }

  }
</script>
<style scoped>
  .id {
    margin-bottom: 1vh;
  }

  span {
    font-weight: 800;
  }
</style>