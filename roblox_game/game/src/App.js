import React from "react";
import Cabecalho from "./components/Cabecalho/cabecalho";
import Titulo from "./components/Titulo/titulo";
import SobreJogo from "./components/SobreJogo/sobreJogo";
import JogueAgora from "./components/JogueAgora/jogueAgora";
import Rodape from "./components/Rodape/rodape";
import "./app.css";

function App() {
  return (
    <main className="main">
      <Cabecalho />
      <Titulo />
      <JogueAgora />
      <SobreJogo />
      <Rodape />
    </main>
  );
}
//react -> lib
//React -> ecossistema
export default App;
