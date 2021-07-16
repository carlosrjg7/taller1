import React,{Fragment} from 'react';
import Card from './components/Card';
//import { Fragment } from 'react';

function App() {

  //const lista = ['carlos','Maria','Jose','Andree','Claudia'];

  const obj = [
    {nombre: "carlos", texto: "hola texto carlos"},
    {nombre: "Maria", texto: "hola texto maria taller"},
    {nombre: "Raul", texto: "este es el texto nuevo"}
  ];

  return (
    <Fragment>
      <h1>Hola Mundo</h1>
      <div className="cards">
        {
          obj.map((item,index) => (
            <Card name={item.nombre} texto={item.texto} key={index}/>
          ))

        }
      </div>
    </Fragment>
  );

}

export default App;
