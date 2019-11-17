async function request(config) {
  return config
}
async function requestError(error) {
  return Promise.reject(error)
}
async function response(res) {
  console.log(res)
  return res
}
async function responseError(error) {
  return Promise.reject(error)
}

export default function(axios) {
  axios.interceptors.request.use(request, requestError)
  axios.interceptors.response.use(response, responseError)
}
