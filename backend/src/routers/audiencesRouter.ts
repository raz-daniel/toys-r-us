import { Router } from "express";
import { getAudiences } from "../controllers/audiences/controller";

const audiencesRouter = Router()

audiencesRouter.get('/', getAudiences)

export default audiencesRouter