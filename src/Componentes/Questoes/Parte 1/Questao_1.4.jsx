import { Button, Card, Grid2, Typography } from "@mui/material";
import { useState } from "react";

export default function Questao_1_4() {
  const [visible, setVisible] = useState(true);

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
        {visible && (
          <Grid2 item>
            <Typography variant="h5">
              Quais são as desvantagens de implementar um inline event?
            </Typography>
          </Grid2>
        )}
        {!visible && (
          <Grid2 item>
            <Typography variant="h6">
              Uma das principais desvantagens é em relação a manutenibilidade do
              código, uma vez que seá mais facil de analisar e entender uma
              funçao separada do que vericar tudo o que esta no meio do código
              com uma função inline.
            </Typography>
          </Grid2>
        )}
        <Button
          sx={{
            borderRadius: "20px",
          }}
          variant="outlined"
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? "Resposta" : "Esconder a Resposta"}
        </Button>
      </Card>
    </Grid2>
  );
}
