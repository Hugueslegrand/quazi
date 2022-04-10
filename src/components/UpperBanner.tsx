import  { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './UpperBanner.module.css';

import quazi from '../assets/quazi.jpg'

import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer';
import HeadBanner from './HeadBanner';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../App';
import SwitchSelector from 'react-switch-selector';
import { Grid } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const UpperBanner =()=>{
    const { t, i18n } = useTranslation();
    const { langIndex, setLangIndex } = useContext(ThemeContext);
    const [small, setSmall] = useState<boolean>(false);
  
    const options = [
      {
        label: "EN",
        value: "en",
      },
      {
        label: "NL",
        value: "nl",
      },
      {
        label: "FR",
        value: "fr",
      },
    ];

   

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 40)
      );
    }
  }, []);

    return (
        <div className={small?styles.noDisplay:styles.upperBanner}>
        <div className={styles.contactsInfo}>
         <span>
           Quazi Hair & Cosmetics
         </span>
         <span>
           |
         </span>
         <span>
         0032 (0)3 779 41 10
         </span>
         <span>
           |
         </span>
         <span>
         <a href="https://www.facebook.com/Quazi-Hair-Cosmetics-1408025729415357/" target="_blank"> 
                    <Grid item xs={8}>
                    <FacebookIcon />
                    </Grid>
                    </a>
         </span>
         <span>
           |
         </span> 
         <a style={{color:"white",display:"flex",flexDirection:"row"}} href="https://www.facebook.com/Quazi-Hair-Cosmetics-1408025729415357/shop/?ref_code=mini_shop_page_shop_tab_cta&ref_surface=page" target="_blank"> 
         <span >
              Shop
            </span>
           
                <ShoppingCartIcon fontSize="medium"/>
            </a>
          
        </div>
        <div className={styles.language}>
          <div> 
           
          </div>
           <div>
           <SwitchSelector
     options={options}
     initialSelectedIndex={langIndex}
     fontColor={"black"}
     selectedBackgroundColor="#D3472C"
     backgroundColor="transparant"
     onChange={(language: any) => {
       i18n.changeLanguage(language);
       if (language === "en") {
         setLangIndex(0);
       }
       if (language === "nl") {
         setLangIndex(1);
       }
       if (language === "fr") {
         setLangIndex(2);
       }
     }}
   />
           </div>
        </div>
      </div>
    );
}

export default UpperBanner;