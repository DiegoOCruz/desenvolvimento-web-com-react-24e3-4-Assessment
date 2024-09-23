import { Button, Card, Grid2, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

export default function Questao_3_4() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
        <Grid2 container spacing={3}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Nome"
              {...register("nome", {
                required: true,
              })}
              fullWidth
              margin="normal"
            />
            {errors.nome && errors.nome.type === "required" && (
              <Typography color="red">Campo nome é obrigatório</Typography>
            )}
            <TextField
              label="E-mail"
              {...register("email", {
                required: true,
              })}
              fullWidth
              margin="normal"
            />
            {errors.email && errors.email.type === "required" && (
              <Typography color="red">Campo E-mail é obrigatório</Typography>
            )}
            <TextField
              label="Telefone"
              {...register("fone", {
                required: "Telefone é obrigatório",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Telefone deve conter apenas números",
                },
              })}
              fullWidth
              margin="normal"
            />
            {errors.fone && (
              <Typography color="red">{errors.fone.message}</Typography>
            )}
            <Button type="submit">Enviar</Button>
          </form>
        </Grid2>
      </Card>
    </Grid2>
  );
}
