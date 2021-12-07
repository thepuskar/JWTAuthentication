import React from 'react'

interface Props {
  msg: string
}

export const Error = ({ msg }: Props) => {
  return (
    <span className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'>
      {msg}
    </span>
  )
}
