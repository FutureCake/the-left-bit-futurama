import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import type { CharacterPreviewProps } from "../../../shared/components/character-preview";
import formatPreviewData from "../../../shared/helpers/format-response";
import { useLikesStore } from "../../../shared/stores/likes";
import getCharacters from "../api/get-characters";

export default function useCharacterPreviews() {

    const likes = useLikesStore(state => state.ids);
    const [data, setData] = useState<CharacterPreviewProps[]>([]);

    const charactersQuery = useQuery({
        queryKey: ['characters'],
        queryFn: getCharacters,
        retry: 3,
        retryDelay: 200,
    });

    useEffect(() => {

        const response = charactersQuery.data;

        if (!response) return;

        const previewCharacters: CharacterPreviewProps[] = response.data.map((character) => {
            return {
                ...formatPreviewData(character),
                liked: likes.includes(character.id)
            }
        });

        setData(previewCharacters);

    }, [charactersQuery.data, likes]);

    return {
        data,
        status: charactersQuery.status
    }
}