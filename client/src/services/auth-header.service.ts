import { getLocalUser } from './auth.service'

export const authHeader = () => {
  const user = getLocalUser()
  if (user && user.token) {
    return { authorization: 'Bearer ' + user.token }
  }
  return {}
}
