import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Questao_1_3,
  Questao_1_4,
  Questao_1_2,
  Questao_1_1,
  Questao_2_1,
  Questao_2_2,
  Questao_2_3,
  Questao_2_4,
  Questao_3_1,
  Questao_3_2,
  Questao_3_3,
  Questao_3_4,
  ResponsiveAppBar,
} from "./Componentes";
import { Suspense } from "react";

function App() {
  const dados = {
    nome: "João",
    email: "joao@email.com",
    fone: "00-0000-0000",
  };
  return (
    <Router>
      <Suspense fallback={"Carregando..."} />
      <ResponsiveAppBar />

      <Routes>
        {/* ------------------------------------------- */}
        <Route path="/questao1_1" element={<Questao_1_1 />} />
        <Route path="/questao1_2" element={<Questao_1_2 />} />
        <Route path="/questao1_3" element={<Questao_1_3 />} />
        <Route path="/questao1_4" element={<Questao_1_4 />} />
        {/* ------------------------------------------- */}
        <Route path="/questao2_1" element={<Questao_2_1 admin={null} />} />
        <Route
          path="/questao2_1/administrador_ligado"
          element={<Questao_2_1 admin={true} />}
        />
        <Route
          path="/questao2_1/administrador_desligado"
          element={<Questao_2_1 admin={false} />}
        />
        <Route path="/questao2_2" element={<Questao_2_2 Brazil={null} />} />
        <Route
          path="/questao2_2/Brazil"
          element={<Questao_2_2 Brazil={true} />}
        />
        <Route path="/questao2_3" element={<Questao_2_3 />} />
        <Route path="/questao2_4" element={<Questao_2_4 />} />
        {/* ------------------------------------------- */}
        <Route
          path="/questao3_1/dados"
          element={<Questao_3_1 info={dados} />}
        />
        <Route path="/questao3_1" element={<Questao_3_1 info={null} />} />
        <Route path="/questao3_2" element={<Questao_3_2 />} />
        <Route path="/questao3_3" element={<Questao_3_3 />} />
        <Route path="/questao3_4" element={<Questao_3_4 />} />
      </Routes>
    </Router>
  );
}

export default App;
{
  /* <Questao_1_1 /> */
}
{
  /* <Questao_1_2 /> */
}
{
  /* <Questao_1_3 /> */
}
{
  /* <Questao_1_4 /> */
}

{
  /* <Questao_2_1 /> */
}
{
  /* <Questao_2_2 /> */
}
{
  /* <Questao_2_3 /> */
}
{
  /* <Questao_2_4 /> */
}

{
  /* <Questao_3_1 /> */
}
{
  /* <Questao_3_2 /> */
}
{
  /* <Questao_3_3 /> */
}
{
  /* <Questao_3_4 /> */
}
