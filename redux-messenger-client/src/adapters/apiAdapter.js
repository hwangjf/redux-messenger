import Adapter from "./adapter";

const baseUrl = 'http://localhost:4000/api/v1'
// TODO: move baseUrl to env.process.

class apiAdapter {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
    this.headers = {
      "Content-type": "application/json",
      "Accepts": "application/json"
    }
  }
  
  static addAuthHeaders = () => {
    this.headers["Authorization"] = `Bearer ${Adapter.getToken()}`
  }

  static removeAuthHeaders = () => {
    this.headers["Authorization"] = null
  }

  static get = (endpoint, headers) => {
    return fetch(`${baseUrl}/${endpoint}`, {
      headers: this.headers
    })
      .then(res => res.json())
  }

  static post = (endpoint, body) => {
    return fetch(`${baseUrl}/${endpoint}`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body)
    })
      .then(res => res.json())
  }

  static patch = (endpoint, body) => {
    return fetch(`${baseUrl}/${endpoint}`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(body)
    })
      .then(res => res.json())
  }

  static login = (userInfo) => {
    return this.post('/login', {user: userInfo})
      .then(res => res.json())
  }
}

const apiAdapter = new apiAdapter(baseUrl)

// apiAdapter.get('/login')
//   .then(data => {
//     // {user: whatever}
//   })
export default apiAdapter