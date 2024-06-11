import { useState, useEffect } from "react";

import styles from "./Forms.module.scss";

const FormsSignUp = ({ title, handleClick }) => {
  // const [email, setEmail] = useState('');
  // const [pass, setPass] = useState('');

  const [input, setInput] = useState({
    lastName: "",
    firstName: "",
    email: "",
    password: "",
    repeatPassword: "",
    group: "",
    roleSelect: "",
  });
    
  const handleInput = (e) => {
    const { name, value } = e.target;
      let errors = '';
      setInput(prev => ({ ...prev, [name]: value.trim() }));
      //console.log('input', input);
  };

  return (
    <div className={styles.wrapper}>
      <input
              className={styles.input}
              name="firstName"
        required
        value={input.firstName}
        onChange={(e) => handleInput(e)}
        placeholder="Имя"
      />
      <input
        className={styles.input}
        name="lastName"
        required
        value={input.lastName}
        onChange={(e) => handleInput(e)}
        placeholder="Фамилия"
      />
      <input
              className={styles.input}
              name="email"
        type="email"
        value={input.email}
        onChange={(e) => handleInput(e)}
        placeholder="E-mail"
      />
      <input
              className={styles.input}
              name="password"
        type="password"
        value={input.password}
        onChange={(e) => handleInput(e)}
        placeholder="Пароль"
      />
      {/* <input className={ styles.input}
                  type="password"
                  value={input.repeatPassword}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Повторите пароль"
              /> */}
      <button
        className={styles.button}
              onClick={() => handleClick(input)}
      >
        {title}
      </button>
    </div>
  );
};

export default FormsSignUp;
