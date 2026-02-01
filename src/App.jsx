import { useState } from "react";
import Perfil from "./components/Perfil";
import ReposList from "./components/Perfil/ReposList";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState("");

  return (
    <div className="app">
      <h1 className="title">GitHub Profile Finder</h1>
      <p className="subtitle">
        Digite um usuário do GitHub e veja os repositórios ✨
      </p>

      <div className="search">
        <input
          type="text"
          placeholder="ex: IancaTino"
          value={nomeUsuario}
          onChange={(e) => setNomeUsuario(e.target.value.trim())}
        />
      </div>

      {nomeUsuario.length > 3 && (
        <div className="content">
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </div>
      )}
    </div>
  );
}

export default App;


{/* {formularioEstaVisivel && (
        <Formulario />
      )}
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">Toggle form</button> */}