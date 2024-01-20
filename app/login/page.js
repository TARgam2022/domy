import React from "react";
import Link from "next/link";
import miscs from "@/styles/miscs.module.css";
import login from "@/styles/login.module.css";
import clsx from "clsx";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const loginPage = () => {
  return (
    <body>
      <div className={`${login.card} ${miscs.center}`}>
        <Link href="/" className={login.back}>
          <FaArrowAltCircleLeft />
        </Link>
        <h1>Inicia Sesion</h1>
        <div className="section">
          <input
            className={`${miscs.input} ${login.input}`}
            placeholder="E-mail"
            type="email"
          ></input>
          <span className={login.error}>Err</span>
        </div>
        <div className="section">
          <input
            className={`${miscs.input} ${login.input}`}
            placeholder="Contraseña"
            type="password"
          ></input>
          <span className={login.error}>Err</span>
        </div>
        <p>Olvidaste tu contraseña? saasdfasdfsadfasdfasdf</p>
        <button className={miscs.block_primary_btn}>Iniciar sesion</button>
      </div>
    </body>
  );
};

export default loginPage;
