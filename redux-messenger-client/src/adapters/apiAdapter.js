

class apiAdapter {

  static fetch = (pathname, options) => {
    return fetch(pathname, options.config)
      .then(res => res.json())

  }

  static getUsers = () => {

  }
}

const api = new apiAdapter

export default api