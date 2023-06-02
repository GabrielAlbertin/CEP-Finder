import React, { useContext } from 'react'
import { DataContext } from '../context/Context'

const Info = () => {
  const contextApi = useContext(DataContext)

  return (
    <>
    {contextApi.state.data ?  
      contextApi.state.data.cep === '' ?
        (
          <div className='flex justify-center align-center'>
            <div className='py-16 px-16 m-6 bg-white shadow-md rounded-xl text-left'>
              <span><strong>Cidade:</strong> {contextApi.state.data.localidade ? contextApi.state.data.localidade  : '  Sem informação'}</span> <br/>
              <span><strong>UF:</strong> {contextApi.state.data.uf ? contextApi.state.data.uf  : '  Sem informação'}</span> <br/>
              <span><strong>Logradouro:</strong> {contextApi.state.data.logradouro ? contextApi.state.data.logradouro  : ' Sem informação'}</span> <br/>
              <span><strong>Complemento:</strong> {contextApi.state.data.complemento ? contextApi.state.data.complemento  : ' Sem informação'}</span> <br/>
              <span><strong>Bairro:</strong> {contextApi.state.data.bairro ? contextApi.state.data.bairro  : ' Sem informação'}</span> <br/>
              <span><strong>DDD:</strong> {contextApi.state.data.ddd ? contextApi.state.data.ddd  : ' Sem informação'}</span> <br/>
            </div>
          </div>
        ) : (
          <div className='flex justify-center align-center'>
            <div className='py-16 px-32 m-6 bg-white shadow-md rounded-xl text-left md:p-9'>
              <span><strong>CEP invalido!</strong> </span>
              </div>
          </div>
        )
     :  ''
    }
  </>
  )
}

export default Info