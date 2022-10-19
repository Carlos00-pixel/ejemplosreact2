import './App.css';
import SumarNumeros from '../SumarNumeros';
import SaludoHijo from '../SaludoHijo';
import Matematicas from '../Matematicas';
import Contador from '../Contador';
import Car from '../Car';

function App() {
  //QUEREMOS UN METODO EN EL PARENT QUE SEA LLAMADO DESDE EL HIJO
  const metodoPadre = (descripcion) => {
    console.log("Soy " + descripcion);
  }

  const metodoDobleNumero = (multiDoble) => {
    multiDoble *= 2;
    console.log("El resultado en el padre es: " + multiDoble);
  }

  const metodoTripleNumero = (multiTriple) => {
    multiTriple *= 3;
    console.log("El resultado en el padre es: " + multiTriple);
  }

  return (
    <div className="App">
      <h1>Componente App</h1>
      {/*ENVIAMOS EL METODO DEL PADRE AL HIJO CON UN NOMBRE DE PROPS*/}
      {/* <SaludoHijo idhijo="1" metodoPadre={metodoPadre}/>
      <SaludoHijo idhijo="2" metodoPadre={metodoPadre}/>
      <SaludoHijo idhijo="3" metodoPadre={metodoPadre}/> */}
      {/* <Matematicas inicio ="7" metodoDobleNumero={metodoDobleNumero} metodoTripleNumero={metodoTripleNumero}/> */}
      {/* <Contador inicio="22"/>
      <Contador inicio="44"/>
      <Contador inicio="66"/>
      <Contador inicio="14"/> */}
      <Car Marca="Audi" Modelo="QA" Aceleracion="20" VelocidadMaxima="240"/>
      <Car Marca="Pontiac" Modelo="Firebird" Aceleracion="40" VelocidadMaxima="280"/>
    </div>
  );
}

export default App;
