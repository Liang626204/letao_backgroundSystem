import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3000'
/* 携带cookie */
axios.defaults.withCredentials = true

/* 登录请求 */
export const login = obj => axios.post('/employee/employeeLogin', obj)
