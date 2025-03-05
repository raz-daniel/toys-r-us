import Audience from "../audience/Audience";
import Draft from "./Draft";

export default interface Game extends Draft {
    id: string
    audience: Audience
    createdAt: Date
    updatedAt: Date
}