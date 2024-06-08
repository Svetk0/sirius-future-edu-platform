import logo from "./img/logo.svg";
import homeIcon from './img/icons/home-icon.svg';
import scheduleIcon from './img/icons/schedule-icon.svg';
import faqIcon from './img/icons/faq-icon.svg';
import headphonesIcon from './img/icons/headphones-icon.svg';
import libraryIcon from './img/icons/library-icon.svg';
import puzzleIcon from './img/icons/puzzle-icon.svg';
import settingsIcon from './img/icons/settings-icon.svg';
import walletIcon from './img/icons/wallet-icon.svg';
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
      icon: walletIcon,
    },
    {
      title: 'Достижения',
      icon: achievementsIcon,
    },
    {
      title: 'Тренажеры',
      icon: puzzleIcon,
    },
    {
      title: 'Библиотека',
      icon: libraryIcon,
    },
    {
      title: 'Проверка связи',
      icon: headphonesIcon,
    },
    {
      title: 'Настройки',
      icon: settingsIcon,
    },
    {
      title: 'Вопросы',
      icon: faqIcon,
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