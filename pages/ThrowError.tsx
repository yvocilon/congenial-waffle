import h from 'hyperscript';

export default async function ThrowError() {
    throw new Error("shit happened");
    return <h1>Fucking error</h1>;
}