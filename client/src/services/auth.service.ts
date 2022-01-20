import { Axios } from '@utils'

export const register = (username: String, email: String, password: String) => {
  return Axios.post('users/register', {
    username,
    email,
    password
  })
}

export const login = async (email: String, password: String) => {
  const res = await Axios.post('users/login', {
    email,
    password
  })
  if (res?.data?.token) {
    const user = {
      token: res.data.token,
      user: res.data.user
    }
    localStorage.setItem('user', JSON.stringify(user))
  }
  return res?.data
}

export const logout = () => {
  localStorage.removeItem('user')
}

export const getCurrentUser = () => {
  const user = localStorage.getItem('user')
  if (user) {
    return JSON.parse(user)
  }
  return null
}
