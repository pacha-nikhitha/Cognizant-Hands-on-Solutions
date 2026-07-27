import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore 
        Name="Nikhil" 
        School="Cognizant Academy" 
        Total={270} 
        goal={300} 
      />
    </div>
  );
}

export default App;
