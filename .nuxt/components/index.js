export { default as Dummy } from '../..\\components\\dummy.vue'
export { default as Dummyfunctional } from '../..\\components\\dummyfunctional.vue'
export { default as Logo } from '../..\\components\\Logo.vue'

export const LazyDummy = import('../..\\components\\dummy.vue' /* webpackChunkName: "components_dummy'}" */).then(c => c.default || c)
export const LazyDummyfunctional = import('../..\\components\\dummyfunctional.vue' /* webpackChunkName: "components_dummyfunctional'}" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo'}" */).then(c => c.default || c)
