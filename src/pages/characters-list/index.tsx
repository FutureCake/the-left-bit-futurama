import CharacterPreview from "../../shared/components/character-preview";
import List from "../../shared/components/list";
import useGetCharacters from "./hooks/get-character-previews";
import './styles.scss';

export type CharactersListProps = {
    onSelect: (id: number) => void;
}

export default function CharactersList(props: CharactersListProps) {

    const { onSelect } = props;
    const { data, status } = useGetCharacters();

    return (
        <div id="characters-container">
            <h1 id="characters-title">Characters</h1>
            {(status === "pending") && <p>Loading futurama's characters</p>}
            {(status === "error") && <p>Sorry i think they are lost in space... try again?</p>}
            {(status === "success" && data !== undefined) &&
                <List id="characters" data={data} render={(character) => <CharacterPreview onSelect={onSelect} {...character} />} />
            }
        </div>
    );
}