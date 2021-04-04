import { Component, Vue } from 'nuxt-property-decorator'

// import './index.scss'

@Component({
  name: 'index',
})
export default class Index extends Vue {
  protected render() {
    return (
      <section>
        <hello />
      </section>
    )
  }
}
