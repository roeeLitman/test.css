import React from "react";
import LinePreferences from "./LinePreferences/LinePreferences";
import { useDispatch } from "react-redux";
import CombatPreferencesSlice from "../../../../redux/slices/CombatPreferences";
import { Action, UnknownAction } from "redux";

interface Props {
    roles: string[];
    title: string;
    functionsInRedux: {
        first: UnknownAction
        second: UnknownAction
        Third: UnknownAction
        fourth: UnknownAction
    };
}

export default function DivPreferences({
    roles,
    title,
    functionsInRedux,
}: Props) {

    return (
        <div>
            <p>{title}</p>
            <LinePreferences
                functionsInRedux={functionsInRedux.first}
                role={roles[0]}
            />
            <LinePreferences
                functionsInRedux={functionsInRedux.second}
                role={roles[1]}
            />
            <LinePreferences
                functionsInRedux={functionsInRedux.Third}
                role={roles[2]}
            />
            <LinePreferences
                functionsInRedux={functionsInRedux.fourth}
                role={roles[3]}
            />
        </div>
    );
}
