import homeIcon from './home-icon.svg';
import scheduleIcon from './schedule-icon.svg';
import faqIcon from './faq-icon.svg';
import headphonesIcon from './headphones-icon.svg';
import libraryIcon from './library-icon.svg';
import puzzleIcon from './puzzle-icon.svg';
import settingsIcon from './settings-icon.svg';
import walletIcon from './wallet-icon.svg';
import achievementsIcon from './achievements-icon.svg';

export  const icons = [
    {
        title: 'Главная',
        icon: homeIcon,
        link: '/home',
      },
      {
        title: 'Расписание',
          icon: scheduleIcon,
          link: '/',
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
]

