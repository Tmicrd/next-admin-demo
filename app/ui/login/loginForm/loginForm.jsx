"use client";
import { useFormState } from "react-dom";
import styles from "./loginForm.module.css";
import { authenticate } from "@/app/lib/actions";

const LoginForm = () => {
  // one approach
  // const [err, setErr] = useState();
  // const handleLogin = async (formData) => {
  //   const data = await authenticate(formData);
  //   data.error && setErr(data.error);
  // };
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <form action={formAction} className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username"></input>
      <input type="password" placeholder="password" name="password"></input>
      <button>Login</button>
      {state && state}
      {/* {err && err} */}
    </form>
  );
};

export default LoginForm;
