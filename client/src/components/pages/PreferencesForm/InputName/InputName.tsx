import React, { useState } from "react";
import "./InputName.css";
import userSlice from "../../../../redux/slices/userSlice";
import { useDispatch } from "react-redux";
export default function InputName() {
    const [nameFroInput, setName] = useState("");
    const dispath = useDispatch();
    const hendelEnterName = async (name: string) => {
        dispath(userSlice.actions["inputname"](name));
        setName(name);
    };

    return (
        <div className="inputName">
            <p>שם מלא</p>
            <input
                value={nameFroInput}
                onChange={(e) => {
                    hendelEnterName(e.target.value);
                }}
                type="text"
            />
        </div>
    );
}
