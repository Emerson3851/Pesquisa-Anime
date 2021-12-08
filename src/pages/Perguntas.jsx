
import { Link } from 'react-router-dom';
import React, {useState} from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy';


const Perguntas = () =>{


  const radioStoreOtaku = useStoreState(state => state.Otaku);
  const setOtakuStore = useStoreActions(state => state.setOtaku)

  const radioQtAnimeStore = useStoreState(state => state.QtAnime);
  const setQtAnimelStore = useStoreActions(state => state.setQtAnime)

  const [radioOtaku,setOtaku] = useState(radioStoreOtaku);
  const [radioQtAnime,setQtAnime] = useState(radioQtAnimeStore);
         

  
  const salvarDados = () =>{
    setOtakuStore(radioOtaku);
    setQtAnimelStore(radioQtAnime);
  }


  return (
    <div className="Pai">
      
      <h1>Voce Se considera um Otaku?</h1>
      <div className="Filho">
        <label htmlFor="Perg1">Sim</label>
        <input type="radio" name="Opçao" value="sim" checked={radioOtaku==="sim"} onChange={(event)=>setOtaku(event.target.value)}  id="Perg1"/>
        <br></br>
        <br></br>
        <label htmlFor="Perg2">Nao</label>
        <input type="radio" name="Opçao" value="nao" checked={radioOtaku==="nao"} onChange={(event)=>setOtaku(event.target.value)} id="Perg2" />
      </div><br/>

    {radioOtaku ==="sim"&&
      <div className="Filho"> 
        <div>
          <h3>Quantos animes voce ja assistiu?</h3>
          <label htmlFor="labelPerg1">+50</label>
          <input type="radio" id="labelPerg1" name="quantanime" value="+50" checked={radioQtAnime==="+50"} onChange={(event)=>setQtAnime(event.target.value)}/>
          <br></br>
          <br></br>
          <label htmlFor="labelPerg2">+100</label>
          <input type="radio" id="labelPerg2" name="quantanime" value="+100" checked={radioQtAnime==="+100"} onChange={(event)=>setQtAnime(event.target.value)}/>
        </div><br/>
      </div>
    }
      <Link to="/"><button>voltar</button></Link>
      <Link to="/Perguntas2"><button onClick={salvarDados}>Proximo</button></Link>
    </div>
  );
}

export default Perguntas;