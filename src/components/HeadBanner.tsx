import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeadBanner.module.css';
import quazi from '../assets/quazi.jpg'
import { useTranslation } from 'react-i18next';

const HeadBanner =()=>{
  const {t,i18n}= useTranslation();
    return(
        <header className={styles.header}>
              <div className={styles.stars}>
              
      <div className={styles.starb}></div>
      <div className={styles.stara}></div>
    </div>
    <div className={styles.title}>
      <h1>
        <span>Quazi</span>
        Hair & Cosmetics
      </h1>
      <h2>
      {t("Audience")}
      </h2>
    </div>
        </header>
  

    );
}

export default HeadBanner;