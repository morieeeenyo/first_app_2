import {api} from './config/axiosConfig'

export const postRequest = async (type, parameter) => {
  switch (type) {
    case 'index':
      return await api.get('/posts')
    case 'create':
      return await api.post('/posts', parameter)
  }
}