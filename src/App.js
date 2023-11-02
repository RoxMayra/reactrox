import logo from './logo.svg';
//import './App.css';
import { useState } from 'react';
import AppForm from './componentes/Appform';
import { collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
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
    console.log(docBD)
    /////////// DELETE -Eliminar-fnDelete/////
    const [idActual, setIdActual]= useState("");
    
    const fnDelete = async (xId) => {
      if(window.confirm("Confirme para eliminar")){
        await deleteDoc(doc(db, "persona", xId));
        alert("Se elimino con exito ....");
      }
    }
    return (
      <div style={{width:"350px",background:"#C89EB7", padding:"10px"}}>
      <AppForm {...{idActual, setIdActual, fnRead}} />
      {docBD.map((r, index) => 
         <p key={r.id}>
          Nº. {index+1}. {r.nombre}
          --------------
          <span onClick={() => fnDelete(r.id)}>x</span>
          --------------
          <span onClick={() => setIdActual(r.id)}>A</span>
        </p>
        )
      }
      
      </div>
    );
  }
  
  
  export default App;