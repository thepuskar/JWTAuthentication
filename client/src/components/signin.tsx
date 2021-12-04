import React from 'react'
import tw from 'twin.macro'
import { useForm } from 'react-hook-form'

import { FaRegEnvelope } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'

import { Input, Button, Checkbox } from '@components'
import { Anchor } from '../../styles/style'
import { IFormValue } from '@interfaces'

export const Signin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<IFormValue>()

  const userRegister = (data: IFormValue) => {
    console.log(data)
  }
  return (
    <Form
      className='flex flex-col items-center'
      onSubmit={handleSubmit(userRegister)}
    >
      <Input
        tag={<FaRegEnvelope className='text-gray-400 m-2' />}
        type='email'
        placeholder='Email'
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please enter a valid email'
          }
        })}
        error={errors.email?.message}
      />
      <Input
        tag={<MdLockOutline className='text-gray-400 m-2' />}
        type='password'
        placeholder='Password'
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters'
          }
        })}
        error={errors.password?.message}
      />

      <FormFootnote className='flex justify-between w-64 mb-5'>
        <Checkbox name='rememberMe' label='Remember Me' />
        <Anchor href='#'>Forgot Password?</Anchor>
      </FormFootnote>
      <Button green={true} rounded={true} text='Sign In' type='submit' />
    </Form>
  )
}

export const Form = tw.form`flex flex-col items-center`
const FormFootnote = tw.div`flex justify-between w-64 mb-5`
