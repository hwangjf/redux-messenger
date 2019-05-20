import Adapter from "./adapter"

class ApiAdapter {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
    this.headers = {
      "Content-type": "application/json",
      "Accepts": "application/json"
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
      .then(res => res.json())
      .then(data => {
        if (data.token) {
          Adapter.setToken(token)
        }
      })
  }

  post = (endpoint, body) => {
    return fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body)
    })
      .then(res => res.json())
  }

  patch = (endpoint, body) => {
    return fetch(`${this.baseUrl}${endpoint}`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(body)
    })
      .then(res => res.json())
  }
}

// const ApiAdapter = new ApiAdapter(baseUrl)

// ApiAdapter.get('/login')
//   .then(data => {
//     // {user: whatever}
//   })
// export const hello = new ApiAdapter(baseUrl)

export default ApiAdapter
