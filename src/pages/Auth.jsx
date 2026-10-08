import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { isValidEmail, isValidPassword } from "@/features/auth/lib/validation";
import {
  useLoginMutation,
  useRegisterMutation,
} from "@/features/auth/api/authQueries";

const Auth = () => {
  const navigate = useNavigate();

  const { mutate: loginUser, isPending: isLoginPending } = useLoginMutation();
  const { mutate: registerUser, isPending: isRegisterPending } =
    useRegisterMutation();
  const location = useLocation();

  const login = location.pathname === "/login";
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrorMessage((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {
      name: "",
      email: "",
      password: "",
    };
    if (!isValidEmail(form.email)) {
      errors.email = "Некорректный email";
    }
    if (login) {
      if (!form.password.trim()) {
        errors.password = "Введите пароль";
      }
    } else {
      if (!isValidPassword(form.password)) {
        errors.password =
          "Пароль должен содержать минимум 8 символов, букву и цифру";
      }
      if (form.name.trim().length < 2) {
        errors.name = "Введите имя";
      }
    }
    setErrorMessage(errors);
    if (errors.name || errors.email || errors.password) {
      return;
    }
    if (login) {
      loginUser(
        {
          email: form.email,
          password: form.password,
        },
        {
          onSuccess: (data) => {
            localStorage.setItem("token", data.token);
            navigate("/applications", {
              replace: true,
            });
          },
          onError: (error) => {
            setServerError(error.response?.data?.message || "Произошла ошибка");
          },
        },
      );
    } else {
      registerUser(
        {
          name: form.name,
          email: form.email,
          password: form.password,
        },
        {
          onSuccess: (data) => {
            localStorage.setItem("token", data.token);
            navigate("/applications", {
              replace: true,
            });
          },
          onError: (error) => {
            setServerError(error.response?.data?.message || "Произошла ошибка");
          },
        },
      );
    }
  };
  console.log(errorMessage);
  return (
    <div className="auth__wrapper">
      <div className="auth__content"></div>
      <div className="auth__form">
        <div className="auth__type">
          {<h3>{login ? "Вход в аккаунт" : "Регистрация"}</h3>}
        </div>
        <form onSubmit={handleSubmit} className="auth__form">
          {!login ? (
            <div className="auth__item">
              <label htmlFor="name">Имя</label>
              <input
                type="text"
                name="name"
                value={form.name}
                placeholder="Введите имя"
                onChange={handleChange}
              />
              {errorMessage.name && (
                <span className="errorMessage">{errorMessage.name}</span>
              )}
            </div>
          ) : (
            ""
          )}
          <div className="auth__item">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="Email"
              onChange={handleChange}
            />
            {errorMessage.email && (
              <span className="errorMessage">{errorMessage.email}</span>
            )}
          </div>
          <div className="auth__item">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              name="password"
              value={form.password}
              placeholder="Пароль"
              onChange={handleChange}
            />
            {errorMessage.password && (
              <span className="errorMessage">{errorMessage.password}</span>
            )}
          </div>
          <button type="submit" disabled={isLoginPending || isRegisterPending}>
            {login ? "Войти" : "Зарегистрироваться"}
          </button>
          {serverError && <span className="errorMessage">{serverError}</span>}
          <p>
            {login ? "Если у вас нет аккаунта?" : "У меня уже есть аккаунт"}
            <Link to={login ? "/register" : "/login"}>
              {login ? "Зарегистрироваться" : "Войти"}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Auth;
