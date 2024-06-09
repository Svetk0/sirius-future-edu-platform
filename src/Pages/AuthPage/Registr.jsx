import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
//import { setUser } from '../../Store/slices/userSlice';
//import styles from "./AuthPage.module.scss";
// import Button from "../../Components/Button/Button";
// import Input from "../../Components/Input/Input";
// import ServicesQuestions from '../../Services/ServicesQuestions';
// import "../../styles/forms.scss"

// import ValidateInputs from "./validateForm";
// const validate = new ValidateInputs();

import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function Registr() {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorMessageForm, setErrorMessageForm] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const navigate = useNavigate();

  const [input, setInput] = useState({
    lastName: '',
    firstName: '',
    email: '',
    password: '',
    repeatPassword: '',
    group: '',
    roleSelect: '',
  });

  const [inputError, setInputError] = useState({
    lastNameError: false,
    firstNameError: false,
    emailError: false,
    passwordError: false,
    repeatPasswordError: false,
  });

  const [isDirty, setIsDirty] = useState({
    lastName: false,
    firstName: false,
    email: false,
    password: false,
    repeatPassword: false,
  });


  function handleRegistration(e) {
    e.preventDefault()
    if (input.password !== input.repeatPassword) {
      setInputError(prev => ({ ...prev, repeatPasswordError: true }));
      setErrorMessage(prev => ({ ...prev, repeatPasswordErrorMessage: 'Пароли не совпадают' }));
    } else {
      setInputError(prev => ({ ...prev, repeatPasswordError: false }));

      for (let key in inputError) {
        if (inputError[key]) return;
      }

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, input.email, input.password)
        .then((user) => {
          const infoUser = {
            displayName: input.lastName + ' ' + input.firstName,
            password: input.password,
            email: input.email,
            uid: user.user.uid,
            group: input.group,
          }
          return infoUser
        })
        .then((currentUser) => {
          dispatch(setUser(currentUser))
          ServicesQuestions.createForm({
            "uid": currentUser.uid,
            "name": input.firstName,
            "surname": input.lastName,
            "groupNum": currentUser.group,
            "email": currentUser.email,
          })
          updateProfile(auth.currentUser, {
            displayName: input.firstName + ' ' + input.lastName
          }).catch(e => console.error(e))
          navigate('/home');
          setRegistrationSuccess(true);
          setErrorMessageForm(null);
        })
        .catch(e => {
          console.error(e);
          setErrorMessageForm('Аккаунт с таким email уже существует');
        });
    }
  }


  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleInput = (e) => {
    const { name, value } = e.target;
    let errors = '';

    if (name === 'lastName' || name === 'firstName') {
      setInput(prev => ({ ...prev, [name]: capitalizeFirstLetter(value.trim()) }));
      errors = validate.validateName(value, name);
    } else {
      setInput(prev => ({ ...prev, [name]: value.trim() }));
      if (name === 'email') {
        errors = validate.validateEmail(value);
      } else if (name === 'password' || name === 'repeatPassword') {
        errors = validate.validatePassword(value);
      }
    }

    if (errors !== '') {
      setInputError(prev => ({ ...prev, [name + 'Error']: true }));
      setErrorMessage(prev => ({ ...prev, [name + 'ErrorMessage']: errors }));
    } else {
      setInputError(prev => ({ ...prev, [name + 'Error']: false }));
    }
  };

  const handleBlur = (e) => {
    const name = e.target.name;
    setIsDirty(prev => ({ ...prev, [name]: true }));
  };

  return (
    <div className="authFormWrapper">
      <form className="authForm" onSubmit={handleRegistration}>

        <h4 className="form-title">Регистрация</h4>

        {errorMessageForm && <div className="authForm__error-message">{errorMessageForm}</div>}

        {isDirty.lastName && inputError.lastNameError && (
          <div name="lastNameErrorMessage" className="authForm__error-message">
            {errorMessage.lastNameErrorMessage}
          </div>
        )}
        <Input
          name="lastName"
          placeholder="Фамилия"
          value={input.lastName}
          required
          minLength="2"
          maxLength="20"
          onBlur={(e) => handleBlur(e)}
          onChange={(e) => handleInput(e)}
        />

        {isDirty.firstName && inputError.firstNameError && (
          <div name="firstNameErrorMessage" className="authForm__error-message">
            {errorMessage.firstNameErrorMessage}
          </div>
        )}
        <Input
          name="firstName"
          placeholder="Имя"
          value={input.firstName}
          required
          minLength="2"
          maxLength="20"
          onBlur={(e) => handleBlur(e)}
          onChange={(e) => handleInput(e)}
        />

        {isDirty.email && inputError.emailError && (
          <div name="emailErrorMessage" className="authForm__error-message">
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
          <div name="passwordErrorMessage" className="authForm__error-message">
            {errorMessage.passwordErrorMessage}
          </div>
        )}
        <Input
          name="password"
          placeholder="Пароль"
          value={input.password}
          required
          minLength="6"
          maxLength="15"
          onBlur={(e) => handleBlur(e)}
          onChange={(e) => handleInput(e)}
        />

        {isDirty.repeatPassword && inputError.repeatPasswordError && (
          <div name="repeatPasswordErrorMessage" className="authForm__error-message">
            {errorMessage.repeatPasswordErrorMessage}
          </div>
        )}
        <Input
          name="repeatPassword"
          placeholder="Повторите пароль"
          value={input.repeatPassword}
          required
          minLength="6"
          maxLength="15"
          onBlur={(e) => handleBlur(e)}
          onChange={(e) => handleInput(e)}
        />

        <Input
          type="number"
          name="group"
          placeholder="Номер группы"
          required
          value={input.group}
          onChange={e => setInput(prev => ({ ...prev, group: e.target.value }))}
        />

        <Button
          type="submit"
          id="registration"
          disabled={isLoading}
          text="Создать"
        />
        <div className="bottom-question">
          Уже есть аккаунт?{' '}
          <Link to="/login" className="link">Войти</Link>
        </div>
      </form>
    </div>
  );
};
