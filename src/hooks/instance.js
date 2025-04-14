import axios from "axios";
import { API } from "./getEnv";


export const instance = () => axios.create({baseURL:"https://irbis-trade.uz/api"})