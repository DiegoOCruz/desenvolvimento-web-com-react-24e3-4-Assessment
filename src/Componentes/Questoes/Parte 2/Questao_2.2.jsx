import {
  Button,
  Card,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

export default function Questao_2_2({ Brazil }) {
  const [paises, setPaises] = useState([]);
  const [nomes, setNomes] = useState([]);

  const handleChange = (event) => {
    setNomes(event.target.value);
  };

  const getPaises = async () => {
    let retorno = {};
    const url = "https://restcountries.com/v3.1/all";
    try {
      await fetch(url)
        .then((response) => response.json())
        .then((dados) => {
          retorno = dados;
        });
    } catch (e) {
      console.log(`Erro: ${e}`);
    }
    return setPaises(retorno);
  };

  useEffect(() => {
    getPaises();
    if (Brazil) {
      setNomes(["Brazil"]);
    }
  }, [paises]);

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
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: 5,
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="countries">Países </InputLabel>
          <Select
            labelId="countries"
            id="countries"
            value={nomes}
            label="Países"
            onChange={handleChange}
          >
            {paises.map((pais, index) => (
              <MenuItem key={index} value={pais.name.common}>
                {pais.name.common}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Card>
    </Grid2>
  );
}
