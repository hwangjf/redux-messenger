const baseUrl = 'http://localhost:4000/api/v1/'

class apiAdapter {

  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  static fetch = (pathname, options) => {
    return fetch(pathname, options.config)
      .then(res => res.json())

  }

  static getUser = () => {

  }
}

const apiAdapter = new apiAdapter

export default apiAdapter