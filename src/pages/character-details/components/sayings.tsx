import List from "../../../shared/components/list";

export type SayingsProps = {
    sayings: string[];
}

export default function Sayings(props: SayingsProps) {

    const { sayings } = props;

    return (
        <article>
            <h2>Sayings</h2>
            <List data={sayings} render={(saying) => {
                return <p>{saying}</p>
            }} />
        </article>
    );
}