import React, { useState, ChangeEvent } from "react";
import client from "../../feathers";
import styles from "./auth.module.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string | undefined>();
  //const [id, setId] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [error, setError] = useState<Error | undefined>();

  function updateField(cb: (value: string | undefined) => void) {
    return (ev: ChangeEvent<HTMLInputElement>) => {
      cb(ev.target.value);
    };
  }

  function login() {
    return client
      .authenticate({
        strategy: "local",
        email,
        password,
      })
      .then((e) => {
        //console.log("login authenticated")
        //console.log(e.user);
      })
      .catch((err) => setError(err));
  }

  function signup() {
    return client
      .service("users")
      .create({ email, password })
      .then(() => login());
  }

  return (
    <main className={styles.loginContainer}>
      {/* <h1 className={styles.heading}>Log in or signup</h1> */}
      {error && <p>{error.message}</p>}
      <div className={styles.loginPanels}>
        <div className={styles.loginVisualsPanel}>
          <img src="https://rare-gallery.com/uploads/posts/4587155-planet-space-abstract-blue-green-space-art-digital-art.jpg"></img>
        </div>

        <div className={styles.loginCredentialsPanel}>
          <h2>vConestoga</h2>
          <h4>Authentication</h4>

          <form>
            <fieldset>
              <input
                className={styles.inputField}
                type="email"
                name="email"
                placeholder="Email"
                onChange={updateField(setEmail)}
              />
            </fieldset>

            <fieldset>
              <input
                className={styles.inputField}
                type="password"
                name="password"
                placeholder="Password"
                onChange={updateField(setPassword)}
              />
            </fieldset>

            <button
              type="button"
              className={`${styles.button} signup`}
              onClick={() => login()}
            >
              Log in
            </button>

            <button
              type="button"
              className={`${styles.button} signup`}
              onClick={() => signup()}
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
