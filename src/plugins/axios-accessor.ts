import { Plugin } from '@nuxt/types'
import { initializeAxios } from '@/services/api'
import { ApiFactory } from '~/services/api/ApiFactory'

const accessor: Plugin = ({ $axios }, inject: any) => {
  initializeAxios($axios)
  inject('api', new ApiFactory($axios))
}

export default accessor
