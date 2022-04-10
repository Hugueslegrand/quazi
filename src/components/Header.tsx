import  { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

import quazi from '../assets/quazi.jpg'

import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer';
import HeadBanner from './HeadBanner';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../App';
import SwitchSelector from 'react-switch-selector';
import UpperBanner from './UpperBanner';
import { Button } from '@mui/material';

const Header = () => {
    const [small, setSmall] = useState<boolean>(false);
    const { t, i18n } = useTranslation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 40)
      );
    }
  }, []);

    return(
        <section>
          <UpperBanner/>
            <nav className={ small? styles.fixed:styles.nav}>
                
            <section style={{width:'20%'}}>
                <Link  to="/">
                <img className={styles.nav_logo} src={quazi} alt="logo" />
            </Link>
            </section>
            
           
            <section className={styles.nav_menu}>
                <ul className={styles.nav_list}>
                <li >
                       <SwipeableTemporaryDrawer/>
                      
                </li>
                </ul>
                
            </section>
            
            </nav>
            <nav className={ small? styles.fixed2:styles.nav2}>
                
           
            
           
            <section className={styles.nav_menu}>
                <ul className={styles.nav_list}>
                <li >
                <Link className={styles.nav_link} to={`/${t("Home")}`}>
                   {t("Home")}
                 </Link>
                      
                </li>
                <li >
                <Link className={styles.nav_link} to={`/${t("Services")}/extensions`}>
                   {t("HairExtensions")}
                 </Link>  
                </li>
                <li >
                <Link className={styles.nav_link} to="/">
                   {t("HairPieces")}
                 </Link>  
                </li>
                <li >
                <Link className={styles.nav_link} to="/">
                   {t("Salon")}
                 </Link>  
                </li>
                <li >
                <Link className={styles.nav_link} to="/">
                   {t("Prices")}
                 </Link>  
                </li>
                <li >
                <Link className={styles.nav_link} to="/">
                   {t("Inspiration")}
                 </Link>  
                </li>
                <li >
                <Link className={styles.nav_link} to="/">
                   {t("Consult")}
                 </Link>  
                </li>
                <li >
                <Link className={styles.nav_link} to={`/${t("Appointment")}`}>
                <Button   variant="contained">
                {t("Appointment")}
                </Button>
                   
                 </Link>  
                </li>
                </ul>
                
            </section>
            <section >
                <Link  to="/">
                <img className={styles.nav_logo} src={quazi} alt="logo" />
            </Link>
            </section>
            </nav>
            <HeadBanner/>
        </section>
    );
}

export default Header;