import React from "react";
import { useDispatch } from "react-redux";

interface Props {
    number: number;
}
export default function Square({ number }: Props) { 
    return (
        <div>
            <label className="kNQqukZg" htmlFor="">
                <input type="radio" value={number} />
                <span>{number}</span>
            </label>
        </div>
    );
}
