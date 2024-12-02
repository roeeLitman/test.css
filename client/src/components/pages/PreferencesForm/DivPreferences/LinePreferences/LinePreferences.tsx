import React, { useEffect, useState } from 'react'
import Square from './Square'
import Role from './Role'
import { useDispatch } from 'react-redux'
import store, { useAppSelector } from '../../../../../redux/store'
import { UnknownAction } from 'redux'

interface Props{
    role: string,
    functionsInRedux: UnknownAction //((howMuchWant: number)=>void)
}

export default function LinePreferences({role, functionsInRedux }:Props) {
    const [howMuchWant, setHowMuchWant ] = useState<null | number>(null)
    const a = useAppSelector((s)=> s.CombatPreferences.user)
    const dispach = useDispatch()
    useEffect(()=>{
        dispach((functionsInRedux(howMuchWant)))
        console.log(a);
        
    },[howMuchWant])
  return (
    <div>
        <Role role={role}/>
        <Square setHowMuchWant={setHowMuchWant}  number={1}/>
        <Square setHowMuchWant={setHowMuchWant}  number={2}/>
        <Square setHowMuchWant={setHowMuchWant}  number={3}/>
        <Square setHowMuchWant={setHowMuchWant}  number={4}/>
        <Square setHowMuchWant={setHowMuchWant}  number={5}/>
    </div>
  )
}
