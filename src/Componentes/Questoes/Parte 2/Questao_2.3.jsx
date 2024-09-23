import { Button, Card, Grid2, TextField, Typography } from "@mui/material";
import { faker } from "@faker-js/faker";
import { useState } from "react";
import { useEffect } from "react";

export default function Questao_2_3() {
  const [nomes, setNomes] = useState([]);
  const [filtro, setFiltro] = useState("");

  const getNomes = () => {
    const array = [];
    for (let index = 0; index < 101; index++) {
      const name = faker.person.fullName();
      array.push(name);
    }
    setNomes(array);
  };

  useEffect(() => {
    getNomes();
  }, []);

  const nomesFiltrados = nomes.filter((nome) => {
    return nome.toLowerCase().startsWith(filtro.toLowerCase());
  });

  return (
    <Grid2
      container
      sx={{
        display: "flex",
        flexDirection: "row",
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
        <TextField
          label={"Buscar"}
          onChange={(e) => setFiltro(e.target.value)}
        />
        <Grid2
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          {nomesFiltrados.map((nome, index) => (
            <>
              <Typography key={index}>{nome}</Typography>
            </>
          ))}
        </Grid2>
      </Card>
      {/* <Button onClick={() => nomes.map((nome) => console.log(nome))}>
        Botao
      </Button> */}
    </Grid2>
  );
}
