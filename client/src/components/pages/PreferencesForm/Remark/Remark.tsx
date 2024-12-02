import React, { useState } from "react";
import { useAppDispatch } from "../../../../redux/store";
import userSlice from "../../../../redux/slices/userSlice"

export default function Remark() {
    const dispach = useAppDispatch()
    const [note, setNote] = useState("")
    const hendelInRemark = (Note: string) => {
        dispach(userSlice.actions.personalNote(Note))
        setNote(Note)
    }
    return (
        <div>
            <p>הערות אישיות</p>
            <input value={note} onChange={(e)=>{ hendelInRemark(e.target.value) }} type="text" name="" id="" />
        </div>
    );
}
