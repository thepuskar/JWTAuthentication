import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FaFacebook, FaGoogle, FaApple } from 'react-icons/fa'

import tw from 'twin.macro'
import styled from 'styled-components'

import { Button, Icons, Signin } from '@components'

import { MainDiv, LogoText, Underline, BoldText, Text } from '../styles/style'

const signin = () => {
  const router = useRouter()
  return (
    <MainDiv className='justify-center'>
      <Head>
        <title>Sign In</title>
      </Head>
      <SignIn>
        <SignInDiv>
          <LeftDiv>
            <LogoText>JWT Auth</LogoText>
            <FormDiv className='py-10'>
              <BoldText color='green'>Sign In</BoldText>
              <Underline color='green' />
              <Icons icons={[FaFacebook, FaGoogle, FaApple]} center={true} />
              <Text color='gray' className='my-3'>
                or use your email or password
              </Text>
              <Signin />
            </FormDiv>
          </LeftDiv>
          <RightDiv>
            <BoldText>New here?</BoldText>
            <Underline />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptas, aliquam.
            </p>

            <Button
              white={true}
              rounded={true}
              text='Sign Up'
              onClick={() =>
                router.push('/signup', undefined, { shallow: true })
              }
            />
          </RightDiv>
        </SignInDiv>
      </SignIn>
    </MainDiv>
  )
}

export const SignIn = tw.div`flex flex-col items-center justify-center  w-full flex-1 px-4 sm:px-20 md:px-20  text-center  `
export const SignInDiv = tw.div`bg-white rounded-2xl shadow-2xl flex w-full sm:w-2/3 sm:max-w-full md:w-4/5 md:max-w-5xl sm:flex-nowrap flex-wrap`
export const LeftDiv = tw.div`w-full sm:w-3/4 p-5 `
export const FormDiv = tw.div`sm:py-10`
export const RightDiv = styled.div`
  ${tw`sm:w-2/5 md:w-3/4 lg:w-2/5 w-full bg-green-500 text-white rounded-b-2xl sm:rounded-bl-none sm:rounded-tr-2xl sm:rounded-br-2xl py-36 px-12 md:px-5 lg:px-12`};
  p {
    ${tw`mb-10`};
  }
`
export default signin
