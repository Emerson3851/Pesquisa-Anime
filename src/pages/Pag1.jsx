
import { Link } from 'react-router-dom';
import '../pages/estilo.css'
import React, {useState} from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy';



const Pag1 = () =>{
  const NomeStore = useStoreState(state => state.Nome)
  const setNomeStore = useStoreActions(state => state.setNome)

  const OpniaoStore = useStoreState(state => state.Opniao)
  const setOpniaoStore = useStoreActions(state => state.setOpniao)

  const [nome,setNome] = useState(NomeStore);
  const [Opniao,setOpniao] = useState(OpniaoStore);

  const salvarDados = () =>{
     setNomeStore(nome);
     setOpniaoStore(Opniao)
  }


  return (
    <div className="Pai">
        <div className="Filho">
          <div>
            <h1>Informações Obrigatorias</h1>
            <label htmlFor="nome">Insira seu nome:</label>  
            <input type="text" id="nome" value={nome} onChange={(event)=>setNome(event.target.value)}></input>
          </div><br/>

          <div>
              <label htmlFor="opniao">Na sua opnião qual o melhor anime?</label><br/>
              <textarea id="opniao"  cols="30" rows="5" value={Opniao} onChange={(event)=>setOpniao(event.target.value)}/>
          </div>

          <div>
              <Link to="/Perguntas"><button onClick={salvarDados}>Proximo</button></Link>
          </div>
        </div>
    </div>
  );
}

export default Pag1;