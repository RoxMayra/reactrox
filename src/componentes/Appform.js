import React, { useState } from 'react';
import { db } from "../firebase/firebase";
import { addDoc, collection } from 'firebase/firestore';

const AppForm = (props) => {
  const camposRegistro = {nombre:"",edad:"", genero:""};
  const [objeto, setObjeto] = useState(camposRegistro);
/////////////GUARDAR / ACTUALZIAR /////////
  const manejarEnvio = (e) => {
    e.preventDefault();
    try {
      if(props.idActual==""){ ///////GUARDA///////
        if(validarForm()){
          addDoc(collection(db,'persona'), objeto);
          console.log("Guardar en BD");

        }else{
          console.log("No se guardo");
        }
        
      }else{
        console.log("Actulizar en BD");
      }
    } catch (error) {
      console.error();
    }
  }

  const validarForm = () => {
    if(objeto.nombre==="" || /^\s+$/.test(objeto.nombre)){ ////(\s=no permite espacios en blanco)/////
      alert("Escriba el nombre...");
      return false;
    }
    if(objeto.edad==="" || /^\s+$/.test(objeto.edad)){ ////(\s=no permite espacios en blanco)/////
      alert("Escriba la edad...");
      return false;
    }
      if(objeto.genero==="" || /^\s+$/.test(objeto.ngenero)){ ////(\s=no permite espacios en blanco)/////
        alert("Escriba el genero...");
   
        return false;
    }
    return true;
  };
const manejarCambiosEntrada = (e) => {
  console.log(e.target.value);
  const {name, value} = e.target;
  console.log(name,value);
  setObjeto({...objeto,[name]:value});
  console.log("nnnnn");
}

 return (
    <div style={{background:"#93bd9a",padding:"10px",textAlign:"center",}}>
      <h>AppForm.js </h> <br/>
      <form onSubmit={manejarEnvio} >
        <input onChange = {manejarCambiosEntrada} value={objeto.nombre}name='nombre' type='text' placeholder='Nombres...'/><br/><br/>
        <input onChange = {manejarCambiosEntrada} value={objeto.edad}name='edad' type='text' placeholder='Edad...'/><br/><br/>
        <input onChange = {manejarCambiosEntrada} value={objeto.genero}name='genero' type='text' placeholder='Genero...'/><br/><br/>
        <button>
          { props.idActual===""? "GUARDAR" : "ACTUALIZAR" }</button>
      </form>
    </div>
  )
}
export default AppForm;