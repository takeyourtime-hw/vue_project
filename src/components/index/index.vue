<!-- 首页 -->
<template>
  <div>
    <el-button @click="logout">
      退出
    </el-button>
  </div>
</template>

<script>
export default {
  data() {
    
  },
  methods:{
    logout(){
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
};
</script>

<style lang='scss' scoped>
</style>
