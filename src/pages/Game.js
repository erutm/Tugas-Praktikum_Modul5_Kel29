import { Fragment } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import CardBig from "../component/CardBig"; // Assuming you have CardBig component for game display
import CardSmall from "../component/CardSmall"; // Assuming you have CardSmall component for game display
import "./Game.css"; // Add your CSS file

export default function Game() {
    const navigate = useNavigate(); // Initialize navigate
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const poster = [
        {
            title: "Plants vs Zombie",
            id: 1,
            rate: 5,
            genre: "Tower Defense",
            img: "https://i.pinimg.com/736x/da/4f/0e/da4f0e15d73d71a5f463256abdc7c81c.jpg",
        },
    ];

    const data = [
        {
            title: "Game Plants vs Zombie",
            id: 1,
            rate: 4,
            genre: "Tower Defense",
            img: "https://i.pinimg.com/736x/da/4f/0e/da4f0e15d73d71a5f463256abdc7c81c.jpg",
        },
        {
            title: "Call of Duty",
            id: 2,
            rate: 4,
            genre: "Action",
            img: "https://i.etsystatic.com/23037490/r/il/7e55ce/3304054399/il_1588xN.3304054399_kmh1.jpg",
        },
        // Add more game data as needed
    ];

    return (
        <>
            <p id="game">Top Games</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <div onClick={() => navigate(`/game/${item.id}`)}>
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
                    <p id="game">All Games</p>
                    {data.map((item, index) => (
                        <Fragment key={item.id}>
                            <div onClick={() => navigate(`/game/${item.id}`)}>
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
