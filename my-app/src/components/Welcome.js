import {useState,useEffect} from 'react';

export default function Wolcome(props){
    //console.log(props)
    const [counter,setCounter] =useState(0);
    const [semaforo, setSemaforo]=useState(false)
    const{message,name} = props;

    useEffect(()=>{
        console.log(semaforo);
    },[semaforo]);

    const contar = () => {
        setCounter(counter+1);
        setSemaforo(!semaforo);
    }




    return (
        <div>
            {/* Props desde App */}
            <h1>Hola, Usuario {name}</h1>
            <p>Hola, Desde Welcome</p>
            <p>{message}</p>
            
            {/* Contador de Con Hoobs */}
            <h2>Contador Con Hoobs</h2>
            <h4>El numero de Contador es {counter}</h4>
            <button type="submit" onClick={() => setCounter(counter + 1)}>
                Sumar Contador
            </button>


            <p>El Semaforo esta en color {semaforo ?"Rojo":"Verde"}</p>
            <button type="submit" onClick={contar}>
                Sumar Contador1
            </button>
        </div>
    

);
}