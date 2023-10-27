import logo from './logo.svg';
//import './App.css';
import { useState } from 'react';
import AppForm from './componentes/Appform';
import { collection, doc, onSnapshot, query } from 'firebase/firestore';
import { db } from './firebase/firebase';

function App() {

  //// READ - LECTURA -fnRead ///////////
  const [docBD, setDocBD] =useState([]);
  const fnRead =() => {
    try {
      const xColeccionConQuery = query (collection(db,"persona"));
      const unsubcribe = onSnapshot(xColeccionConQuery,(xDatosBD)=> {
        const xDoc = [];
        xDatosBD.forEach ((doc)=> {
          xDoc.push({id:doc.id,...doc.data()});
        });
        
        setDocBD(xDoc);
      });
    } catch (error) {
      console.error(error);
    }
  }

  fnRead(); 

    /////////// DELETE -Eliminar-fnDelete/////
    const [idActual, setIdActual]= useState("");
    const fnDelete = (xId) => {}
  
    
   
    return (
      <div style={{width:"350px",background:"greenyellow", padding:"10px"}}>
      <AppForm {...{idActual, setIdActual, fnRead}} />
      {docBD.map((p) => 
         <p key={p.id}>
         Nº. 1 {p.nombre}...
        <span onClick={() => fnDelete(p.id)}>x</span>
        ...
        <span onClick={() => setIdActual(p.id)}>A</span>
        </p>
        )
      }
      
      </div>
    );
  }
  
  
  export default App;