"use client";
import { authenticate } from "@/app/lib/actions";
import { useState } from "react";
import styles from "./loginForm.module.css";

const LoginForm = () => {
  const [err, setErr] = useState();
  const handleLogin = async (formData) => {
    const data = await authenticate(formData);
    data.error && setErr(data.error);
  };

  return (
    <form action={handleLogin} className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username"></input>
      <input type="password" placeholder="password" name="password"></input>
      <button>Login</button>
      {err && err}
    </form>
  );
};

export default LoginForm;
