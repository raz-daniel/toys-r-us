import { ChangeEvent, useEffect, useState } from 'react'
import './List.css'
import Card from '../card/Card'
import Audience from '../../../models/audience/Audience'
import audiencesServices from '../../../services/audiences'
import Game from '../../../models/game/Game'
import gamesServices from '../../../services/games'
import { useLocation } from 'react-router-dom'


export default function List(): JSX.Element {

    const [audiences, setAudiences] = useState<Audience[]>([])
    const [games, setGames] = useState<Game[]>([])
    const [priceSearch, setPriceSearch] = useState<number>()

    const location = useLocation()
    const { selectedAudienceId } = location.state || {};

    useEffect(() => {
        (async () => {
            try {
                const audiences = await audiencesServices.getAudiences()
                setAudiences(audiences)

                if (selectedAudienceId) {
                    const gamesFromForm = await gamesServices.getGamesPerAudience(selectedAudienceId)
                    setGames(gamesFromForm)
                }

            } catch (error) {
                alert(error)
            }
        })()
    }, [selectedAudienceId])

    async function audienceChanged(event: ChangeEvent<HTMLSelectElement>) {
        try {
            const selectedAudienceId = event.currentTarget.value
            const games = await gamesServices.getGamesPerAudience(selectedAudienceId)
            setGames(games)

        } catch (error) {
            alert(error)
        }
    }

    function removeGame(id: string) {
        setGames(games.filter(g => g.id !== id))
    }


    async function handleGamesPerPriceSearch() {
        try {
            const gamesPerPrice = await gamesServices.getGamesPerPrice(Number(priceSearch))
            setGames(gamesPerPrice)
        } catch (error) {
            console.error("Error fetching games by price:", error)
        }
    }


    return (
        <div className='List'>

            <select onChange={audienceChanged} value={selectedAudienceId || ""}>
                <option value="" disabled>Choose Audience</option>
                {audiences.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
            </select>

            <div>
                <label htmlFor="priceInput">Maximum Price: </label>
                <input
                    id="priceInput"
                    type="number"
                    min="0"
                    step="5"
                    placeholder="Enter maximum price..."
                    value={priceSearch}
                    onChange={(e) => setPriceSearch(Number(e.target.value))}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleGamesPerPriceSearch() }}
                />
                <button onClick={handleGamesPerPriceSearch}>Find Games</button>
            </div>

            <div className='CardContainer'>
                {games.map(g =>
                    <Card
                        key={g.id}
                        game={g}
                        removeGame={removeGame}
                    />
                )}
            </div>
        </div>
    )
}