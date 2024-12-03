import React from 'react'
import Guidelines from './Guidelines/Guidelines'
import DivPreferences from './DivPreferences/DivPreferences'
import Remark from './Remark/Remark'
import InputName from './InputName/InputName'
import './PreferencesForm.css'
import CombatPreferencesSlice from '../../../redux/slices/CombatPreferences'
import SupportPreferences from '../../../redux/slices/SupportPreferences'
import techPreferences from '../../../redux/slices/TechPreferences'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import {fetchToServer} from '../../../redux/slices/userSlice'
import userSlice from '../../../redux/slices/userSlice'

export default function PreferencesForm() {
    const dispach = useAppDispatch()
    const {user, CombatPreferences, SupportPreferencesSlice, TechPreferencesSlice} = useAppSelector((state) => {return state})
    const hendelInSubmit = async() => {
        
        await (async () => {  dispach(userSlice.actions.CombatPreferences(CombatPreferences.user))})()
        await (async ()=> { dispach(userSlice.actions.SupportPreferences(SupportPreferencesSlice.user))})()
        await (async () => { dispach(userSlice.actions.techPreferences(TechPreferencesSlice.user))})()
        await dispach(fetchToServer(user.user))
        console.log(user.user);
        
    }
  return (
    <div className='preferencesForm'>
        <InputName/>
        <Guidelines/>
        <DivPreferences functionsInRedux={{...CombatPreferencesSlice.actions}} title={'רצון לשרת כלוחם בזרוע היבשה'} roles={["גולני", "שריון", "תותחנים", "חילוץ והצלה"]}/>
        <DivPreferences functionsInRedux={{...SupportPreferences.actions}} title={"רצון לשרת כג'ובניק"} roles={['מש"ק ממטרות', 'רס"ר בנימרודי', "טבח", "ממלא מקרר בסנדוויצ'ים"]}/>
        <DivPreferences functionsInRedux={{...techPreferences.actions}} title={'רצון לשרת בתכנית קודקוד'} roles={["מפתח פולסטאק", "מפתח דאטא", "מפתח דבאופס", "תורן"]}/>
        <Remark/>
        <button onClick={hendelInSubmit}>add</button>
    </div>
  )
}
