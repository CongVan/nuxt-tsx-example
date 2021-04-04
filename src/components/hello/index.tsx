import { Component, Vue } from 'nuxt-property-decorator'

import './index.scss'

@Component({
  name: 'hello',
})
export default class Hello extends Vue {
  protected created() {}

  protected render() {
    return <section class="hello">test</section>
  }
}
