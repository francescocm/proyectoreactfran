import { NavBar } from "./components/NavBar/NavBar";
import "./styles/styles.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Clock } from "./components/Clock/Clock";
import { ClickTracker } from "./components/ClickTracker/ClickTracker";
import { useState } from "react";



function App() {

  const [montar, setMontar] = useState(true)

  return (
    <div>
      <NavBar/>
      <ItemListContainer/>
      {/*<button onClick={()=> {setMontar(!montar)} }> Montar/Desmontar</button>*/}



      {/* montar && <ClickTracker/> */}

      {/*<Clock/>*/}
    </div>
    
  );
}

export default App;
