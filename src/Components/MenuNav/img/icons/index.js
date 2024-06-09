import homeIcon from './home-icon.svg';
import scheduleIcon from './schedule-icon.svg';
import faqIcon from './faq-icon.svg';
import headphonesIcon from './headphones-icon.svg';
import libraryIcon from './library-icon.svg';
import puzzleIcon from './puzzle-icon.svg';
import settingsIcon from './settings-icon.svg';
import walletIcon from './wallet-icon.svg';
import achievementsIcon from './achievements-icon.svg';

import hoverHomeIcon from './hover/home-icon.svg';
import hoverScheduleIcon from './hover/schedule-icon.svg';
import hoverFaqIcon from './hover/faq-icon.svg';
import hoverHeadphonesIcon from './hover/headphones-icon.svg';
import hoverLibraryIcon from './hover/library-icon.svg';
import hoverPuzzleIcon from './hover/puzzle-icon.svg';
import hoverSettingsIcon from './hover/settings-icon.svg';
import hoverWalletIcon from './hover/wallet-icon.svg';
import hoverAchievementsIcon from './hover/achievements-icon.svg';

export  const icons = [
    {
        title: 'Главная',
        icon: homeIcon,
        icon_hover: hoverHomeIcon,
        link: '/home-student',
      },
      {
        title: 'Расписание',
          icon: scheduleIcon,
          icon_hover: hoverScheduleIcon,
          link: '/',
      },
      {
        title: 'Оплата',
          icon: walletIcon,
          icon_hover: hoverWalletIcon,
      },
      {
        title: 'Достижения',
          icon: achievementsIcon,
          icon_hover: hoverHomeIcon,
      },
      {
        title: 'Тренажеры',
          icon: puzzleIcon,
          icon_hover: hoverPuzzleIcon,
      },
      {
        title: 'Библиотека',
          icon: libraryIcon,
          icon_hover: hoverLibraryIcon ,
      },
      {
        title: 'Проверка связи',
          icon: headphonesIcon,
          icon_hover: hoverHeadphonesIcon,
      },
      {
        title: 'Настройки',
          icon: settingsIcon,
          icon_hover: hoverSettingsIcon,
      },
      {
        title: 'Вопросы',
          icon: faqIcon,
          icon_hover: hoverFaqIcon,
      }
]

