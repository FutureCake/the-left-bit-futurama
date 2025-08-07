import { useParams } from "react-router-dom";
import CharacterPreview from "../../shared/components/character-preview";
import Sayings from "./components/sayings";
import useCharacterDetails from "./hooks/get-character-details";

export type CharacterDetailsProps = {
    id?: number;
}

export default function CharacterDetails(props: CharacterDetailsProps) {

    const id = props.id ?? useParams().id;
    const { data, status } = useCharacterDetails(Number(id));

    return (
        <div id="details-container">
            <h1>Character details</h1>
            {(status === "pending") && <p>Loading character details</p>}
            {(status === "error") && <p>Sorry i think he or she is lost in space... try again?</p>}
            {(status === "success" && data !== undefined) &&
                <div>
                    <CharacterPreview {...data} />
                    <Sayings sayings={data.sayings} />
                </div>
            }
        </div>
    );
}