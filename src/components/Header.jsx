import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div style={{ display: "flex", alignItems: "center" }}>
          <span className="logo">LOGO</span>
          <ul className="list">
            <Link className="link" to={"/"}>
              Главная
            </Link>
            <Link className="link" to={"/"}>
              Тарифы
            </Link>
            <Link className="link" to={"/"}>
              Акции
            </Link>
            <Link className="link" to={"/"}>
              Новости
            </Link>
            <Link className="link" to={"/"}>
              Контакты
            </Link>
          </ul>
          <Link to={"/signin"}>
            <button className="signIn">Войти</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
