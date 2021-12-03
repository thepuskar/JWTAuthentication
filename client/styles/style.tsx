import tw from 'twin.macro'
import styled from 'styled-components'
import { PropType } from '@interfaces'

export const Anchor = tw.a`text-xs`
export const BoldText = styled.h2(({ color }: PropType) => [
  color === 'green' && tw`text-green-500`,
  tw`text-3xl font-bold  mb-2`
])

export const Text = styled.p(({ color, marginTopBtm }: PropType) => [
  color === 'gray' && tw`text-gray-500`,
  marginTopBtm && tw`my-2`,
  tw`text-base`
])

export const MainDiv = styled.div(({ center }: PropType) => [
  center && tw`justify-center`,
  tw`flex flex-col  min-h-screen py-2 bg-gray-100 `
])

export const LogoText = styled.div`
  ${tw`text-left font-bold`};

  span {
    ${tw`text-green-500`}
  }
`

export const Underline = tw.div`border-2 w-10 border-green-500 inline-block mb-2`
