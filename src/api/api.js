import http from '@/utils/http'

export const login = (params) =>http.post('/api/sys/login',params)
export const mentApi = (params) =>http.get('/api/company/department',{params})


