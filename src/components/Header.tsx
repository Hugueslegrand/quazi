import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

import quazi from '../assets/quazi.jpg'

import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer';
import HeadBanner from './HeadBanner';


const Header = () => {
    const [small, setSmall] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 40)
      );
    }
  }, []);

    return(
        <section>
           
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
            <HeadBanner/>
        </section>
    );
}

export default Header;