import BaseRepository from '@/services/api/BaseRepository'

export default class BlogApi extends BaseRepository {
  public resource() {
    return 'blog'
  }

  public get() {
    setTimeout(() => {
      console.log('get blog ', this.$axios)
    }, 3000)
  }
}
