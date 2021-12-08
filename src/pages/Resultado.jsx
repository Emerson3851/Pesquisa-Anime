
import React from 'react';
import { Link } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';

const Resultado = () =>{
  const NomeStore = useStoreState(state => state.Nome);
  const OpniaoStore = useStoreState(state => state.Opniao);
  const OtakuStore = useStoreState(state => state.Otaku);
  const QtAnimeStore = useStoreState(state => state.QtAnime);
  const AnimeFavStore = useStoreState(state => state. AnimeFav);

  const setNomeStore = useStoreActions(state => state.setNome);
  const setOpniaoStore = useStoreActions(state => state.setOpniao);
  const setOtakuStore = useStoreActions(state => state.setOtaku);
  const setQtAnimeStore = useStoreActions(state => state.setQtAnime);
  const setAnimeFavStore = useStoreActions(state => state.setAnimeFav);


  function zerar(){

    setNomeStore(' ');
    setOpniaoStore(' ');
    setOtakuStore(' ');
    setQtAnimeStore(' ');
    setAnimeFavStore([]);
  }

  return (
    <div className="Pai">
      <div>
        <h2>Seu resultado</h2>
        <p>Nome: {NomeStore}</p>
        <p>Resposta: {OpniaoStore}</p>
        <p>Quantidade: {QtAnimeStore}</p>
        <p>É um Otaku:{ OtakuStore}</p>
        <p>Animes Favoritos:{AnimeFavStore.map(AnimeFav => <li>{AnimeFav}</li>)}</p>
      </div>

      <Link to="/Perguntas2"><button >voltar</button></Link>
      <Link to="/"><button onClick={zerar}>Nova Pesquisa</button></Link>
      <Link to="/APIresult"><button >PagApi</button></Link>
    </div>
  );
}

export default Resultado;