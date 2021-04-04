import { NuxtAxiosInstance } from '@nuxtjs/axios'
import BlogApi from './repositories/BlogRepository'

export interface IApiFactory {
  blogApi: BlogApi
}

export class ApiFactory implements IApiFactory {
  public blogApi: BlogApi

  constructor($axios: NuxtAxiosInstance) {
    this.blogApi = new BlogApi($axios)
  }
}
