import {Component} from 'react'

class FondoFlorComponent extends Component {
    constructor() {
        super();
        this.state = {
        fondo: './img/fondo-tulipanes.jpg',
        };
}

cambiarFondo = (nuevoFondo) => {
    this.setState({ fondo: nuevoFondo }); 
}

render() {
    const { fondo } = this.state;

    return (
        <div  style={{ backgroundImage: `url(${fondo})` }}>
        <button onClick={() => this.cambiarFondo('./img/fondo-tulipanes.jpg')}>Fondo 1</button>
        <button onClick={() => this.cambiarFondo('./img/fondo-dalia.jpg')}>Fondo 2</button>
        <button onClick={() => this.cambiarFondo('./img/fondo-girasoles.jpg')}>Fondo 3</button>

        </div>
    );
}
}

export default FondoFlorComponent;
