import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import logo from "./img/logo.svg";
import ReferalAd from "../ReferalAd/ReferalAd";
import { icons }  from './img/icons';
import styles from './MenuNav.module.scss';



const MenuNav = () => { 

  const [isHover, setIsHover] = useState(-1);


  return (
    <div className={styles.container}>
      <Link to="/login">
        <img className={styles.logo} src={logo} alt="logo" />
        </Link>
      <ul className={ styles.wrapper}>
        {icons.map((item, index) => (
          <li 
            key={item.title}
            >
            <NavLink
              onMouseOver={() => setIsHover(index)}
                
              onMouseOut={() => setIsHover(-1)}
              className={styles.menuItem}
              to={item.link}>
              <img
                src={ (isHover === index) ? item.icon_hover : item.icon}
                alt={item.title}
              />
            <div>{ item.title}</div>
              </NavLink>
          </li>
        ))}
      </ul>
      <ReferalAd/>
    </div>
  )
}


export default MenuNav;