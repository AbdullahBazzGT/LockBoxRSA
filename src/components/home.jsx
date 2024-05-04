import React from "react";
import { useState } from "react";

function Home() {

    const [currentState, setCurrentState] = React.useState(0);

  return (
    <div class="font-mono bg-gradient-to-b from-bgOrange to-bg ...">
        <div className="text-center bg-top p-4">
            <h1 className="text-4xl text-white font-bold uppercase tracking-wide">Title</h1>
        </div>
        <div className="text-center p-12">
            <p>Description</p>
        </div>
        <div className="text-center p-4">
            <p>Click the button to increase the state</p>
        <div>
            <button onClick={() => setCurrentState(currentState + 1)} className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded">
                Click me
            </button>
            <p className="text-center p-4">Current state: {currentState}</p>
        </div>
        </div>
    </div>
  );
}

export default Home;