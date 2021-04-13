import Vuex, { Store } from 'vuex'
import { IBlogState } from './blog/types'

export interface RootState {
  blog: IBlogState
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
