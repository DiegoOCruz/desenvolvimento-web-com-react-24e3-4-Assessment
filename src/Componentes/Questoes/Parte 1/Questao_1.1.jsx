import { Button, Card, Grid2, Typography } from "@mui/material";
import { useState } from "react";

export default function Questao_1_1() {
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
            <Typography variant="h5">Quem inventou a lâmpada?</Typography>
          </Grid2>
        )}
        {!visible && (
          <Grid2 item>
            <Typography variant="h5">Thomas Edison</Typography>
            <Typography variant="h6">
              A lâmpada foi inventada por Thomas Edison (1847-1931) em 1879. No
              dia 21 de outubro, o inventor conseguiu manter uma lâmpada acessa
              durante 48 horas.
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
