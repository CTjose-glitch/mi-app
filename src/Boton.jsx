export const Boton = () => {

    const handleClick = (event) => {
        event.preventDefault();
        console.log('Click me!');
    }

    return (
        <button onClick={handleClick}>
            Haz Click aquí
        </button>
    )
}