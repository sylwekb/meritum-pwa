import { http } from './base'


export const getPosts = (params) => http.get('posts/', { params })

export const getPost = (params) => http.get(`posts/${params.id}/`, { params })

