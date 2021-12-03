import React from 'react'
import tw from 'twin.macro'

import { FaRegEnvelope, FaUser } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'

import { Input, Button } from '@components'
import { Form } from './signin'

export const Signup = () => {
  return (
    <Form className='flex flex-col items-center'>
      <Input
        tag={<FaUser className='text-gray-400 m-2' />}
        type='text'
        placeholder='Username'
        name='username'
      />
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

      <Button green={true} rounded={true} text='Sign Up' />
    </Form>
  )
}
