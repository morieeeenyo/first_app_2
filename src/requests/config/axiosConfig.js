import axiosBase from 'axios'

export const api = axiosBase.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'
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
    //  ログアウトする処理を入れる
     break
     case 403:
     case 422:
       throw error
     default:
     // 例外処理  
  }
});