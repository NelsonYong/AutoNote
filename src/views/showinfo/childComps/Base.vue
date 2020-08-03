<template>
  <div class="baseinfo">
    <div class="img"><img :src="imageurl" alt=""></div>
    <div class="user-info">
      <div class="item" v-for="(item, index) in baseInfo" :key="index">
        <div class="title" v-if="index!=baseInfo.length-1">{{item.title}}:</div>
        <div class="view" v-if="index!=baseInfo.length-1"><span v-if="baseinfo.length!=0">{{baseinfo[index].key}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        baseinfo: [],
        baseInfo: [{
            title: '姓名',
            key: 'yang'
          },
          {
            title: '年龄',
            key: '18'
          },
          {
            title: '联系方式',
            key: '18475035360'
          },
          {
            title: '籍贯',
            key: '广东广州'
          },
          {
            title: '学历',
            key: '本科'
          },
          {
            title: '所学专业',
            key: '计算科学与技术'
          },
          {
            title: '应聘职位',
            key: '前端工程师'
          }
        ],
        header: '',
        imageurl:''
      }
    },
    mounted() {
      this.$bus.$on('base', () => {
        // this.header=this.baseInfo[this.baseInfo.length-1].key
        this.baseinfo = this.$store.state.UserNote.baseInfo.info
        console.log(this.baseinfo)
      })

      this.$bus.$on('imagLoad', (url) => {
        // this.header=this.baseInfo[this.baseInfo.length-1].key
        this.imageurl =url
      })




    },
    computed: {
      // baseinfo() {
      //   return this.$store.state.UserNote.baseInfo
      // }
    }


  }
</script>
<style scoped>
  .baseinfo {
    width: 100%;
    display: flex;
    border-radius: 15px;
    background: #ffffff;
    box-shadow: 11px 11px 22px #c7c7c7,
      -11px -11px 22px #ffffff;

    padding-left: 2vw;
    padding-right: 2vw;
  }

  .img {
    width: 20%;
    height: 100%;

  }

  .img img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }

  .user-info {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-between;
    padding: 2vw;
    height: 18vh;
  }

  .item {
    width: 30%;
    height: 50%;
    /* margin-left: 1vw; */
    display: flex;
    align-items: center;
  }

  .title {
    /* width: 40%; */
    white-space: nowrap;
    font-weight: 800;
  }

  .view {
    /* width: 60%; */
    padding-left: 5px;
    white-space: nowrap;
    font-size: 0.8vw;
  }
</style>