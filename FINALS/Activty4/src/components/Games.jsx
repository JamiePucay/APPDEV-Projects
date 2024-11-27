import { Link } from 'react-router-dom';
import valorantLogo from '../assets/valorant-logo.png';
import codLogo from '../assets/cod-logo.png';
import gta5Logo from '../assets/gta5-logo.png';
import genshinLogo from '../assets/genshin-logo.png';
import pokemonLogo from '../assets/pokemon-logo.png';

const games = [
    { 
        id: 1, 
        name: 'Valorant', 
        description: 'Tactical 5v5 Shooter Blending Precision Gunplay with Unique Agent Abilities', 
        logo: valorantLogo
    },
    { 
        id: 2, 
        name: 'Call of Duty WWII', 
        description: 'Action-Packed Warfare with Intense Campaigns, Multiplayer, and Battle Royale', 
        logo: codLogo
    },
    { 
        id: 3, 
        name: 'Grand Theft Auto 5', 
        description: 'Open-World Crime Epic with Thrilling Heists and Endless Adventures', 
        logo: gta5Logo
    },
    { 
        id: 4, 
        name: 'Genshin Impact', 
        description: 'Stunning Open-World RPG with Elemental Combat and Rich Storytelling', 
        logo: genshinLogo
    },
    { 
        id: 5, 
        name: 'Pokemon', 
        description: 'Iconic Adventure RPG of Catching, Battling, and Training Creatures', 
        logo: pokemonLogo
    },
];

export default function Games() {
    return (
        <div className="games-container">
            <h1>Games List</h1>
            <div className="cards">
                {games.map((game) => (
                    <Link 
                        to={`/games/${game.id}`} 
                        state={{ game }} 
                        key={game.id} 
                        className="card"
                    >
                        <img src={game.logo} alt={`${game.name} Logo`} className="card-logo" />
                        <div className="card-content">
                            <h2>{game.name}</h2>
                            <p>{game.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

