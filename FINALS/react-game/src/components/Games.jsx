import { Link } from 'react-router-dom'

const games = [
    { id: 1, name: 'Valorant', description: 'greatest game' },
    { id: 2, name: 'COD', description: 'most fun game' },
    { id: 3, name: 'GTA 5', description: 'best game' },
    { id: 4, name: 'Genshin', description: 'beautiful game' },
]

export default function Games() {
    return (
        <>
            <h1>Games List</h1>
            <ul>
                {games.map((game) => {
                    return (
                        <li key={game.id}>
                            <Link to={`/games/${game.id}`} state={{ game }}>
                                <strong>{game.name} : {game.description}</strong>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}
