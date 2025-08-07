import type { CharacterPreviewProps } from "../components/character-preview";
import type { FuturamaCharacter } from "../types/api";

export default function formatPreviewData(raw: FuturamaCharacter): Omit<CharacterPreviewProps, "liked"> {

    return {
        id: raw.id,
        age: raw.age,
        name: `${raw.name.first} ${raw.name.middle} ${raw.name.last}`,
        occupation: raw.occupation,
        gender: raw.gender,
        image: raw.images.main,
        species: raw.species
    }
}