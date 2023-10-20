import logo from './logo.svg';
import './App.css';
import Vari from './componentes/Appform';



function App() {
  return (
    <div 
      style ={{background:"yellow",
      width:"350px", 
      padding:"10px"}}>
        <Vari/>
        <i class="large material-icons">insert_chart</i>

        <p>1. Juan Manuel 23 Masculino ----- x  A</p> 
        <p>2. Rosa Maria 22 Femenino  -----x  A</p> 
        <p>3. Roxana Puma 25 Femenino ------ x  A</p> 
        <p>4. Diego Lopez 28 Masculino ------ x  A</p> 
        
 
    </div>
  );
}

export default App;