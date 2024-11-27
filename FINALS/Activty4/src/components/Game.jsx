import { useLocation } from "react-router-dom";
import Reviews from "./Reviews";
import ValorantGameplay from '../assets/valorant-gameplay.png'
import codgameplay from '../assets/cod-gameplay.png'
import gtagameplay from '../assets/gta5-gameplay.png'
import genshingameplay from '../assets/genshin-gameplay.png'
import pokemongameplay from '../assets/pokemongameplay.png'

export default function Game() {
    const location = useLocation();
    const { game } = location.state;

    const gameDetails = {
        1: {
            longDescription:
                "Valorant is a 2020 first-person tactical hero shooter video game developed and published by Riot Games. A free-to-play game, Valorant takes inspiration from the Counter-Strike series, borrowing several mechanics such as the buy menu, spray patterns, and inaccuracy while moving. Development started in 2014 and was teased under the codename Project A in 2019; the game was released on June 2, 2020 for Windows. It was ported to the Xbox Series X/S and PlayStation 5 in June 2024, albeit without crossplay between PC and console clients.",
            developers: "Riot Games",
            publishers: "Riot Games",
            gameplayMechanics:
                "Valorant is a team-based tactical hero shooter set in the near future, where players assume the roles of Agents inspired by global cultures. Played in 5v5 matches, teams alternate between attacking and defending, with Agents equipped with unique abilities and ultimates that require charging through kills, objectives, or orbs. Each round begins with players using a default pistol and signature ability charges, while additional weapons and abilities can be purchased using an in-game economy based on round performance. The game features a variety of weapons, including pistols, rifles, and shotguns, each with unique shooting patterns requiring player control for accuracy. Valorant currently offers 24 Agents, with five unlocked initially; others can be acquired using Kingdom Credits earned through gameplay or tasks. Alternatively, new Agents can be unlocked during limited periods using Valorant Points, a premium currency purchased with real money.",
            gameplayImage: ValorantGameplay,
        },
        2: {
            longDescription:
                "Call of Duty: WWII, released on November 3, 2017, is a first-person shooter developed by Sledgehammer Games and published by Activision. It is the fourteenth main installment in the series, returning to a World War II setting after nearly a decade, and centers around a squad in the 1st Infantry Division during Operation Overlord on the Western Front. Players control Ronald 'Red' Daniels, who relies on squadmates for resources like ammo and health. The game's multiplayer introduces a new Divisions system and a social hub called Headquarters. The developers, having worked on the futuristic Call of Duty: Advanced Warfare, chose to return to WWII, aiming for an authentic war experience that includes depictions of Nazi atrocities. The game received positive reviews for its story, combat, multiplayer modes, and visuals, though it was criticized for a lack of innovation in the single-player mode. A commercial success, it grossed $500 million in its first three days and over $1 billion by the end of 2017, becoming the highest-grossing console game of the year in North America.",
            developers: "Sledgehammer Games",
            publishers: "Activision",
            gameplayMechanics:
                "Call of Duty: WWII is a first-person shooter that departs from the advanced movement systems of its recent predecessors, such as double jumping and wall running. Instead, it returns to a more traditional 'boots on the ground' gameplay style, focusing on non-aerial ground combat. The game reintroduces an unlimited sprint mechanic, similar to previous titles, and replaces the 'slide' movement mechanic with a new 'hit-the-deck' feature. This allows players to quickly dive to the ground for cover, reminiscent of the 'dolphin dive' mechanic from Treyarch's Call of Duty: Black Ops and Black Ops II.",
            gameplayImage: codgameplay,
        },
        3: {
            longDescription: 
                "Grand Theft Auto V, released in 2013, is an action-adventure game set in the fictional state of San Andreas, featuring three protagonists—Michael, Franklin, and Trevor—who navigate heists while facing pressure from corrupt authorities and criminals. The game offers an open-world experience with both single-player and multiplayer modes, where players can switch between characters and explore the vast environment on foot or by vehicle. It became a commercial and critical success, breaking sales records and earning over $8.5 billion worldwide, making it one of the best-selling and most profitable video games ever made.",
            developers: "Rockstar North",
            publishers: "Rockstar Games",
            gameplayMechanics: 
                "Grand Theft Auto V is an action-adventure game where players control three criminals—Michael, Trevor, and Franklin—who complete interconnected missions in the fictional world of San Andreas, which includes the open countryside, Blaine County, and Los Santos. Players can freely explore the vast open world, engage in combat using melee attacks, firearms, and explosives, and navigate the environment using various vehicles, including planes. The game features a dynamic 'wanted' system where law enforcement pursues players committing crimes. Players switch between the three protagonists to complete missions, with each having unique skills like bullet time, slow-motion driving, or increased combat effectiveness. Outside of missions, players can engage in activities like scuba diving, visiting businesses, and customizing their characters and properties.",
            gameplayImage: gtagameplay,

        },
        4: {
            longDescription:
            "Genshin Impact, released in 2020 by MiHoYo/HoYoverse, is a free-to-play action role-playing game set in the fantasy world of Teyvat, which consists of seven nations each associated with a different element and ruled by an archon. Players control the Traveler, an interstellar adventurer searching for their lost twin, accompanied by their guide, Paimon. The game features an anime-style open world, elemental magic-based combat, and character-switching mechanics. It is updated regularly with new content and uses a gacha system for monetization. Despite its positive reception for its combat and immersive world, it has faced criticism for its endgame, monetization, and controversy over censorship and character design. By the end of 2022, it had grossed nearly $3.8 billion, making it the highest-grossing first-year launch for any video game.",
            developers: "Hoyoverse",
            publishers: "Hoyoverse",
            gameplayMechanics: 
            "Genshin Impact is an open-world action role-playing game where players control a party of four interchangeable characters, using character-switching during combat to create diverse skill and attack combinations. Characters can be enhanced by leveling up, improving artifacts, and equipping better weapons. Players explore Teyvat, completing challenges and defeating bosses to earn rewards and increase their Adventure Rank, which unlocks new quests and increases the World Level, affecting enemy strength and rewards. The game also includes a multiplayer co-op mode, where up to four players can team up for exploration and battles. Characters are mostly obtained through the gacha system, using in-game currency called Primogems, with a pity system ensuring rare items after a set number of pulls.",
            gameplayImage: genshingameplay

        },
        5: {
            longDescription:
            "Pokémon is a Japanese video game series created by Satoshi Tajiri and developed by Game Freak, published by Nintendo and The Pokémon Company. The franchise began in 1996 with the release of Pocket Monsters Red and Green for the Game Boy and has since evolved into one of the highest-grossing media franchises globally, with games, anime, movies, and merchandise. The core series of role-playing games (RPGs) is released in generations, with each introducing new Pokémon, storylines, and characters. Spin-offs in various genres, such as action RPGs and puzzle games, have also been developed. As of March 2023, the Pokémon series has sold over 480 million units worldwide, making it the fourth best-selling video game franchise.",
            developers: "Game Freak, ILCA",
            publishers: "Nintendo, The Pokemon Company",
            gameplayMechanics: 
            "In the Pokémon games, players begin by receiving a starter Pokémon from the local Professor and are tasked with exploring a fictional region, battling and catching Pokémon, and progressing through the story. The gameplay revolves around turn-based battles where players must weaken wild Pokémon to capture them with Poké Balls. Players can trade Pokémon and use abilities, types, and evolutions to build strong teams. The main objective is to defeat rival trainers, including Gym Leaders and the Elite Four, to earn Gym Badges and ultimately complete the Pokédex by capturing every species. Various locations like Pokémon Centers, Poké Marts, and Gyms are key to the adventure.",
            gameplayImage: pokemongameplay

        },
    };

    const gameReviews = {
        1: [
            { name: "John Pucay", rating: 5, review: "An amazing game! I love the tactical gameplay and unique agent abilities." },
            { name: "Jane Ero", rating: 4, review: "Great experience, but it can get a bit competitive at times." },
            { name: "Jeremy Ebreo", rating: 4, review: "I enjoy the graphics and strategy, but it could use some better matchmaking." },
            { name: "Donald Trump", rating: 5, review: "One of the best FPS games I've played. It's fun and rewarding." },
            { name: "Patricia Garcia", rating: 3, review: "The game is good, but it has a steep learning curve. Needs better tutorials." },
        ],
        2: [
            { name: "Kamal Harris", rating: 5, review: "Classic Call of Duty experience. The WWII setting is fantastic." },
            { name: "Lenny Robredo", rating: 4, review: "Great multiplayer modes, but the campaign could be longer." },
            { name: "Eric Yap", rating: 4, review: "Nazi Zombies mode is great! But there should be more variety in the maps." },
            { name: "Adonis", rating: 5, review: "The game captures the intensity of WWII really well. The visuals are top-notch." },
            { name: "Buenafe", rating: 3, review: "The game is fun but lacks new features compared to previous titles." },
        ],
        3: [
            { name: "Cherrie Almazan", rating: 5, review: "GTA 5 is a masterpiece! The open world is incredibly detailed and immersive, and the story is engaging from start to finish." },
            { name: "Kristal Marcelo", rating: 4, review: "Amazing game! The heist missions are a lot of fun, but I wish there were more options for customizing vehicles." },
            { name: "Taylor Swift", rating: 4, review: "Love the freedom to explore the city and cause chaos, but the game could have used a bit more variety in side missions." },
            { name: "Olivia Rodrigo", rating: 5, review: "GTA 5 is a blast! The three-character system adds so much depth to the story, and the graphics are stunning." },
            { name: "Bongbong Marcos", rating: 3, review: "It's a fun game, but I feel like the online component needs more updates. The story mode is great, though." }
            
        ],
        4: [
            { name: "Lily Roberts", rating: 5, review: "Genshin Impact is a visually stunning game with amazing world-building. The combat mechanics are smooth, and the story keeps me coming back for more." },
            { name: "Judas", rating: 4, review: "I love the elemental combat system, but it can be a bit grindy at times. The exploration is so fun, though, I can't stop exploring Teyvat!" },
            { name: "Sabrina Carpenter", rating: 4, review: "The characters and story are fantastic, but I feel the gacha system can be frustrating. Still, the world and combat are top-notch." },
            { name: "Ethan Clark", rating: 5, review: "The art and music in this game are incredible. It's one of the best free-to-play RPGs I've ever played, with constant updates and new content." },
            { name: "Sisiwit", rating: 3, review: "While the game looks beautiful and has great gameplay, the pay-to-win elements in the gacha system can be disappointing at times." }
        ],
        5: [
            { name: "Erwin Smith", rating: 5, review: "Pokemon is a timeless classic! The thrill of catching and battling creatures never gets old. The new features in recent games keep it fresh." },
            { name: "Eren Yeager", rating: 4, review: "Love the new mechanics, but I miss some of the older regions. Still, the game has a charm that's hard to beat!" },
            { name: "Jona Buyayao", rating: 4, review: "The world of Pokemon is always fun to explore, and I enjoy the new Pokemon designs. However, the storylines could use a bit more depth." },
            { name: "Irish Paguel", rating: 5, review: "Pokemon has always been my go-to game! The recent additions, like online battles and raids, are amazing. I love training my team to be the best!" },
            { name: "Precious Javier", rating: 3, review: "While Pokemon is a great game, I feel like the newer entries could have more challenging battles. It's a bit easy after you get the hang of it." }
        ]
    };
    

    const details = gameDetails[game.id];
    const reviews = gameReviews[game.id];

    return (
        <div className="game-container">
            <h1>{game.name}</h1>

            <div className="banner">
                <img src={game.logo} alt={`${game.name} Logo`} className="game-banner" />
                <p className="long-description">{details.longDescription}</p>
            </div>

            <div className="game-info-table">
                <h2>Developers & Publishers</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Developers</th>
                            <td>{details.developers}</td>
                        </tr>
                        <tr>
                            <th>Publishers</th>
                            <td>{details.publishers}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="gameplay-section">
                <h2>Gameplay Mechanics</h2>
                <p>{details.gameplayMechanics}</p>
                <img
                    src={details.gameplayImage}
                    alt={`${game.name} Gameplay`}
                    className="gameplay-image"/>
        <Reviews reviews={reviews} game={game} />
        </div>
    </div>
    );
}
