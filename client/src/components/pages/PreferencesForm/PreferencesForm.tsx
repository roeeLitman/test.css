import React from 'react'
import Guidelines from './Guidelines/Guidelines'
import DivPreferences from './DivPreferences/DivPreferences'
import Remark from './Remark/Remark'
import InputName from './InputName/InputName'
import './PreferencesForm.css'
import CombatPreferencesSlice from '../../../redux/slices/CombatPreferences'
export default function PreferencesForm() {

  return (
    <div className='preferencesForm'>
        <InputName/>
        <Guidelines/>
        <DivPreferences functionInRedux={CombatPreferencesSlice.actions} title={'רצון לשרת כלוחם בזרוע היבשה'} roles={["גולני", "שריון", "תותחנים", "חילוץ והצלה"]}/>
        <DivPreferences functionInRedux={} title={"רצון לשרת כג'ובניק"} roles={['מש"ק ממטרות', 'רס"ר בנימרודי', "טבח", "ממלא מקרר בסנדוויצ'ים"]}/>
        <DivPreferences functionInRedux={"TechPreferences"} title={'רצון לשרת בתכנית קודקוד'} roles={["מפתח פולסטאק", "מפתח דאטא", "מפתח דבאופס", "תורן"]}/>
        <Remark/>
        <button>add</button>
    </div>
  )
}