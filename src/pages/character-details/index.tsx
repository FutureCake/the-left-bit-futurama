import { useParams } from "react-router-dom";
import { useShallow } from "zustand/shallow";
import CharacterPreview from "../../shared/components/character-preview";
import { useLikesStore } from "../../shared/stores/likes";
import Sayings from "./components/sayings";
import useCharacterDetails from "./hooks/get-character-details";
import './styles.scss';

export type CharacterDetailsProps = {
    id?: number;
}

export default function CharacterDetails(props: CharacterDetailsProps) {

    const { addLike, removeLike } = useLikesStore(useShallow((state) => ({
        addLike: state.addId,
        removeLike: state.removeId
    })));

    const id = props.id ?? useParams().id;
    const { data, status } = useCharacterDetails(Number(id));

    const onLike = (id: number) => {

        console.log("CLICK");
        if (!data) return;

        if (data.liked) removeLike(id)
        else addLike(id);
    }

    return (
        <div id="details-container">
            <h1 id="details-title">Character details</h1>
            {(status === "pending") && <p>Loading character details</p>}
            {(status === "error") && <p>Sorry i think he or she is lost in space... try again?</p>}
            {(status === "success" && data !== undefined) &&
                <div id="details-content">
                    <CharacterPreview {...data} onLike={onLike} />
                    <Sayings sayings={data.sayings} />
                </div>
            }
        </div>
    );
}