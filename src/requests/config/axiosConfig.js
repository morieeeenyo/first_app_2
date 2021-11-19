import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3001'
})

api.interceptors.request.use(function (request) {
  // 成功時の処理
  return request;
});

api.interceptors.response.use(function (response) {
  // 成功時の処理
  return response;
}, function (error) {
  // 失敗時の処理
  switch (error.response?.status) {
     case 401:
     // HTTPステータスに応じて処理
     break
     case 403:
     default:
     // 例外処理  
  }
});