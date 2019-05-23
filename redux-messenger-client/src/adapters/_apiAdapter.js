import Adapter from "./adapter"

class ApiAdapter {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
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

// const ApiAdapter = new ApiAdapter(baseUrl)

// ApiAdapter.get('/login')
//   .then(data => {
//     // {user: whatever}
//   })
// export const hello = new ApiAdapter(baseUrl)

export default ApiAdapter
