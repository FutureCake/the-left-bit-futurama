import api from "../../../api/axios";
import type { APIResponse, FuturamaCharacter } from "../../../types/api";

export default async function getCharacterDetails(characterId: number): Promise<APIResponse<FuturamaCharacter>> {
    return api.get(`/characters/${characterId}`);
}