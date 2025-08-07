export type APIResponse<T> = {
    config: unknown;
    data: T
    headers: unknown;
    request: unknown;
    status: number;
    statusText: string;
}

export type FuturamaCharacter = {
    name: {
        first: string,
        middle: string,
        last: string
    },
    images: {
        "head-shot": string,
        main: string
    },
    gender: string,
    species: string,
    homePlanet: string,
    occupation: string,
    sayings: string[],
    id: number,
    age: string
}