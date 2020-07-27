export { default as Dummy } from '../..\\components\\dummy.vue'
export { default as Dummyfunctional } from '../..\\components\\dummyfunctional.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as StaticRender } from '../..\\components\\static-render.vue'
export { default as Static } from '../..\\components\\static.vue'

export const LazyDummy = import('../..\\components\\dummy.vue' /* webpackChunkName: "components_dummy'}" */).then(c => c.default || c)
export const LazyDummyfunctional = import('../..\\components\\dummyfunctional.vue' /* webpackChunkName: "components_dummyfunctional'}" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo'}" */).then(c => c.default || c)
export const LazyStaticRender = import('../..\\components\\static-render.vue' /* webpackChunkName: "components_static-render'}" */).then(c => c.default || c)
export const LazyStatic = import('../..\\components\\static.vue' /* webpackChunkName: "components_static'}" */).then(c => c.default || c)
