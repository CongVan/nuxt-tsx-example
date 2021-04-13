import BaseRepository from '@/services/api/BaseRepository'
import { api } from '@/services/api/config'

class Blog extends BaseRepository {
  public resource() {
    return 'blog'
  }

  public get() {
    console.log('get', api)
  }
}

export const BlogAPI = new Blog()
