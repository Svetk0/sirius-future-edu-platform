import { useState, useEffect } from "react";
import styles from "./Forms.module.scss";

import ValidateInputs from "./validateForms.js";

const validate = new ValidateInputs();

const FormsSignUp = ({ title, handleClick }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [input, setInput] = useState({
    lastName: "",
    firstName: "",
    email: "",
    password: "",
    repeatPassword: "",
    group: "",
    roleSelect: "",
  
  });

  const [inputError, setInputError] = useState({
    lastNameError: false,
    firstNameError: false,
    emailError: false,
    passwordError: false,
    repeatPasswordError: false,
  });

  const [isEmpty, setIsEmpty] = useState({
    lastName: false,
    firstName: false,
    email: false,
    password: false,
    repeatPassword: false,
  });
 


  //Проверка заглавной буквы в ФИО
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  //Проверка поля ввода
  const handleInput = (e) => {
    const { name, value } = e.target;
    let errors = "";

    setInput((prev) => ({ ...prev, [name]: value.trim() }));


    if (name === "lastName" || name === "firstName") {
      setInput((prev) => ({
        ...prev,
        [name]: capitalizeFirstLetter(value.trim()),
      }));
      errors = validate.validateName(value, name);
    } else {
      setInput((prev) => ({ ...prev, [name]: value.trim() }));
      if (name === "email") {
        errors = validate.validateEmail(value);
      } else if (name === "password" || name === "repeatPassword") {
        errors = validate.validatePassword(value);
      }
    }
    if (errors !== "") {
      setInputError((prev) => ({ ...prev, [name + "Error"]: true }));
        setErrorMessage((prev) => ({ ...prev, [name + "ErrorMessage"]: errors }));
     
    } else {
        setInputError((prev) => ({ ...prev, [name + "Error"]: false }));
    
    }
  };

  const handleBlur = (e) => {
    const name = e.target.name;
      setIsEmpty((prev) => ({ ...prev, [name]: true }));
 
  };

  return (
    <div className={styles.wrapper}>
      {isEmpty.firstName && inputError.firstNameError && (
        <div name="firstNameErrorMessage" className={styles.error_message}>
          {errorMessage.firstNameErrorMessage}
        </div>
      )}

      <input
        className={styles.input}
        name="firstName"
        required
        value={input.firstName}
        onChange={(e) => handleInput(e)}
        onBlur={(e) => handleBlur(e)}
        placeholder="Имя"
      />
      {isEmpty.lastName && inputError.lastNameError && (
        <div name="lastNameErrorMessage" className={styles.error_message}>
          {errorMessage.lastNameErrorMessage}
        </div>
      )}
      <input
        className={styles.input}
        name="lastName"
        required
        value={input.lastName}
        onChange={(e) => handleInput(e)}
        onBlur={(e) => handleBlur(e)}
        placeholder="Фамилия"
      />

      {isEmpty.email && inputError.emailError && (
        <div name="emailErrorMessage" className={styles.error_message}>
          {errorMessage.emailErrorMessage}
        </div>
      )}

      <input
        className={styles.input}
        name="email"
        type="email"
        value={input.email}
        onChange={(e) => handleInput(e)}
        onBlur={(e) => handleBlur(e)}
        placeholder="E-mail"
      />

      {isEmpty.password && inputError.passwordError && (
        <div name="passwordErrorMessage" className={styles.error_message}>
          {errorMessage.passwordErrorMessage}
        </div>
      )}

      <input
        className={styles.input}
        name="password"
        type="password"
        minLength="6"
        maxLength="15"
        required
        value={input.password}
        onChange={(e) => handleInput(e)}
        onBlur={(e) => handleBlur(e)}
        placeholder="Пароль"
      />

      {/* {isEmpty.repeatPassword && inputError.repeatPasswordError && (
        <div name="repeatPasswordErrorMessage" className={styles.error_message}>
          {errorMessage.repeatPasswordErrorMessage}
        </div>
      )}

      <input
              className={styles.input}
              name="repeatPassword"
              type="password"
        minLength="6"
        maxLength="15"
        required
        value={input.repeatPassword}
        onChange={(e) => setInput(e.target.value)}
        onBlur={(e) => handleBlur(e)}
        placeholder="Повторите пароль"
      /> */}
      <button
        type="submit"
        className={styles.button}
       
        onClick={() => handleClick(input)}
      >
        {title}
      </button>
    </div>
  );
};

export default FormsSignUp;
