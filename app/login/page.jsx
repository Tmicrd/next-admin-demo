import styles from "@/app/ui/login/login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="username"></input>
        <input type="text" placeholder="password"></input>
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
