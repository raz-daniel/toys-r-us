import axios from "axios"
import Audience from "../models/audience/Audience"

class Audiences {

    async getAudiences(): Promise<Audience[]> {
        const response = await axios.get<Audience[]>(`${import.meta.env.VITE_REST_SERVER_URL}/audiences`)
        return response.data
    }
}

const audiencesServices = new Audiences()
export default audiencesServices