import React from "react";

function Footer(props) {
  return(
    <div className="flex flex-row justify-center">
      <div className="flex flex-col justify-center items-center shadow-3xl m-8 p-8 gap-4 rounded-2xl  bg-white">
        <div className="text-lg font-600">Current Score: {props.scores.currentScore}</div>
        <div className="text-lg font-600">Highest Score: {props.scores.topScore}</div>
      </div>
    </div>
  )
}

export default Footer;
