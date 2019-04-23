import Adapter from "./adapter";

const baseUrl = 'http://localhost:4000/api/v1'

class apiAdapter {
  constructor(baseUrl, headers = false) {
    this.baseUrl = baseUrl
    this.headers = {
      "Content-type": "application/json",
      "Accepts": "application/json"
    }
  }
  
  static addAuth = () => {
    this.headers["Authorization"] = `Bearer ${Adapter.getToken()}`
  }

  static removeAuth = () => {
    this.headers["Authorization"] = null
  }

  static get = (endpoint, headers) => {
    return fetch(`${baseUrl}/${endpoint}`, {
      headers: this.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw res
        }
      })

  }

  static post = (endpoint, body) => {
    return fetch(`${baseUrl}/${endpoint}`, {
      headers: this.headers,
      body: JSON.stringify(body)
    })
      .then(res => res.json())
  }

  static getUser = () => {

  }
}

const apiAdapter = new apiAdapter(baseUrl)

// apiAdapter.get('/login')
//   .then(data => {
//     // {user: whatever}
//   })
export default apiAdapter