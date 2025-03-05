import './Card.css'
// import { useEffect, useState } from 'react'
import Game from '../../../models/game/Game'
import gamesServices from '../../../services/games'


interface CardProps {
    game: Game
    removeGame(id: string): void
    // isNew?: boolean
}

export default function Card(props: CardProps): JSX.Element {

    const { id, name, description, price, audience } = props.game
    // const { isNew } = props
    // const [highlight, setHighlight] = useState(isNew || false)

    // useEffect(() => {
    //     if (isNew) {
    //         setHighlight(true)
    //         const timer = setTimeout(() => {
    //             setHighlight(false)
    //         },2000)
    //         return () => clearTimeout(timer)
    //     }
    // }, [isNew])

    async function deleteMe() {
        try {
            await gamesServices.remove(id)
            props.removeGame(id)
        } catch (error) {
            alert(error)
        }
    }

    return (
        //${highlight ? 'highlight' : ''
        <div className={`Card }`}> 
            <h4>{name}</h4>
            <p>{description}</p>
            <p>{audience.name}</p>
            <p>Price: ${price}</p>
            <div>
                <button onClick={deleteMe}>delete</button>
            </div>
        </div>

    )
}