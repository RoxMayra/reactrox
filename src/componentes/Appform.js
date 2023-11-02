import React, { useEffect } from 'react'
import { db } from '../firebase/firebase'
import { useState } from 'react'
import { addDoc, collection, doc, updateDoc, getDoc } from 'firebase/firestore'

const AppForm = (props) => {
  ///////////////////// GUARDAR / ACTUALIZAR /////////////////
  const camposRegistro = { nombre:"", edad:"", genero:"" }
  const [objeto, setObjeto] = useState(camposRegistro);

  const manejarEnvios = async (e) => {
    e.preventDefault();

    try {
      if(props.idActual === "") {
        if(validarForm()){
          addDoc(collection(db, 'persona'), objeto);  
          console.log("Se guardo con éxito...");
        }else{
          console.log('No se guardo....')
        }
      }else{
        await updateDoc(doc(collection(db, "persona"), props.idActual), objeto);
        console.log("Actualizando en BD");
      }
      setObjeto(camposRegistro);
    } catch (error) {
      console.log("Error en CREAR o UPDATE", error);
    }
  }

  const validarForm = () => {
    if(objeto.nombre === "" || /^\s+/.test(objeto.nombre)){
      alert("Escriba nombre...");
      return false;
    }

    if(objeto.edad === "" || /^\s+/.test(objeto.edad)){
      alert("Escriba edad...");
      return false;
    }

    if(objeto.genero === "" || /^\s+/.test(objeto.genero)){
      alert("Seleccionar genero...");
      return false;
    }
    //
    return true;
  }

  const manejarCambiosEntrada = (e) => {
    //console.log(e.target.value);        //Obtiene valor ingresado
    const {name, value} = e.target;       //name, value recibe de target
    console.log(name, value);             //obtiene name y value
    setObjeto({...objeto, [name]: value});//agrega a objeto name y value
  }



  useEffect(()=>{
    if(props.idActual === ""){
    }else{
      obtenerDatosPorId(props.idActual);
    }
  }, [props.idActual]);

  const obtenerDatosPorId = async (xId) =>{
    const objPorId = doc(db, "persona", xId);
    const docPorId = await getDoc(objPorId);
    if (docPorId.exists()) {
      setObjeto(docPorId.data());
    }else{
      console.log("No hay doc...");
    }
  }
  return (
    <div style={{background:"#B4A5D6", padding:"10px", textAlign:"center"}}>
      <form onSubmit={manejarEnvios} >
        <h4>FORMULARIO</h4> <br/>
        <input onChange={manejarCambiosEntrada} value={objeto.nombre} 
          name='nombre' type='text' placeholder='Nombres...' /><br/>
          

        <input onChange={manejarCambiosEntrada} value={objeto.edad} 
          name='edad'   type='text' placeholder='Edad...' /><br/>
          

        <input onChange={manejarCambiosEntrada} value={objeto.genero} 
          name='genero' type='text' placeholder='Género...' /><br/>
        <br/>
        <button>
          { props.idActual===""? "Guardar": "Actualizar" }
        </button>
      </form>
    </div>
  )
}

export default AppForm