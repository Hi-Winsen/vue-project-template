import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [];

const routerContext = require.context(
  "@/views/",
  true,
  /\/[\w-]+\/store-router\/router.js$/
);
routerContext.keys().forEach(modules => {
  let moduleValue = routerContext(modules).default;
  routes.push(...moduleValue);
});

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
