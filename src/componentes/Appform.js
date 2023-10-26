import React, { useState } from 'react';
import { db} from "../firebase/firebase";
import { addDoc, collection } from 'firebase/firestore';

const Vari = () => {
  const camposRegistro = {nombre:"",edad:"", genero:""};
  const [objeto, setObjeto] = useState(camposRegistro);

  const manejarEnvio = (e) => {
    e.preventDefault();
    try {
      if(db){
        addDoc(collection(db,'persona'), objeto);
        console.log("Guardar en BD");
      }else{
        console.log("Actualizar en BD");
      }
    } catch (error) {
      console.error();
    }
  }
const manejarCambiosEntrada = (e) => {
  console.log(e.target.value);
  const {name, value} = e.target;
  console.log(name,value);
  setObjeto({...objeto,[name]:value});
  console.log("nnnnn");
}

return (
  <div style={{background:"orange",padding:"10px",textAlign:"center",}}>
    <h>AppForm.js </h> <br/>
    <form onSubmit={manejarEnvio} >
      <input onChange = {manejarCambiosEntrada} value={objeto.nombre}name='nombre' type='text' placeholder='Nombres...'/><br/><br/>
      <input onChange = {manejarCambiosEntrada} value={objeto.edad}name='edad' type='text' placeholder='Edad...'/><br/><br/>
      <input onChange = {manejarCambiosEntrada} value={objeto.genero}name='genero' type='text' placeholder='Genero...'/><br/><br/>
      <button>GUARDAR</button>
    </form>
  </div>
)
}
export default Vari;