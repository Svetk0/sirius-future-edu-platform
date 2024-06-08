import logo from "./img/logo.svg";
import homeIcon from './img/icons/home-icon.svg';
import scheduleIcon from './img/icons/schedule-icon.svg';
import achievementsIcon from './img/icons/achievements-icon.svg';
import styles from './MenuNav.module.scss';

const MenuNav = () => { 

  const items = [
    {
      title: 'Главная',
      icon: homeIcon,
    },
    {
      title: 'Расписание',
      icon: scheduleIcon,
    },
    {
      title: 'Оплата',
      icon: achievementsIcon,
    },
    {
      title: 'Достижения',
      icon: achievementsIcon,
    },
    {
      title: 'Тренажеры',
      icon: achievementsIcon,
    },
    {
      title: 'Библиотека',
      icon: achievementsIcon,
    },
    {
      title: 'Проверка связи',
      icon: achievementsIcon,
    },
    {
      title: 'Настройки',
      icon: achievementsIcon,
    },
    {
      title: 'Вопросы',
      icon: achievementsIcon,
    }
  ];
  return (
    <div className={ styles.container}>
      <img className={ styles.logo} src={logo} alt="logo" />
      <div className={ styles.wrapper}>
        {items.map((item, index) => (
          <div className={ styles.menuItem}>
            <img  src={item.icon} alt={item.title + 'иконка'} />
            <div>{ item.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default MenuNav;