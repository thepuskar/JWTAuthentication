import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { PropType } from '@interfaces'

export const Icons = (props: any) => {
  return (
    <IconDiv {...props}>
      {props.icons.map((Icon: any, i: number) => {
        return (
          <IconBorder href='#' key={i}>
            <Icon className='text-sm' />
          </IconBorder>
        )
      })}
    </IconDiv>
  )
}

const IconDiv = styled.div(({ center }: PropType) => [
  center && tw`justify-center`,

  tw`flex  my-2`
])

const IconBorder = tw.a`border-2 border-gray-200 rounded-full p-3 mx-1 focus:border-green-500`
