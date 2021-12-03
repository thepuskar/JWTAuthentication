import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

export const Input = (props: any) => {
  return (
    <InputDiv className='bg-gray-100 w-64 p-2 flex mb-3'>
      {props?.tag && props.tag}
      <InputTag {...props} />
    </InputDiv>
  )
}

export const Checkbox = (props: any) => {
  return (
    <LabelDiv>
      <input type='checkbox' {...props} />
      {props.label}
    </LabelDiv>
  )
}

const InputDiv = tw.div`bg-gray-200 w-64 p-2 flex mb-3 rounded-md`

const InputTag = tw.input`bg-gray-200 outline-none text-sm flex-1`

const LabelDiv = styled.label`
  ${tw`flex items-center text-xs`};

  input {
    ${tw`mr-1`};
  }
`
