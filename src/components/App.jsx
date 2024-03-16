import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
          {emojipedia.map( (v) => 

                <Card 
                  emoji = {v.emoji}
                  name = {v.name}
                  meaning = {v.meaning}
                />
                          )}
        
      </dl>
    </div>
  );
}

export default App;
