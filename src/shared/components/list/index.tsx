import type { ReactNode } from "react";

export type ListProps<T> = {
    data: T[];
    render: (item: T) => ReactNode;
    className?: string;
    id?: string;
}

export default function List<T>(props: ListProps<T>) {

    const { className, id, data, render } = props;

    return (
        <ul className={className} id={id}>
            {data.map((item, index) => (
                <li key={index}>
                    {render(item)}
                </li>
            ))}
        </ul>
    );
}