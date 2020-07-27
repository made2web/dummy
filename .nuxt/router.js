import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _39cfb55b = () => interopDefault(import('..\\pages\\content.vue' /* webpackChunkName: "pages/content" */))
const _6471c411 = () => interopDefault(import('..\\pages\\functional.vue' /* webpackChunkName: "pages/functional" */))
const _060084fc = () => interopDefault(import('..\\pages\\lazy.vue' /* webpackChunkName: "pages/lazy" */))
const _bdbb3408 = () => interopDefault(import('..\\pages\\static.vue' /* webpackChunkName: "pages/static" */))
const _b38dcd92 = () => interopDefault(import('..\\pages\\static-render.vue' /* webpackChunkName: "pages/static-render" */))
const _fabc0098 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/content",
    component: _39cfb55b,
    name: "content"
  }, {
    path: "/functional",
    component: _6471c411,
    name: "functional"
  }, {
    path: "/lazy",
    component: _060084fc,
    name: "lazy"
  }, {
    path: "/static",
    component: _bdbb3408,
    name: "static"
  }, {
    path: "/static-render",
    component: _b38dcd92,
    name: "static-render"
  }, {
    path: "/",
    component: _fabc0098,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
