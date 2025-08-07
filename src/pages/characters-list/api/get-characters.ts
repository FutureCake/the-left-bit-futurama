import api from "../../../api/axios";
import type { APIResponse, FuturamaCharacter } from "../../../types/api";



export default async function getCharacters(): Promise<APIResponse<FuturamaCharacter[]>> {
    return api.get('/characters');
}