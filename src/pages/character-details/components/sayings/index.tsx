import List from "../../../../shared/components/list";
import './styles.scss';

export type SayingsProps = {
    sayings: string[];
}

export default function Sayings(props: SayingsProps) {

    const { sayings } = props;

    return (
        <article id="sayings-container">
            <h2 id="sayings-title">Sayings</h2>
            <List id="sayings-list" data={sayings} render={(saying) => {
                return <p className="saying">{saying}</p>
            }} />
        </article>
    );
}