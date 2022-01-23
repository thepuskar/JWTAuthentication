import { useState, useEffect } from 'react'
import { Axios } from '@utils'

export function usePostRequest() {
  const [data, setData] = useState<any>()
  const [error, setError] = useState<any>()
  const [loading, setLoading] = useState<boolean>(false)

  const postRequest = async (url: string, body: any) => {
    setLoading(true)
    try {
      const response = await Axios.post(url, body)
      setData(response.data)
      setLoading(false)
    } catch (err: any) {
      setError(err.response ? err.response.data.errors[0].message : err)
      setLoading(false)
    }
  }

  return {
    data,
    error,
    loading,
    postRequest
  }
}
