<template>
  <div class="home">
    <h1>这个是刚新建的 home 组件，记得给这里填写新内容</h1>
    <hello-world />
    <router-view></router-view>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import HelloWorld from '@/components/HelloWorld'
export default {
  components: {
    HelloWorld
  },
  data() {
    return {}
  },
  created() {
    this._ABCDEFG()
  },
  methods: {
    ...mapActions('home', ['abc']),
    async _ABCDEFG() {
      console.info(
        '%c这个是模拟接口请求，一般都会报错，因为接口是乱写的，改成需要代理的域名和实际存在的接口即可',
        'color: #42b983;'
      )
      const res = await this.abc()
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.home {
}
</style>
