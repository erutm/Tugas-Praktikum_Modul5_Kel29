import React from "react";
import { useParams } from "react-router-dom";

export default function BukuDetail() {
  const { id } = useParams();

  // Dummy data for books
  const bukuData = {
    1: {
      title: "Humor Cemen",
      genre: "Humor",
      description: "A funny tale about life's quirks.",
      img: "https://www.bukukita.com/babacms/displaybuku/95287_f.jpg",
    },
    2: {
      title: "The Great Gatsby",
      genre: "Novel",
      description: "A story about the American dream.",
      img: "https://m.media-amazon.com/images/I/51vv75ygyWL.jpg",
    },
    // Add more books as needed
  };

  const buku = bukuData[id];

  if (!buku) {
    return <p>Book not found</p>;
  }

  return (
    <div>
      <h1>{buku.title}</h1>
      <img src={buku.img} alt={buku.title} style={{ maxWidth: '400px', width: '100%', height: 'auto' }} />
      <p>{buku.genre}</p>
      <p>{buku.description}</p>
    </div>
  );
}
