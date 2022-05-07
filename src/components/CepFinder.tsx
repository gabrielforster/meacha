import * as React from "react";
import { Results } from "./Results";

export const CepFinder = () => {
  const [search, setSearch] = React.useState("");
  const [results, setResults] = React.useState({
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
    ibge: "",
    gia: "",
    ddd: "",
    siafi: "",
  });

  let cepInfos = results;

  const searchCep = (evt: any) => {
    if (evt.key === "Enter") {
      fetch(`https://viacep.com.br/ws/` + search + `/json/`)
        .then((res) => res.json())
        .then((data) => setResults(data))
        .catch((err) => console.log(err));
    }
  };

  const handlePattern = (evt: any, search: any) => {
    if(evt.key === 'Enter'){
      if(search.match('/^[0-9]{5}-[0-9]{3}$/') !== false) {
        console.log(search, typeof(search))
        search.replace('-', '')
        console.log(search)
        searchCep(evt)
      } else console.log('teste')
  }
  }

  return (
    <main>
      <div className='search'>
        <h2>Informe o seu CEP</h2>
        <input
          type='text'
          placeholder='Digite seu CEP'
          maxLength={10}
          // pattern='/^[0-9]{5}-[0-9]{3}$/'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(evt) => handlePattern(evt, search)}
        />
      </div>

      <div className='content'>{<Results Infos={cepInfos} />}</div>
    </main>
  );
};
