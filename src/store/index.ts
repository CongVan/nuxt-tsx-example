import Vuex, { Store } from 'vuex'
import { IApiFactory } from '@/services/api/ApiFactory'
import { IBlogState } from './blog/types'

export interface RootState {
  blog: IBlogState
  $api: IApiFactory
}
export const store = new Vuex.Store<RootState>({
  actions: {
    nuxtServerInit: () => {
      console.log('server init ok')
    },
  },
})
const createStore = (): Store<RootState> => {
  return store
}
export default createStore
