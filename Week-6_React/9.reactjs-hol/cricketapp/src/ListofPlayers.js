import React from 'react';

function ListofPlayers() {
  // Declare an array with 11 players and store details of their names and scores
  const players = [
    { name: 'Jack', score: 50 },
    { name: 'Steve', score: 55 },
    { name: 'John', score: 70 },
    { name: 'David', score: 80 },
    { name: 'Rahul', score: 90 },
    { name: 'Sachin', score: 100 },
    { name: 'Dhoni', score: 75 },
    { name: 'Virat', score: 85 },
    { name: 'Rohit', score: 60 },
    { name: 'Yuvraj', score: 68 },
    { name: 'Bumrah', score: 45 }
  ];

  // Filter the players with scores below 70 using ES6 Arrow Function
  const playersBelow70 = players.filter((player) => player.score < 70);

  return (
    <div className="card">
      <h2>List of Players</h2>
      <ul className="player-list">
        {players.map((item, index) => (
          <li key={index}>
            Mr. {item.name} <span>{item.score}</span>
          </li>
        ))}
      </ul>

      <hr className="divider" />

      <h2>List of Players having score below 70</h2>
      <ul className="player-list filtered-list">
        {playersBelow70.map((item, index) => (
          <li key={index}>
            Mr. {item.name} <span>{item.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
