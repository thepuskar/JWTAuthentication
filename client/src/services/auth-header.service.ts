import { getCurrentUser } from './auth.service'
export const authHeader = () => {
  const user = getCurrentUser()
  if (user && user.token) {
    return { Cookie: user.token }
  }
  return {}
}
