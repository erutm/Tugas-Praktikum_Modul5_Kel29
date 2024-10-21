import { Fragment } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import CardBig from "../component/CardBig"; // Assuming you have CardBig component for book display
import CardSmall from "../component/CardSmall"; // Assuming you have CardSmall component for book display
import "./Buku.css"; // Add your CSS file

export default function Buku() {
    const navigate = useNavigate(); // Initialize navigate
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const poster = [
        {
            title: "Humor Cemen",
            id: 1,
            rate: 5,
            genre: "Humor",
            img: "https://www.bukukita.com/babacms/displaybuku/95287_f.jpg",
        },
    ];

    const data = [
        {
            title: "Humor Cemen",
            id: 1,
            rate: 4,
            genre: "Humor",
            img: "https://www.bukukita.com/babacms/displaybuku/95287_f.jpg",
        },
        // Add more books here
    ];

    return (
        <>
            <p id="buku">Top Books</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <div onClick={() => navigate(`/buku/${item.id}`)}>
                            <CardBig
                                title={item.title}
                                img={item.img}
                                genre={item.genre}
                                size={STAR_SIZE}
                                color={STAR_COLOR}
                            />
                        </div>
                        {poster.length === index + 1 ? (
                            <div style={{ marginRight: 40 }} />
                        ) : null}
                    </Fragment>
                ))}
            </div>
            <div className="rowcoba">
                <div className="column">
                    <p id="buku">All Books</p>
                    {data.map((item, index) => (
                        <Fragment key={item.id}>
                            <div onClick={() => navigate(`/buku/${item.id}`)}>
                                <CardSmall
                                    title={item.title}
                                    img={item.img}
                                    genre={item.genre}
                                    size={STAR_SIZE}
                                    color={STAR_COLOR}
                                />
                            </div>
                            {data.length === index + 1 && (
                                <div style={{ marginBottom: 80 }} />
                            )}
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    );
}
