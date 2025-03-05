import axios from "axios"
import Game from "../models/game/Game"
import Draft from "../models/game/Draft"

class Games {

    async getGamesPerAudience(audienceId: string): Promise<Game[]> {
        const response = await axios.get<Game[]>(`${import.meta.env.VITE_REST_SERVER_URL}/games/${audienceId}`)
        return response.data
    }

    async getGamesPerPrice(maxGamePrice: number): Promise<Game[]> {
        const response = await axios.get<Game[]>(`${import.meta.env.VITE_REST_SERVER_URL}/games?maxGamePrice=${maxGamePrice}`)
        return response.data
    }

    async add(draft: Draft): Promise<Game> {
        const response = await axios.post<Game>(`${import.meta.env.VITE_REST_SERVER_URL}/games/`, draft)
        return response.data
    }

    async remove(id: string): Promise<boolean> {
        const response = await axios.delete<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/games/${id}`)
        return response.data
    }
}

const gamesServices = new Games()
export default gamesServices