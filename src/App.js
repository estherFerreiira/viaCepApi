
import React, { useState } from 'react';
import axios from 'axios';
import "./App.css"

export default function Lista () {

  const [cep, setCep] = useState({cep: ''});
  const [info, setInfo] = useState({
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf:''
  })

  async function getApi(){
    const response = await axios.get('http://viacep.com.br/ws/' + cep + '/json/')
    setInfo(response.data)
  }

  const handlingCep = (e) =>{
    setCep(e.target.value);
  }

  return(
    <>
    <div className='container'>
    
      <div className='sendCep'>
        <input className='inputCep' type="text" onChange={(e)=> {handlingCep(e)}} placeholder="INSIRA O CEP:"></input>
        <button className='send' onClick={getApi}> Procurar </button>
      </div>
        <div className='inputInfos'>
          <input placeholder='Rua:' type="text" value={info['logradouro']}></input>
          <input placeholder='Complemento:' type="text" value={info['complemento']}></input>
          <input placeholder='Bairro:' type="text" value={info['bairro']}></input>
          <input placeholder='Cidade:' type="text" value={info['localidade']}></input>
          <input placeholder='UF:' type="text" value={info['uf']}></input>
        </div>
    </div> 
    </>
  )
}