import ApiAdapter from './_apiAdapter'
import { Adapter } from '.';

const baseUrl = 'http://localhost:4000/api/v1'
// TODO: move baseUrl to env.process.
// const apiAdapter = new ApiAdapter(baseUrl)

class UsersAdapter extends ApiAdapter {
 
  // apiAdapter = apiAdapter
  // constructor() {

  // }

  signup = (userInfo) => {
    return this.post('/signup', {
      user: userInfo
    })
      .then(data => {
        Adapter.setToken(data.token)
        return data
      })
  }

  login = (userInfo) => {
    return this.post('/login', {
      user: userInfo
    })
  }

  autoLogin = () => {
    this.addAuthHeaders()

    return this.get('/auto_login')
  }

  logout = () => {
    Adapter.logout()
    return 'logged out'
  }

}

// users adapter that connects to user related backend routes
const usersAdapter = (new UsersAdapter(baseUrl))
console.log(usersAdapter)

export default usersAdapter
