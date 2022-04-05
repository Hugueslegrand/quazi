
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollToTop from "react-scroll-to-top";
import styles from './Haircut.module.css'

import Slider from '../components/extensions/Slider';
import { useTranslation } from 'react-i18next';
import { Card,CardActionArea, Typography,CardContent} from '@mui/material';

const Extensionspage=()=>{

    const {t,i18n}= useTranslation();

return(
    <section>
       
        <section className={styles.content}>
            <ScrollToTop smooth color='white' style={{backgroundColor: '#f2df80'}}/>
        <header>
            <Header/>
        </header>    
        <main>
        
        <section  className={styles.textAndSlider}>
            <section  className={styles.textArea}>
            <Card>
                    <CardActionArea>
                    <CardContent>
                         <Typography style={{fontFamily:'papyrus,fantasy', fontSize:'2.5rem'}} gutterBottom variant="h5" component="div">
                         {t("Extensions")}
                         </Typography>
                        <Typography style={{fontFamily:'papyrus,fantasy', fontSize:'2rem'}} variant="body2" color="text.secondary">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ipsam dolorem. 
                          Impedit exercitationem vero eius quas distinctio corrupti esse. Optio earum nulla
                           maxime quidem provident suscipit iste, obcaecati est quia.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
               
            </section>
            <section className={styles.sliderArea}>
            <Card >
                    <CardActionArea>
                    <CardContent>
                         <Typography style={{fontFamily:'papyrus,fantasy', fontSize:'2.5rem',textAlign:'center'}} gutterBottom variant="h5" component="div">
                         {t("Examples")}
                         </Typography>
                        
                        </CardContent>
                    </CardActionArea>
                </Card>
                 <Slider/>
            </section>
        </section>
            
        </main>
     
        <Footer/>
        </section>
        
        
    </section>
);
}
export default Extensionspage;