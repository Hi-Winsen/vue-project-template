<template>
  <div id="app">
    <el-container>
      <el-header><main-header/></el-header>
      <el-container>
        <el-aside width="200px">
          <nav-menu/>
        </el-aside>
        <el-container>
          <el-main><router-view /></el-main>
          <!-- <el-footer>Footer</el-footer> -->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu'
import MainHeader from '@/components/MainHeader'
export default {
  components: {
    NavMenu,
    MainHeader
  }
}
</script>

<style lang="less" scoped>
#app {
  width: 100%;
  min-height: 100%;
  text-align: center;
  color: #2c3e50;
}
.el-container {
  height: 100%;
}
/deep/ .el-header {
  padding: 0;
}
</style>
