import { Button, Card, Grid2, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

export default function Questao_3_3() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (dados) => {
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
            gap: 5,
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField label="Nome" {...register("nome")} fullWidth />
            <TextField label="E-mail" {...register("email")} fullWidth />
            <TextField label="Telefone" {...register("fone")} fullWidth />
            <Button type="submit">Enviar</Button>
          </form>
        </Grid2>
      </Card>
    </Grid2>
  );
}
