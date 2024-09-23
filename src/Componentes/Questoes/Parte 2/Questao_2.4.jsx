import {
  Avatar,
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

export default function Questao_2_4() {
  const [receitas, setReceitas] = useState([]);
  const [receita, setReceita] = useState("");

  const getReceitas = async () => {
    let retorno = {};
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    try {
      await fetch(url)
        .then((response) => response.json())
        .then((dados) => {
          retorno = dados.categories;
        });
    } catch (e) {
      console.log(`Erro: ${e}`);
    }
    return setReceitas(retorno);
  };

  useEffect(() => {
    getReceitas();
  }, []);

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
        <FormControl fullWidth>
          <InputLabel id="receitas">Receitas </InputLabel>
          <Select
            labelId="receitas"
            id="receitas"
            value={receita}
            label="receitas"
            onChange={(e) => setReceita(e.target.value)}
          >
            {receitas.map((item, index) => (
              <MenuItem key={index} value={item.strCategory}>
                {item.strCategory}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {receita &&
          receitas.map((item, index) => {
            if (item.strCategory === receita) {
              return (
                <>
                  <Avatar
                    key={index}
                    sx={{ width: 100, height: 100 }}
                    src={item.strCategoryThumb}
                  />
                  <Typography key={index}>
                    {item.strCategoryDescription}
                  </Typography>
                </>
              );
            }
          })}
        {/* <Button
          // onClick={() => {
          //   Object.values(receitas).map((e) => {
          //     e.map((i) => console.log(i.strCategory));
          //   });
          // }}
          onClick={() => {
            receitas.map((e) => console.log(e.strCategory));
          }}
        >
          Botao
        </Button> */}
      </Card>
    </Grid2>
  );
}
