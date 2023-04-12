import { useState } from "react";
import Banner from "./componentes/Banner";
import Equipe from "./componentes/Equipe";
import Formulario from "./componentes/Formulario";

function App() {

  const item = [
    {
      nome: 'Ação e Aventura',
      corPrimaria: '#a6257d',
      corSecundaria: '#ffd4ff'
    },
    {
      nome: 'RPG',
      corPrimaria: '#a6257d',
      corSecundaria: '#eabcf3'
    },
    {
      nome: 'Estratégia',
      corPrimaria: '#a6257d',
      corSecundaria: '#ffd4ff'
    },
    {
      nome: 'Puzzle e Party Games',
      corPrimaria: '#a6257d',
      corSecundaria: '#eabcf3'
    }

  ]
  const [clientes, setClientes] = useState([])

  const aoNovoClienteAdicionado = (cliente) => {
    setClientes([...clientes, cliente])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        nomeItem={item.map(item => item.nome)}
        aoClienteCadastrado={cliente => aoNovoClienteAdicionado(cliente)}
      />
      {item.map(item => <Equipe
        key={item.nome}
        nome={item.nome}
        corPrimaria={item.corPrimaria}
        corSecundaria={item.corSecundaria}
        clientes={clientes.filter(cliente => cliente.especialidade === item.nome)}
      />)}

    </div>

  );
}

export default App;
