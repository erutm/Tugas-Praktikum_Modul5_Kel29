// GameDetail.js
import React from "react";
import { useParams } from "react-router-dom";

export default function GameDetail() {
  const { id } = useParams();

  // Dummy data for games
  const gameData = {
    1: {
      title: "Plants vs Zombie",
      genre: "Tower Defense",
      description: "Defend your garden against the zombie invasion.",
      img: "https://i.pinimg.com/736x/da/4f/0e/da4f0e15d73d71a5f463256abdc7c81c.jpg",
    },
    2: {
      title: "Call of Duty",
      genre: "Action",
      description: "A first-person shooter video game franchise.",
      img: "https://i.etsystatic.com/23037490/r/il/7e55ce/3304054399/il_1588xN.3304054399_kmh1.jpg",
    },
    // Add more games as needed
  };

  const game = gameData[id];

  if (!game) {
    return <p>Game not found</p>;
  }

  return (
    <div>
      <h1>{game.title}</h1>
      <img 
        src={game.img} 
        alt={game.title} 
        style={{ maxWidth: '400px', width: '100%', height: 'auto' }} // Set styles to control image size
      />
      <p>{game.genre}</p>
      <p>{game.description}</p>
    </div>
  );
}
