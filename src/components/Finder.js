import React, { useState } from 'react'
import InputMask from "react-input-mask";
import axios from 'axios'
import { DataContext } from '../context/Context';
import { useContext } from 'react';

const Finder = () => {
  const [value, setValue] = useState('')
  const contextApi = useContext(DataContext)

  const url = `https://viacep.com.br/ws/${value}/json/`

  const FindCEP = () => {
    axios(url).then((data) => {
      console.log(data.data)
      contextApi.setState({data: data.data})
      console.log(contextApi.state)
    })
    .catch(
      console.error
    );
  }

  return (
    <div className='flex justify-center align-center md:max-lg:flex'>
      <div className='p-9 m-6 bg-white shadow-md rounded-xl '>
        <h1 className='text-center mb-5 text-2xl font-bold'>Buscador de CEP</h1> 
        <InputMask mask="99999-999" maskPlaceholder={null} className='shadow border rounded py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
        <button className= 'ml-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' onClick={FindCEP}> Buscar </button>
      </div>
    </div>
  )
}

export default Finder