import gift from "./img/gift.svg";

import styles from "./ReferalAd.module.scss";

const ReferalAd = () => {
  return (
    <div className={styles.container}>
      <h3>Учитесь бесплатно</h3>
          <div className={ styles.text}>
        Приводите друзей с детьми заниматься в Sirius Future и получайте
        подарки!
          </div>
          <a href="https://siriusfuture.ru/" target="_blank" rel="noopener noreferrer">
          <button
              className={styles.button}
              >Узнать</button>
              </a>
          <img className={ styles.picture} src={ gift} alt="gift" />
    </div>
  );
};

export default ReferalAd;
