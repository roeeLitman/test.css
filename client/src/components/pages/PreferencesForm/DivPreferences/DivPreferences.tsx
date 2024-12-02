import React from "react";
import LinePreferences from "./LinePreferences/LinePreferences";
import { useDispatch } from "react-redux";
import CombatPreferencesSlice from "../../../../redux/slices/CombatPreferences";

interface Props {
    roles: string[];
    title: string
    functionsInRedux: any
}

export default function DivPreferences({roles, title, functionsInRedux}: Props) {
    const usedispach = useDispatch()

    return (
        <div>
            <p>{title}</p>
            <LinePreferences functionsInRedux={functionsInRedux.activ.golani}   role={roles[0]}/>
            <LinePreferences functionsInRedux={functionsInRedux.activ.armor}   role={roles[1]}/>
            <LinePreferences functionsInRedux={functionsInRedux.activ.artillery}   role={roles[2]}/>
            <LinePreferences functionsInRedux={functionsInRedux.activ.searchAndRescue}   role={roles[3]}/>
        </div>
    );
}
