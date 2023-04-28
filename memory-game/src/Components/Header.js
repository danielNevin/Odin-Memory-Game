import React from "react";

function Header() {
  return(
    <div className="flex flex-row justify-center">
      <div className="flex flex-col justify-center items-center shadow-3xl m-8 p-8 gap-2 rounded-2xl bg-white">
        <div className="font-sans text-xl font-bold">Memory Card Game</div>
        <div className="text-lg">Increase your score by clicking on the Colour you haven't pressed yet</div>
        <div className="text-lg">You lose when you click the same Colour twice</div>
      </div>
    </div>
  )
}

export default Header;