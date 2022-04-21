import axios from 'axios'

const apiUrl = `http://127.0.0.1:5000/api/`

const handleErrors = err => {
  throw err
}

const responseData = res => res

const requests = {
  get: (url) => axios({ url: `${apiUrl}${url}`, method: 'get' })
    .then(responseData)
    .catch(handleErrors),
  post: (url, data, headers={}) => axios({
    url: `${apiUrl}${url}`, method: 'post', data, headers
  }).then(responseData)
    .catch(handleErrors),
  put: (url, data) => axios.put(`${apiUrl}${url}`, data, { headers: { 'Content-Type': 'application/json' } })
    .then(responseData)
    .catch(handleErrors),
  patch: (url, data) => axios.patch(`${apiUrl}${url}`, data)
    .then(responseData)
    .catch(handleErrors),
  del: (url) => axios.delete(`${apiUrl}${url}`)
    .then(responseData)
    .catch(handleErrors),
}

export const ApiManager = {
  saveUser: (data) => requests.post('users', data),
  updateUser: (userId, data) => requests.put(`users/${userId}`, data),
  getUser: (userId) => requests.get(`users/${userId}`),
  deleteUser: (userId) => requests.del(`users/${userId}`, {}),
  getUsersList: (options) => requests.get(`users/list?limit=${options.limit}&skip=${options.skip}`),
  login: (data) => requests.post('users/login', data),
  savePreference: (data) => requests.post('preferences', data),
  updatePreference: (preferenceId, data) => requests.put(`preferences/${preferenceId}`, data),
  getPreference: (preferenceId) => requests.get(`preferences/${preferenceId}`),
  deletePreference: (preferenceId) => requests.del(`preferences/${preferenceId}`, {}),
  getPreferencesList: (options) => requests.get(`preferences/list?limit=${options.limit}&skip=${options.skip}`),
  upload: (data) => requests.post('upload', data, {'Content-Type': 'multipart/form-data'}),  
}

export default ApiManager
