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
      <h2>Resultados!</h2>
      {
        Infos.cep !== ""
        ?
        <div className='data'>
          {Infos.cep !== "" ? <h3>CEP: {Infos.cep}</h3> : null}
          {Infos.logradouro !== "" ? <h3>Rua: {Infos.logradouro}</h3> : null}
          {Infos.bairro !== "" ? <h3>Bairro: {Infos.bairro}</h3> : null}
          {Infos.localidade !== "" ? <h3>Cidade: {Infos.localidade}</h3> : null}
          {Infos.uf !== "" ? <h3>Estado: {Infos.uf}</h3> : null}
        </div>
        :
        <h2>Informe o cep</h2>
      }
      
      <div className='map'>
        <iframe title='mapFromGoogle'
          width="600" height="500"
          src={`https://maps.google.com/maps?q=${Infos.logradouro},${Infos.bairro},${Infos.localidade},${Infos.uf}=&z=19&ie=UTF8&iwloc=&output=embed`}>
        </iframe>
      </div>
      
    </div>
  )
}
