import {
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid2,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

export default function Questao_2_1({ admin }) {
  const [checked, setChecked] = useState(false);
  const [controle, setControle] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    console.log(admin);
    if (admin === null) {
      setControle(false);
    } else {
      setControle(admin);
      setChecked(admin);
    }
  });

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
        <Typography>Usuário:</Typography>
        <Typography>Diego</Typography>
        {checked ? (
          <Typography>O usuário atual é Administrador</Typography>
        ) : (
          <Typography>O usuário atual é Colaborador</Typography>
        )}
        <FormControlLabel
          label="Administrador"
          control={
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
        />
      </Card>
    </Grid2>
  );
}
