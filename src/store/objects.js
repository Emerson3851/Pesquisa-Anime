import {action} from 'easy-peasy';



export const dados ={
   Nome: '',
   Opniao:'',
   Otaku: '',
   QtAnime: '',
   AnimeFav:[],

   setNome: action((state,payload)=>{state.Nome = payload}),
   setOpniao: action((state,payload)=>{state.Opniao = payload}),
   setOtaku: action((state,payload)=>{state.Otaku = payload}),
   setQtAnime: action((state,payload)=>{state.QtAnime = payload}),
   setAnimeFav: action((state,payload)=>{state.AnimeFav = payload})
}
