import React from 'react'
import Head from 'next/head'
import { FaFacebook, FaGoogle, FaApple, FaRegEnvelope } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'

import tw from 'twin.macro'
import styled from 'styled-components'

import { Input, Button, Checkbox, Icons } from '@components'

import {
  MainDiv,
  LogoText,
  Underline,
  BoldText,
  Text,
  Anchor
} from '../styles/style'

const signin = () => {
  return (
    <MainDiv className='justify-center'>
      <Head>
        <title>Sign In - TraXpen$e</title>
      </Head>
      <SignIn>
        <SignInDiv>
          <LeftDiv>
            <LogoText>
              Tra<span>Xpen$</span>e
            </LogoText>
            <FormDiv className='py-10'>
              <BoldText color='green'>Sign In</BoldText>
              <Underline />
              <Icons icons={[FaFacebook, FaGoogle, FaApple]} center={true} />
              <Text color='gray' className='my-2'>
                or use your email or password
              </Text>
              <Form className='flex flex-col items-center'>
                <Input
                  tag={<FaRegEnvelope className='text-gray-400 m-2' />}
                  type='email'
                  placeholder='Email'
                  name='email'
                />
                <Input
                  tag={<MdLockOutline className='text-gray-400 m-2' />}
                  type='password'
                  placeholder='Password'
                  name='password'
                />

                <FormFootnote className='flex justify-between w-64 mb-5'>
                  <Checkbox name='rememberMe' label='Remember Me' />
                  <Anchor href='#'>Forgot Password?</Anchor>
                </FormFootnote>
                <Button green={true} rounded={true} text='Sign In' />
              </Form>
            </FormDiv>
          </LeftDiv>
          <RightDiv>
            <BoldText>Lorem ipsum.</BoldText>
            <Underline />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptas, aliquam.
            </p>

            <Button white={true} rounded={true} text='Sign Up' />
          </RightDiv>
        </SignInDiv>
      </SignIn>
    </MainDiv>
  )
}

const SignIn = tw.div`flex flex-col items-center justify-center   w-full flex-1 px-20  text-center  `
const SignInDiv = tw.div`bg-white rounded-2xl shadow-2xl flex w-full md:w-2/3 md:max-w-4xl md:flex-nowrap flex-wrap  border-2 border-yellow-500`
const LeftDiv = tw.div`w-3/4 p-5 sm:w-full `
const FormDiv = tw.div`py-10`
const Form = tw.form`flex flex-col items-center`
const FormFootnote = tw.div`flex justify-between w-64 mb-5`
const RightDiv = styled.div`
  ${tw`w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12`};
  p {
    ${tw`mb-10`};
  }
`
export default signin
