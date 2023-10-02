import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, id, info }) => {
  const [clicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!clicked);
  };

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button
          className="btn"
          onClick={() => {
            handleClick();
          }}
        >
          {clicked ? <AiOutlineMinus/> : <AiOutlinePlus/>}
        </button>
      </header>
      {clicked && <p>{info}</p>}
    </article>
  );
};

export default Question;
