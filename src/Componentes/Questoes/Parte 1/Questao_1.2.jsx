import {
  Button,
  Card,
  Grid2,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Questao_1_2() {
  const [nome, setNome] = useState("");
  const [erroMsg, setErrorMsg] = useState("");
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
        {erroMsg && <Typography>{erroMsg}</Typography>}

        <TextField
          id="Nome"
          label="Nome"
          variant="outlined"
          value={nome}
          onChange={(e) => {
            setNome(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            nome.length == 0
              ? setErrorMsg("Campo nome é de preenchimento Obrigatório!")
              : setErrorMsg("") & alert(`Olá ${nome}!`);
          }}
        >
          Mensagem
        </Button>
      </Card>
    </Grid2>
  );
}
