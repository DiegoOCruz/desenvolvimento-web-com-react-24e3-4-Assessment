import {
  Button,
  Card,
  Grid2,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Questao_1_3() {
  const [nome, setNome] = useState("");
  const [erro, setErro] = useState(false);
  const msgErro = "O campo nome é obrigatório!";

  const handleChange = (e) => {
    setNome(e.target.value);
  };

  const handleClick = () => {
    if (nome.length == 0) {
      setErro(true);
    } else {
      setErro(false);
      alert(`Olá ${nome}!`);
    }
  };

  return (
    <Grid2
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "50vh",
      }}
    >
      <Card
        sx={{
          width: "80%",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: 5,
        }}
      >
        {erro && <Typography color="red">{msgErro}</Typography>}
        <TextField
          id="Nome"
          label="Nome"
          variant="outlined"
          value={nome}
          onChange={handleChange}
        />
        <Button onClick={handleClick}>Mensagem</Button>
      </Card>
    </Grid2>
  );
}
