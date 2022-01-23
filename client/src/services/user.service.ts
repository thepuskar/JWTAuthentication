import { Axios } from '@utils'

export const getCurrentUser = async (token: string) => {
  try {
    const res = await Axios.get('users/current-user', {
      headers: {
        authorization: 'Bearer ' + token
      }
    })
    return res?.data
  } catch (err: any) {
    console.log(err.response)
    return err?.response?.data?.errors[0].message ?? 'Something went wrong'
  }
}
