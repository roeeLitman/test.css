import React from 'react'


interface Props{
    role: string
}

export default function Role({role}:Props) {
  return (
    <span>{role}</span>
  )
}
