import { useState } from "react";

import Perfil from "./components/Perfil";
import ReposList from "./components/Perfil/ReposList";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <div className="container">
      <h1 className="titulo">GitHub</h1>

      <input
        type="text"
        placeholder="Digite o nome do usuário e pressione Enter"
        onKeyDown={(e) => {
          if (e.key === "Enter") setNomeUsuario(e.target.value);
        }}
        className="input"
      />

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
    </div>
  );
}

export default App;