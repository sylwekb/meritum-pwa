import { http } from './base'


export const getDiscoverFeed = (params) => http.get('discover/', { params })
