import { Button, Card, Grid2, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Questao_3_2() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [fone, setFone] = useState("");

  const [json, setJson] = useState("");
  const [controle, setControle] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const handleSubmit = () => {
    if (
      nome.length <= 0 ||
      email.length <= 0 ||
      fone.search(/^[0-9]+$/) === -1
    ) {
      setErrorMsg(true);
      return false;
    } else {
      const dados = {
        nome: nome,
        email: email,
        telefone: fone,
      };
      setErrorMsg(false);
      setJson(JSON.stringify(dados));
      setControle(true);
      console.log(JSON.stringify(dados));
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
        <Grid2
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          {errorMsg && (
            <Typography color="red" variant="h5">
              Erro, verifique os campos e tente novamente!
            </Typography>
          )}
          <TextField
            label="Nome"
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
          <TextField
            label="E-mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            label="Telefone"
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
