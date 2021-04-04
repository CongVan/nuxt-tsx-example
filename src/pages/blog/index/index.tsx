import { Component, Vue } from 'nuxt-property-decorator'

import './index.scss'

@Component({
  name: 'blog-page-detail',
})
export default class BlogPageDetail extends Vue {
  protected render() {
    return <section>index page blog</section>
  }
}
