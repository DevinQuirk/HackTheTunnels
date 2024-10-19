import { useState } from "react";
import { useAccountContext } from "../../context";
import { Base as Layout } from "@/layouts";
import "./Login.style.scss";

function Login() {
  const [message, setMessage] = useState(null);
  const { login } = useAccountContext();

  const attemptLogin = async () => {
    try {
      const message = await login("admin@email.com", "password");
      setMessage(message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="Login"></div>
      <div className="Login__panel">
        <div className="Login__panel__content">
          <img id = "mysterymachine" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ff846d4e-6828-4ef9-9b1f-7f01b3fcf7e6/df16qq2-c7a927af-c16e-43c0-ac82-b8f3c21c4c5b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZmODQ2ZDRlLTY4MjgtNGVmOS05YjFmLTdmMDFiM2ZjZjdlNlwvZGYxNnFxMi1jN2E5MjdhZi1jMTZlLTQzYzAtYWM4Mi1iOGYzYzIxYzRjNWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PkzuPdkmzgoMjXiDBf2xA0m2fJ-qCUDiF08LMo0bZ0Q"></img>
          <div className="Login__panel__content__message">
            <div>Welcome to the Scooby Doo Team!</div>
            <div>
              Join us if you{" "}
              <a href="https://www.youtube.com/watch?v=JPcL3BL_XJw&ab_channel=EccentricSounds" target="blank">
                DARE
              </a>{" "}
            </div>
          </div>
          {message && <p>{message}</p>}
          <div className="Login__panel__content__input">
            <input type="text" placeholder="My Cmail"></input>
            <input type="password" placeholder="Password"></input>
          </div>
          <div className="Login__panel__content__checkbox">
            <input type="checkbox"></input>
            <label>Remember me, I'll be back</label>
          </div>
          <button
            className="Login__panel__button"
            onClick={() => attemptLogin()}
          >
            Entering (at my own risk)
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
