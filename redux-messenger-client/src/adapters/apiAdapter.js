

class apiAdapter {

  static fetch = (pathname, options) => {
    return fetch(pathname, options.config)
      .then(res => res.json())

  }

  static getUser = () => {

  }
}

const api = new apiAdapter

export default api