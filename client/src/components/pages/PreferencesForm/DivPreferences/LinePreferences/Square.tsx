import React from "react";
import { useDispatch } from "react-redux";
import './Square.css'

interface Props {
    number: number;
    setHowMuchWant: (num: number) => void
}
export default function Square({ number, setHowMuchWant }: Props) { 
    return (
        <div >
            <label className="kNQqukZg" htmlFor="">
                <input onClick={(e)=>{ setHowMuchWant(e.target.value)}} type="radio" value={number} />
                <span >{number}</span>
            </label>
        </div>
    );
}
