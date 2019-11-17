<template>
  <div class="home">
    <router-view></router-view>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {}
  },
  created() {
    // this._ABCDEFG()
  },
  methods: {
    ...mapActions('home', ['abc']),
    async _ABCDEFG() {
      // 这个是模拟接口请求，一般都会报错，因为接口是乱写的，改成需要代理的域名和实际存在的接口即可
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
