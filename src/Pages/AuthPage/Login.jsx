import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import styles from  "./Auth.module.scss";
// import Button from "../../Components/Button/Button";
// import Input from "../../Components/Input/Input";
//import "../../styles/forms.scss";
// import Spinner from "../../Components/Spinner/Spinner";
// import ValidateInputs from "./validateForm";
// const validate = new ValidateInputs();
// import HomeAdmin from "../Admin/HomeAdmin/HomeAdmin";
// import HomeStudent from "../Student/HomeStudent/HomeStudent";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [input, setInput] = useState({
    email: '',
    password: '',
    role: ''
  });

  const [errorMessage, setErrorMessage] = useState({
    emailErrorMessage: '',
    passwordErrorMessage: '',
  });

  const [inputError, setInputError] = useState({
    emailError: false,
    passwordError: false,
  });

  const [isDirty, setIsDirty] = useState({
    email: false,
    password: false,
  });

  function handleLogin(e) {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, input.email, input.password)
      .then((userCredential) => {
        navigate('/home');
      })
      .catch(error => {
        const errorCode = error.code;
        if (errorCode === 'auth/invalid-credential') {
          setError(true);
        } else {
          console.error(error);
        }
      });
  }

  const handleBlur = (e) => {
    const name = e.target.name;
    setIsDirty(prev => ({ ...prev, [name]: true }));
  };


  const handleInput = (e) => {
    const { name, value } = e.target;
    let errors = '';

    setInput(prev => ({ ...prev, [name]: value.trim() }));
    (name === 'email') ? errors = validate.validateEmail(value) : errors = validate.validatePassword(value);

    if (errors !== '') {
      setInputError(prev => ({ ...prev, [name + 'Error']: true }));
      setErrorMessage(prev => ({ ...prev, [name + 'ErrorMessage']: errors }));
    } else {
      setInputError(prev => ({ ...prev, [name + 'Error']: false }));
    }
  };

  return (
    <div className="authFormWrapper">
      <div className="greeting">
        <h4 className="greeting-title">Тест: Hard Skills для Frontend-разработчиц</h4>
        <p className="greeting-text">
          Мы рады видеть тебя на странице тестирования!
          <br />
          Этот тест создан для Frontend-разработчиц с целью помочь эффективно подготовиться к собеседованию и оценить текущий уровень знаний.
        </p>
        <p> Готова пройти тестирование?</p>
      </div>
      <form className="authForm" onSubmit={handleLogin} >
        <h4 className="form-title">Вход в аккаунт</h4>
        {error && (
          <div className="authForm__error-message">
            Неверный email или пароль. Попробуйте снова
          </div>
        )}
        {isDirty.email && inputError.emailError && (
          <div className="authForm__error-message">
            {errorMessage.emailErrorMessage}
          </div>
        )}

        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          value={input.email}
          required
          onBlur={(e) => handleBlur(e)}
          onChange={(e) => handleInput(e)}
        />

        {isDirty.password && inputError.passwordError && (
          <div className="authForm__error-message">
            {errorMessage.passwordErrorMessage}
          </div>
        )}
        <Input
          type="password"
          name="password"
          placeholder="Пароль"
          value={input.password}
          required
          minLength="5"
          maxLength="15"
          onBlur={(e) => handleBlur(e)}
          onChange={(e) => handleInput(e)}
        />

        <Button type="submit" disabled={isLoading} text="Войти" className="button_submit" />
        <div className="bottom-question">
          Пока нет аккаунта?{' '}
          <Link to="/registr" className="link">Создать</Link>
        </div>
      </form>
    </div >
  )
}
