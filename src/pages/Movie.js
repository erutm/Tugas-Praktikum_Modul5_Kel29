import React, { Fragment } from "react";
import { Link } from "react-router-dom"; // Tambahkan ini
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Movie.css";

export default function Movie() {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;

  const poster = [
    {
      title: "The Avengers",
      id: 1,
      rate: 4,
      genre: "adventure, sci-fi, action",
      img: "https://th.bing.com/th/id/OIP.PLQo97XnJG7pwnJ4YuQj5AHaK9?w=115&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      title: "Black Panther",
      id: 2,
      rate: 4,
      genre: "adventure, sci-fi, action",
      img: "https://th.bing.com/th/id/OIP.xn9xXma1QcyDZatFWWCghwHaK9?w=202&h=300&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      title: "Captain America",
      id: 3,
      rate: 4,
      genre: "adventure, sci-fi, action",
      img: "https://th.bing.com/th/id/OIP.3qM4KciCY4kMBMDbus1pqAHaJ4?w=202&h=269&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
  ];

  const data = [
    {
      title: "Oppenheimer",
      id: 4,
      rate: 4,
      genre: "biography, drama, history",
      img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
    },
    // Film lain...
  ];

  return (
    <>
      <p id="movies">Top Movies</p>
      <div className="containerTop">
        {poster.map((item) => (
          <Fragment key={item.id}>
            <Link to={`/movie/${item.id}`}> {/* Menambahkan navigasi ke detail */}
              <CardBig
                title={item.title}
                img={item.img}
                genre={item.genre}
                size={STAR_SIZE}
                color={STAR_COLOR}
              />
            </Link>
          </Fragment>
        ))}
      </div>

      {/* Daftar All Movies */}
      <div className="rowcoba">
        <div className="column">
          <p id="movies">All Movies</p>
          {data.map((item) => (
            <Fragment key={item.id}>
              <Link to={`/movie/${item.id}`}> {/* Menambahkan navigasi ke detail */}
                <CardSmall
                  title={item.title}
                  img={item.img}
                  genre={item.genre}
                  size={STAR_SIZE}
                  color={STAR_COLOR}
                />
              </Link>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
