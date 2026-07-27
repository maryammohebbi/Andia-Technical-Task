const { default: axios } = require('axios')

const app = axios.create({
  baseURL: 'https://fakestoreapi.com',
})

app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
)


const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  patch: app.patch,
  put: app.put,
}

export default http