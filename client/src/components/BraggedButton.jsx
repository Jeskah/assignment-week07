import { useState } from "react";
import XSelected from "../assets/x.svg";
import XunSelected from "../assets/xstroke.svg";

export default function BragButton() {
const [isSelected, setIsSelected] = useState(!true);

const toggleSelected = () => {
    setIsSelected(prev => !prev);
};

return (
    <button 
    onClick={toggleSelected}
    style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0
    }}
    >

    <img 
        src={isSelected ? XSelected : XunSelected} 
        alt="brag button"
        width="24"
        height="24"
    />
    </button>
);
}