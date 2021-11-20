import {api} from './config/axiosConfig'

// axiosConfigに書いた設定をもとに、各APIごとにこんな感じのAPI通信を行う関数を作る。
// コントローラーごとに1個、くらいのイメージでいいと思う
export const postRequest = async (type, parameter) => {
  switch (type) {
    case 'index':
      return await api.get('/posts')
    case 'create':
      return await api.post('/posts', parameter)
  }
}