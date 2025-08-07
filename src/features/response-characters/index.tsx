import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import CharacterDetails from "../../pages/character-details";
import CharactersList from "../../pages/characters-list";
import './styles.scss';

export default function ResponsiveCharacters() {

    const isDesktop = useMediaQuery({ minWidth: 600 });
    const navigate = useNavigate();
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const onSelectCharacter = (id: number) => {

        if (isDesktop) {
            setSelectedId(id);
        } else {
            navigate(`/details/${id}`);
        }
    };

    useEffect(() => {
        if (!isDesktop) setSelectedId(null);
    }, [isDesktop]);

    return (
        <div id="main-container">
            <CharactersList onSelect={onSelectCharacter} />
            {(isDesktop && selectedId !== null) && <CharacterDetails id={selectedId} />}
        </div>
    );
}