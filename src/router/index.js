import Vue from 'vue'
import Router from 'vue-router'
import afterEach from './afterEach'
import beforeEach from './beforeEach'

Vue.use(Router)

const routes = []

const routerContext = require.context(
  '@/views/',
  true,
  /\/[\w-]+\/store-router\/router.js$/
)
routerContext.keys().forEach(modules => {
  const moduleValue = routerContext(modules).default
  routes.push(...moduleValue)
})

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(beforeEach)
router.afterEach(afterEach)

export default router
