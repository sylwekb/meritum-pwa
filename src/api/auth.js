import { http } from './base'


export const login = (params) => http.post("auth/login/", { ...params })

