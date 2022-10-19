function SaludoHijo(props) {
    //INVENTAMOS UN NOMBRE DE VARIABLE PARA EL METODO DEL PARENT
    // Y PARA LA RECEPCION DEL IDHIJO
    const {idhijo, metodoPadre} = props;

    return (<div>
        <h1>Eventos Hijo -- Padre {idhijo}</h1>
        <button onClick={ () => metodoPadre("Soy el hijo " + idhijo) }>Llamar metodo Padre</button>
    </div>);
}

export default SaludoHijo;