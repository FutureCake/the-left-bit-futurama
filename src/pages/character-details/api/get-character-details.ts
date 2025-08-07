import api from "../../../shared/api/axios";
import type { APIResponse, FuturamaCharacter } from "../../../shared/types/api";

export default async function getCharacterDetails(characterId: number): Promise<APIResponse<FuturamaCharacter>> {
    return api.get(`/characters/${characterId}`);
}