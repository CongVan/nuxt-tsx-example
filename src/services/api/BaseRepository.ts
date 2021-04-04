import { NuxtAxiosInstance } from '@nuxtjs/axios'
interface IBaseFactory {
  resource: (id?: string) => string
  $axios: NuxtAxiosInstance
}

export default class BaseRepository implements IBaseFactory {
  public resource() {
    return ''
  }

  public $axios: NuxtAxiosInstance

  constructor($axios: NuxtAxiosInstance) {
    this.$axios = $axios
  }
}
