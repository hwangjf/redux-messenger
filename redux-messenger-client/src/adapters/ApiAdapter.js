import Adapter from "./Adapter"

const BASE_URL = 'http://localhost:4000/api/v1'

class ApiAdapter {
  constructor() {
    this.baseUrl = BASE_URL
    this.headers = {
      "Content-type": "application/json",
      "Accept": "application/json"
    }
  }

  addAuthHeaders = () => {
    this.headers["Authorization"] = `Bearer ${Adapter.getToken()}`
  }

  removeAuthHeaders = () => {
    delete this.headers["Authorization"]
  }

  get = (endpoint) => {
    return fetch(`${this.baseUrl}${endpoint}`, {
      headers: this.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw res.json()
        }
      })
      .then(data => {
        if (data.token) {
          Adapter.setToken(data.token)
        }
        return data
      })
  }

  post = (endpoint, body) => {
    return fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body)
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw res
        }
      })
      .then(data => {
        if (data.token) {
          Adapter.setToken(data.token)
        }
        return data
      })
  }

  patch = (endpoint, body) => {
    return fetch(`${this.baseUrl}${endpoint}`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(body)
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw res
        }
      })
  }
}

export default ApiAdapter
