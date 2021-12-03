import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

export const Button = (props: any) => {
  return <Btn {...props}>{props.text}</Btn>
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
