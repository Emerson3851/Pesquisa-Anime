import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import {useQuery } from 'react-query';

const ApiResult = () =>{

    const [Animes,setAnime] = useState();

  const ApiAnime = () => {
    axios.get('https://api.jikan.moe/v3/top/anime/1/bypopularity').then(PegAnime => 
        setAnime(PegAnime.data.object)
        )
    return Animes;   

  }

  const {data, isLoading} = useQuery('PegAnime', ApiAnime)
    console.log (data)

  return (
    <div className="Pai">
     <div>
            <h1>O nome do anime é:{data}</h1>
        </div>
      <Link to="/Resultado"><button >voltar</button></Link>
      
    </div>
  );
}

export default ApiResult;