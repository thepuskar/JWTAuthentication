import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

export const Button = (props: any) => {
  return <Btn {...props}>{props.text}</Btn>
}

export const SpinButton = (props: any) => {
  return (
    <SpinBtn type='button' disabled>
      <svg
        className='animate-spin -ml-1 mr-3 h-5 w-5 text-green-500'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
      >
        <circle
          className='opacity-25'
          cx='12'
          cy='12'
          r='10'
          stroke='currentColor'
          stroke-width='4'
        ></circle>
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        ></path>
      </svg>
      {props.text}
    </SpinBtn>
  )
}

interface ButtonProps {
  rounded?: boolean
  green?: string
  white?: string
}

const Btn = styled.button(({ rounded, green, white }: ButtonProps) => [
  rounded && tw`rounded-full`,
  green &&
    tw`border-green-500 text-green-500  hover:bg-green-500 hover:text-white`,
  white && tw`border-white text-white  hover:bg-white hover:text-gray-500`,
  tw`border-2  px-12 py-2 inline-block font-semibold`
])

const SpinBtn = styled.button`
  ${tw`rounded-full text-green-500 inline-flex items-center border-2  px-7 py-2 font-semibold
  border-green-500 leading-6  bg-white hover:bg-green-500 hover:text-white focus:border-green-500
   active:bg-green-500
   transition ease-in-out duration-150 cursor-not-allowed`};
  &:hover {
    svg {
      color: white;
    }
  }
`
