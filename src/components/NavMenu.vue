<template>
  <el-menu default-active="0">
    <div v-for="(firstLevel, i) of routes" :key="i">
      <!-- 如果没有子路由，没有下拉效果 -->
      <router-link :to="firstLevel.path" v-if="!firstLevel.children.length">
        <el-menu-item :index="`${i}`">
          <i class="el-icon-menu"></i>
          <span slot="title">{{firstLevel.meta.title}}</span>
        </el-menu-item>
      </router-link>
      <!-- 如果有子路由，需要下拉效果 -->
      <el-submenu :index="`${i}`" v-else>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{firstLevel.meta.title}}</span>
        </template>
        <router-link :to="resolvePath(firstLevel.path, secondLevel.path)" v-for="(secondLevel, j) of firstLevel.children" :key="j">
          <el-menu-item
            :index="`${i}-${j}`">
            <i class="el-icon-menu"></i>
            <span slot="title">{{secondLevel.meta.title}}</span>
          </el-menu-item>
        </router-link>
      </el-submenu>
    </div>
  </el-menu>
</template>

<script>
import {routes} from '@/router/index'
export default {
  data() {
    return {
      isCollapse: false,
      // 路由排序规则（因为一级路由是通过遍历文件得到的，顺序是根据文件名进行排列，所以菜单顺序就乱了）
      // 重新排序的时候，根据一级路由的 title 的先后顺序进行排序，把title写在下面这个数组中，放在前面的就会排在前面
      routeSort: [
        '首页',
        '图表',
        '用户中心'
      ]
    }
  },
  computed: {
    routes() {
      return routes
        // 过滤 redirect 或者明确指明了要 hidden 的路径
        .filter(item => {
          return !(
            item.redirect ||
            (item.meta && item.meta.hidden)
          )
        })
        .map(item => {
          return {
            ...item,
            meta: { // 设定排序 index
              ...(item.meta || {}),
              sortIndex: this.routeSort.findIndex(title => title === (item.meta || {}).title)
            },
            children: (item.children || [])
              .filter(item => { // 过滤子路由中 redirect 或者明确指明了要 hidden 的路径
                return !(
                  item.redirect ||
                  (item.meta && item.meta.hidden)
                )
              })
              .map(item => { // 设定默认的 meta，避免子路由没有meta导致页面渲染报错
                return {
                  ...item,
                  meta: (item.meta || {})
                }
              })
          }
        })
        // 排序，index
        .sort((a, b) => a.meta.sortIndex - b.meta.sortIndex)
    }
  },
  methods: {
    resolvePath(first, second) {
      if (second[0] === '/') return first + second
      else return first + '/' + second
    }
  }
}
</script>

<style lang="less" scoped>
  .el-menu {
    height: 100%;
    text-align: left;
  }
  a {
    display: block;
  }
</style>
