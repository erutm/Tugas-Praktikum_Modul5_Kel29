import React from "react";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const { id } = useParams();

  // Data film bisa didapat dari API atau bisa menggunakan dummy data seperti ini.
  const movieData = {
    1: {
      title: "The Avengers",
      genre: "adventure, sci-fi, action",
      description: "Earth's mightiest heroes must come together to stop an alien invasion.",
      img: "https://th.bing.com/th/id/OIP.PLQo97XnJG7pwnJ4YuQj5AHaK9?w=115&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    2: {
      title: "Black Panther",
      genre: "adventure, sci-fi, action",
      description: "T'Challa returns home to Wakanda to take his rightful place as king.",
      img: "https://th.bing.com/th/id/OIP.xn9xXma1QcyDZatFWWCghwHaK9?w=202&h=300&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    3: {
      title: "Captain America",
      genre: "adventure, sci-fi, action",
      description: "Steve Rogers volunteers to be injected with a super-soldier serum to fight in World War II.",
      img: "https://th.bing.com/th/id/OIP.3qM4KciCY4kMBMDbus1pqAHaJ4?w=202&h=269&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    4: {
      title: "Oppenheimer",
      genre: "biography, drama, history",
      description: "The story of J. Robert Oppenheimer and his role in the development of the atomic bomb.",
      img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
    },
  };

  const movie = movieData[id];

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.img} alt={movie.title} style={{ maxWidth: '400px', width: '100%', height: 'auto' }}/>
      <p>{movie.genre}</p>
      <p>{movie.description}</p>
    </div>
  );
}
