import { Button, Card, Grid2, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Questao_3_1({ info }) {
  const [nome, setNome] = useState(info ? info.nome : "");
  const [email, setEmail] = useState(info ? info.email : "");
  const [fone, setFone] = useState(info ? info.fone : "");

  const [json, setJson] = useState("");
  const [controle, setControle] = useState(false);

  const handleSubmit = () => {
    const dados = {
      nome: nome,
      email: email,
      telefone: fone,
    };

    setJson(JSON.stringify(dados));
    setControle(true);
    console.log(JSON.stringify(dados));
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
        <Grid2
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <TextField
            label="Nome"
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
          <TextField
            label="E-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            label="Telefone"
            value={fone}
            onChange={(e) => {
              setFone(e.target.value);
            }}
          />
          <Button onClick={handleSubmit}>Enviar</Button>
        </Grid2>
        <Grid2>{controle && <Typography>{json}</Typography>}</Grid2>
      </Card>
    </Grid2>
  );
}
