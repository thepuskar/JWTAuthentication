import React from 'react'
import tw from 'twin.macro'

import { FaRegEnvelope } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'

import { Input, Button, Checkbox } from '@components'
import { Anchor } from '../../styles/style'

export const Signin = () => {
  return (
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
  )
}

export const Form = tw.form`flex flex-col items-center`
const FormFootnote = tw.div`flex justify-between w-64 mb-5`
