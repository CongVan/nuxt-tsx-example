// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Vue from 'vue'
import { Store } from 'vuex'
import { IApiFactory } from '~/services/api/ApiFactory'

declare module 'vue/types/vue' {
  interface Vue {
    $api: IApiFactory
    $store: Store<any>
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.$myInjectedFunction inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {}
  // nuxtContext.$myInjectedFunction
  interface Context {}
}

declare module 'vuex/types/index' {
  // this.$myInjectedFunction inside Vuex stores
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $api: IApiFactory
  }
}
