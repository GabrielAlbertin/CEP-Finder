import React from 'react'

export const dataApi = {
  cep: '',
  logradouro: '',
  complemento: '',
  bairro: '',
  localidade: '',
  uf: '',
  ibge: '',
  gia: '',
  ddd: '',
  siafi: ''
}

export const DataContext = React.createContext(dataApi)