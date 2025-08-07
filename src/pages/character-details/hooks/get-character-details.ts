import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import type { CharacterPreviewProps } from "../../../shared/components/character-preview";
import formatPreviewData from "../../../shared/helpers/format-response";
import { useLikesStore } from "../../../shared/stores/likes";
import getCharacterDetails from "../api/get-character-details";

export type CharacterDetailsData = CharacterPreviewProps & { sayings: string[] };

export default function useCharacterDetails(characterId: number) {

    const likes = useLikesStore(state => state.ids);
    const [data, setData] = useState<CharacterDetailsData>();

    const detailsQuery = useQuery({
        queryKey: ['character-details', characterId],
        queryFn: () => getCharacterDetails(characterId)
    });

    useEffect(() => {

        const response = detailsQuery.data;

        if (!response) return;

        setData({
            ...formatPreviewData(response.data),
            sayings: response.data.sayings,
            liked: likes.includes(response.data.id)
        })


    }, [detailsQuery.data])

    return {
        data,
        status: detailsQuery.status
    }
}