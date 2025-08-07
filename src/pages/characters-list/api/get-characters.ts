import api from "../../../shared/api/axios";
import type { APIResponse, FuturamaCharacter } from "../../../shared/types/api";



export default async function getCharacters(): Promise<APIResponse<FuturamaCharacter[]>> {
    return api.get('/characters');
}