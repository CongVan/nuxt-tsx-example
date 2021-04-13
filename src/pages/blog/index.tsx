import { Component, Vue } from 'nuxt-property-decorator'
import { BlogStore } from '~/store/blog'

import './index.scss'

@Component({
  name: 'blog-page',
})
export default class BlogPage extends Vue {
  protected fetch() {
    BlogStore.fetchBlog()
  }

  protected render() {
    return (
      <section>
        name: {BlogStore.name}
        <nuxt-child />
      </section>
    )
  }
}
