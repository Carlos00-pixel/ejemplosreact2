import { useState } from 'react';

function Matematicas(props) {

    const dobleNumero = () => {
        var numerodoble = parseInt(props.numero);
        var multi = numerodoble * 2;
        console.log(multi);
        return multi;
    }
    const tripleNumero = () => {
        var numerotriple = parseInt(props.numero);
        var multi = numerotriple * 3;
        console.log(multi);
        return multi;
    }

    const { inicio } = props;

    const [ numero, setNumero ] = useState(parseInt(inicio));


    const { metodoDobleNumero, metodoTripleNumero } = props;

    return (<div>
        <h1>Componente Matematicas</h1>
        <h2 style={{color: "blue"}}>Numero: {numero}</h2>
        <button onClick={() => setNumero(numero*2)}>Multiplicar por 2</button>
        <button onClick={() => setNumero(numero*3)}>Multiplicar por 3</button>
        <button onClick={() => setNumero(inicio)}>Borrar</button>
        <br/>
        <button onClick={ () => metodoDobleNumero(numero) }>Doble de 7 desde el Padre</button>
        <button onClick={ () => metodoTripleNumero(numero) }>Triple de 7 desde el Padre</button>

    </div>);
}

export default Matematicas;