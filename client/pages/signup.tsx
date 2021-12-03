import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FaFacebook, FaGoogle, FaApple } from 'react-icons/fa'

import { Button, Icons, Signup } from '@components'

import { MainDiv, LogoText, Underline, BoldText, Text } from '../styles/style'
import { SignIn, SignInDiv, LeftDiv, FormDiv, RightDiv } from './signin'

const signin = () => {
  const router = useRouter()
  return (
    <MainDiv className='justify-center'>
      <Head>
        <title>Sign Up</title>
      </Head>
      <SignIn>
        <SignInDiv>
          <LeftDiv>
            <LogoText>JWT Auth</LogoText>
            <FormDiv className='py-10'>
              <BoldText color='green'>Sign Up</BoldText>
              <Underline color='green' />
              <Icons icons={[FaFacebook, FaGoogle, FaApple]} center={true} />
              <Text color='gray' className='my-3'>
                or use your email or password
              </Text>
              <Signup />
            </FormDiv>
          </LeftDiv>
          <RightDiv>
            <BoldText>Already have account?</BoldText>
            <Underline />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptas, aliquam.
            </p>

            <Button
              white={true}
              rounded={true}
              text='Sign In'
              onClick={() =>
                router.push('/signin', undefined, { shallow: true })
              }
            />
          </RightDiv>
        </SignInDiv>
      </SignIn>
    </MainDiv>
  )
}

export default signin
