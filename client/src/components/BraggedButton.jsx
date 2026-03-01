import { useState } from "react";
import selectedIcon from "../assets/xselected.svg";
import unselectedIcon from "../assets/xunselected.svg";

export default function BragButton() {
  const [isSelected, setIsSelected] = useState(false);

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
        src={isSelected ? selectedIcon : unselectedIcon} 
        alt="brag button"
        width="24"
        height="24"
      />
    </button>
  );
}