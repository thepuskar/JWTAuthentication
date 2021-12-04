import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import { Error } from '@components'

export const Input = React.forwardRef((props: any, ref) => {
  const { error } = props
  return (
    <InputMain>
      <InputDiv className={error && `border-red-500`}>
        {props?.tag && props.tag}
        <InputTag {...props} ref={ref} />
      </InputDiv>
      {error && <Error msg={error} />}
    </InputMain>
  )
})

export const Checkbox = (props: any) => {
  return (
    <LabelDiv>
      <input type='checkbox' {...props} />
      {props.label}
    </LabelDiv>
  )
}

const InputMain = tw.div`relative mb-3 sm:w-80 md:w-3/5 flex flex-col`

const InputDiv = tw.div`bg-gray-200 w-full  p-2 flex mb-1 rounded-md focus:border-indigo-400 border focus:outline-none  `

const InputTag = tw.input`bg-gray-200 outline-none text-sm flex-1`

const LabelDiv = styled.label`
  ${tw`flex items-center text-xs`};

  input {
    ${tw`mr-1`};
  }
`
