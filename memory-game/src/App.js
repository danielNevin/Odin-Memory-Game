import React, { useState } from "react";
import Header from "./Components/Header";
import RandomiseCards from "./Components/RandomiseCards";
import Footer from "./Components/Footer";

function App() {
  const [scores, setScores] = useState({
    currentScore: 0,
    topScore: 0
  })

  const updateScores = (newScores) => {
    setScores(newScores);
  }

  return (
    <div className="h-screen bg-neutral-50">
      <Header scores={scores}/>
      <RandomiseCards scores={scores} updateScores={updateScores}/>
      <Footer scores={scores}/>
    </div>
  );
}

export default App;
