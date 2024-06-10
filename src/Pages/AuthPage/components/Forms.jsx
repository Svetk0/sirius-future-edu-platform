import { useState } from "react";

import styles from './Forms.module.scss';

const Forms = ({title, handleClick}) => { 
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

  return (
      <>
          <div className={ styles.wrapper}>
              <input className={ styles.input}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail"
              />
                     <input className={ styles.input}
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  placeholder="Пароль"
              />
              <button className={styles.button }
              onClick={() => handleClick(email,pass)}
              >
                  { title}
              </button>
      </div>
      </>
  )
}


export default Forms;