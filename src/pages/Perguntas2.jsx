
import { Link } from 'react-router-dom';
import React, {useState} from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy';


const Perguntas2 = () =>{
  const AnimeFavStore = useStoreState(state => state.AnimeFav)
  const SetAnimeFavStore = useStoreActions(state => state.setAnimeFav)
  const [AnimeFav, setAnimeFav] = useState(AnimeFavStore)

  function salvar(nome){
    if (AnimeFav.includes(nome)) {
        setAnimeFav(AnimeFav.filter((nomeanm) => nomeanm !== AnimeFav))
    }else{
      setAnimeFav([...AnimeFav,nome])
    }
  }

  function salvarEscolhas(){
    SetAnimeFavStore(AnimeFav)
  }

  return (
    <div className="Pai">
      <h1>Opniao</h1>
      <div className="Filho">
      <h2>Qual seu anime favorito?</h2>
        <label htmlFor="nrt">Naruto</label>
        <input type="checkbox" checked={AnimeFav.includes("Naruto")} value="Naruto" id="nrt" onClick={()=> salvar("Naruto")} />
        <br></br>
        <br></br>
        <label htmlFor="dbz">Dragon Ball Z</label>
        <input type="checkbox" checked={AnimeFav.includes("Dragon Ball Z")} value="Dragon Ball Z" id="dbz" onClick={()=> salvar("Dragon Ball Z")} />
        <br></br>
        <br></br>
        <label htmlFor="pirata">One Piece</label>
        <input type="checkbox" checked={AnimeFav.includes("One Piece")} value="One Piece" id="pirata" onClick={()=> salvar("One Piece")} />
        <br></br>
        <br></br>
        <label htmlFor="CDZ">Cavaleiros do Zodiaco</label>
        <input type="checkbox" checked={AnimeFav.includes("Cavaleiros do Zodiaco")} value="Cavaleiros do Zodiaco" id="CDZ" onClick={()=> salvar("Cavaleiros do Zodiaco")} />
      </div>

      <Link to="/Perguntas"><button>voltar</button></Link>
      <Link to="/Resultado"><button onClick={salvarEscolhas} >Proximo</button></Link>
            
 
    </div>
  );
}

export default Perguntas2;