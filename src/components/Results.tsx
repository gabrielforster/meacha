import React from 'react'

interface Props {
    Infos: {
      "cep": string,
      "logradouro": string,
      "complemento": string,
      "bairro": string,
      "localidade": string,
      "uf": string,
      "ibge": string,
      "gia": string,
      "ddd": string,
      "siafi": string
    }
  }

export const Results:React.FC<Props> = ({ Infos }) => {
  return (
    <div className='results'>
      {
        Infos.cep !== ""
        ?
        <div className=''>
          <h2>{Infos.cep}</h2>
          <h2>{Infos.logradouro}</h2>
          <h2>{Infos.bairro}</h2>
          <h2>{Infos.localidade}</h2>
          <h2>{Infos.ddd}</h2>
        </div>
        :
        <h2>Informe o cep</h2>
      }
    </div>
  )
}
