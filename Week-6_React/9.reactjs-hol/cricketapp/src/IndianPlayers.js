import React from 'react';

function IndianPlayers() {
  // Declare array of Indian Players for destructuring
  const indianPlayers = ['Sachin', 'Dhoni', 'Virat', 'Rohit', 'Yuvraj', 'Raina'];

  // Destructuring feature of ES6
  const [first, second, third, fourth, fifth, sixth] = indianPlayers;

  // Odd Team Players: First, Third, Fifth
  // Even Team Players: Second, Fourth, Sixth
  const oddTeam = [`First: ${first}`, `Third: ${third}`, `Fifth: ${fifth}`];
  const evenTeam = [`Second: ${second}`, `Fourth: ${fourth}`, `Sixth: ${sixth}`];

  // Declare two arrays: T20players and RanjiTrophyplayers
  const T20players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyplayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];

  // Merge the two arrays using Spread Operator (...)
  const mergedPlayers = [...T20players, ...RanjiTrophyplayers];

  return (
    <div className="card">
      <h2>Odd Team Players</h2>
      <ul className="player-list odd-list">
        {oddTeam.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <hr className="divider" />

      <h2>Even Team Players</h2>
      <ul className="player-list even-list">
        {evenTeam.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <hr className="divider" />

      <h2>List of Indian Players (Merged T20 & Ranji)</h2>
      <ul className="player-list merged-list">
        {mergedPlayers.map((player, index) => (
          <li key={index}>Mr. {player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
