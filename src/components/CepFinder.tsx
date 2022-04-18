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

  return (
    <main>
      <div className='search'>
        <h2>Informe o seu CEP</h2>
        <input
          type='text'
          placeholder='00.000-000'
          maxLength={8}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={searchCep}
        />
      </div>

      <div className='content'>{<Results Infos={cepInfos} />}</div>
    </main>
  );
};
