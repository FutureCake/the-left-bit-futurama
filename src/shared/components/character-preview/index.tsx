import emptyHeart from "../../../assets/empty-heart.png";
import fullHeart from "../../../assets/full-heart.png";
import './styles.scss';

export type CharacterPreviewProps = {
    id: number;
    liked: boolean;
    age: string;
    gender: string;
    species: string;
    occupation: string;
    image: string;
    name: string;
    onSelect?: (id: number) => void;
}

export default function CharacterPreview(props: CharacterPreviewProps) {

    const { id, name, age, species, image, liked, gender, occupation, onSelect } = props;

    return (
        <div onClick={() => onSelect?.(id)} className="preview-container">
            <img className="preview-image" src={image} />
            <div className="preview-details">
                <div className="main-delails">
                    <p className="detail-name">{name}</p>
                    <img className="detail-liked" src={liked ? fullHeart : emptyHeart} />
                </div>
                <p className="single-detail">{age} - {gender} - {species}</p>
                <p className="single-detail">{occupation}</p>
            </div>
        </div>
    );
}