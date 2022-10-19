//PARA PODER UTILIZAR STATE NECESITAMOS
//IMPORTAR USESTATE DE LA LIBRERIA REACT
import { useState } from 'react';

function Contador(props){
    const { inicio } = props;
    //NECESITAMOS UNA VARIABLE STATE DONDE
    //VAMOS A INDICAR SU CREACION Y SU TIPO DE DATO TAMBIEN
    //setNOMBREVARIABLE ES UN METODO
    const [ numero, setNumero ] = useState(parseInt(inicio));
    //VAMOS A TENER UN METODO PARA IR 
    //INCREMENTANDO UNA VARIABLE STATE DE CONTADOR
    var sumarContador = () => {
        //UTILIZAMOS EL METODO SET PARA MODIFICAR EL VALOR
        setNumero(numero + 1);
    }

    return (<div>
        <h1>Ejemplo State de React</h1>
        <h2 style={{color: "blue"}}>Contador: {numero}</h2>
        <button onClick={ () => sumarContador() }>Sumar Contador</button>
        <button onClick={ () => setNumero(numero - 1) }>Restar Contador</button>
    </div>);
}

export default Contador;