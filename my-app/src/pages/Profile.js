import { useParams } from "react-router-dom"

export default function Profile(){
    const {name} =useParams();
    console.log(name);
  return(
    <div>
        <h1>perfil Usuario {name}</h1>
    </div>
  )
};
