import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { getCurrentUser } from '@services'
import { MainDiv, Card, CardInfo, CardText } from '../index'

const emailConfirm = () => {
  const [userInfo, setUserInfo] = useState<any>()
  const [loading, setLoading] = useState<boolean>(true)
  const { token } = useRouter().query
  console.log('token', token)
  useEffect(() => {
    const fetchData = async () => {
      if (typeof token === 'string') {
        const user = await getCurrentUser(token)
        setUserInfo(user)
      }
    }
    fetchData()
  }, [token])

  console.log('userInfo', userInfo)

  return (
    <MainDiv>
      <head>
        <title>Verify Email</title>
        <meta name='description' content='Email Verification' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      {loading && (
        <Card>
          <img
            src='https://cdn-icons-png.flaticon.com/512/1828/1828640.png'
            alt='Sunset in the mountains'
            width='150px'
          />
          <CardInfo>
            <CardText>Verified</CardText>
            <p>
              {'You have Successfully verified your email ' +
              <strong>userInfo?.user?.email</strong>}
            </p>
          </CardInfo>
        </Card>
      )}
    </MainDiv>
  )
}

export default emailConfirm
