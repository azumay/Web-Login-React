import { useState } from "react";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const [data, setData] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className="containerForm">
      <form
        className="formCitaPrevia"
        onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
      >
        <input {...register("Mail", { required: true })} placeholder="Mail" />
        <input
          {...register("Password", { required: true })}
          placeholder="Password"
        />

        <p>{data}</p>

        {errors.Mail && <p>⚠️ El Mail es obligatorio!</p>}
        {errors.Password && <p>⚠️ La Password es obligatoria!</p>}

        <input type="submit" value="Entrar"/>
      </form>
    </div>
  );
}
