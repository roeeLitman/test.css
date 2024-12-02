import React from 'react'
import Square from './Square'
import Role from './Role'
import { useDispatch } from 'react-redux'
import store from '../../../../../redux/store'

interface Props{
    role: string
    functionsInRedux: any
}

export default function LinePreferences({role }:Props) {

  return (
    <div>
        <Role role={role}/>
        <Square  number={1}/>
        <Square  number={2}/>
        <Square  number={3}/>
        <Square  number={4}/>
        <Square  number={5}/>
    </div>
  )
}
