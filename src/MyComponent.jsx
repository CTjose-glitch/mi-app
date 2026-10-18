//import './estilos.css';
import { Avatar } from "./Avatar";
import { Boton } from "./Boton";
import { Contador } from "./Contador";

const miEstilo = {
    color: 'green',
    fontSize: '60px'
}

export const MyComponent = () => {

    return (
        <div>
            <h3 style={miEstilo}>Este es mi primer componente</h3>
            <p>¿Cierto?</p>

            <Avatar url={'/favicon.svg'} nombre={'Este es el nombre de mi imagen'} />
            <Boton />
            <Contador />
        </div>
    )
}
