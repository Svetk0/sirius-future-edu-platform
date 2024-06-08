import { NavLink } from "react-router-dom";

import logo from "./img/logo.svg";

import { icons }  from './img/icons';
import styles from './MenuNav.module.scss';

const MenuNav = () => { 



  return (
    <div className={ styles.container}>
      <img className={ styles.logo} src={logo} alt="logo" />
      <ul className={ styles.wrapper}>
        {icons.map((item, index) => (
          <li 
            key={item.title}
            >
            <NavLink
              className={styles.menuItem}
              to={item.link}>
            <img  src={item.icon} alt={item.title} />
            <div>{ item.title}</div>
              </NavLink>
        
          </li>
        ))}
      </ul>
    </div>
  )
}


export default MenuNav;