import { useMemo, useState , useCallback} from 'react';
import './App.css';
import Header from './components/Header';


function App() {

  const [number, setNumber] = useState(0);

  const increment = useCallback(()=>{
    setNumber((prevState)=> prevState+1);
  },[]) 


/*  const data = useMemo(()=>{
        return calculateObject();
            }, [ ]);
*/
  return (
    <div className="App">
        <Header increment={increment}/>
        <hr/>

       <h1>{number}</h1>

    </div>
  );
}

function calculateObject(){
 
  return {name:'can'}
}

export default App;
