import React from 'react'
import Guidelines from './Guidelines/Guidelines'
import DivPreferences from './DivPreferences/DivPreferences'
import Remark from './Remark/Remark'
import InputName from './InputName/InputName'
import './PreferencesForm.css'
import CombatPreferencesSlice from '../../../redux/slices/CombatPreferences'
import SupportPreferences from '../../../redux/slices/SupportPreferences'
import techPreferences from '../../../redux/slices/TechPreferences'
export default function PreferencesForm() {

  return (
    <div className='preferencesForm'>
        <InputName/>
        <Guidelines/>
        <DivPreferences functionsInRedux={{...CombatPreferencesSlice.actions}} title={'רצון לשרת כלוחם בזרוע היבשה'} roles={["גולני", "שריון", "תותחנים", "חילוץ והצלה"]}/>
        <DivPreferences functionsInRedux={{...SupportPreferences.actions}} title={"רצון לשרת כג'ובניק"} roles={['מש"ק ממטרות', 'רס"ר בנימרודי', "טבח", "ממלא מקרר בסנדוויצ'ים"]}/>
        <DivPreferences functionsInRedux={{...techPreferences.actions}} title={'רצון לשרת בתכנית קודקוד'} roles={["מפתח פולסטאק", "מפתח דאטא", "מפתח דבאופס", "תורן"]}/>
        <Remark/>
        <button>add</button>
    </div>
  )
}
