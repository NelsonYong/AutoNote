<template>
  <div class="self">
    <div class="text" v-if="SelfInfo!=''">
      <p>{{SelfInfo}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        SelfInfo: ''
      }
    },
    mounted() {
      this.$bus.$on('self', () => {
        // this.header=this.baseInfo[this.baseInfo.length-1].key
        this.SelfInfo = this.$store.state.UserNote.selfInfo.info
      })

    }


  }
</script>
<style scoped>
  .self {
    width: 100%;
    border-radius: 15px;
    background: #ffffff;
    box-shadow: 11px 11px 22px #c7c7c7,
      -11px -11px 22px #ffffff;

      padding: 2vw;

  }
</style>