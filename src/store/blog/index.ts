import {
  VuexModule,
  Module,
  getModule,
  VuexMutation,
  VuexAction,
} from 'nuxt-property-decorator'
import { store } from '@/store'
import { IBlogState } from './types'
import { BlogAPI } from '~/services/api/modules/Blog'

@Module({
  dynamic: true,
  store,
  stateFactory: true,
  namespaced: true,
  name: 'blog',
})
class Blog extends VuexModule implements IBlogState {
  public name: string = ''

  @VuexMutation
  ADD_BLOG(value: string) {
    this.name = value
  }

  @VuexAction({ rawError: true })
  fetchBlog() {
    this.ADD_BLOG('ok fetch')
    BlogAPI.get()
  }
}

export const BlogStore = getModule(Blog)
