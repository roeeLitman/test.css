import React, { useEffect, useState } from "react";
import Square from "./Square";
import Role from "./Role";
import { useDispatch } from "react-redux";
import { UnknownAction } from "redux";
import "./LinePreferences.css";

interface Props {
    role: string;
    functionsInRedux: UnknownAction; //((howMuchWant: number)=>void)
}

export default function LinePreferences({ role, functionsInRedux }: Props) {
    const [howMuchWant, setHowMuchWant] = useState<null | number>(null);
    const dispach = useDispatch();
    useEffect(() => {
        dispach(functionsInRedux(howMuchWant));
    }, [howMuchWant]);
    return (
        <div className="linePreferences">
            <Role role={role} />
            <div className="Squares">
                <Square setHowMuchWant={setHowMuchWant} number={1} />
                <Square setHowMuchWant={setHowMuchWant} number={2} />
                <Square setHowMuchWant={setHowMuchWant} number={3} />
                <Square setHowMuchWant={setHowMuchWant} number={4} />
                <Square setHowMuchWant={setHowMuchWant} number={5} />
            </div>
        </div>
    );
}
