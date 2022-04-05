
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollToTop from "react-scroll-to-top";

import styles from './About.module.css'
import { useTranslation } from 'react-i18next';
import quazi from '../assets/quazi.jpg';
import background2 from '../assets/background2.jpg';
import { Card, CardContent, Typography ,CardActionArea, CardMedia} from '@mui/material';



const Aboutpage = ()=>{

    const {t,i18n}= useTranslation();


    return(
        <section>
       
        <section className={styles.content}>
            <ScrollToTop smooth color='white' style={{backgroundColor: '#f2df80'}}/>
        <header>
            <Header/>
        </header>    
        <main>
            <section className={styles.styled}>

            <h1 style={{color: '#D3472C'}}>{[t("About")]}</h1>

            </section>
            <section className={styles.banner} >
                 <Card className={styles.bannerImg} >
                 <CardActionArea>
                    <CardMedia
                        component="img"
                        
                        
                         image={background2}
                         alt= {t("About")}
                          />
                    </CardActionArea>
                    </Card>
            </section>
            <section className={styles.abouth2}>
          <Card className={styles.card} style={{background:'radial-gradient(ellipse at 33% 50%, #f2df80, #f29544 133%)'}}>
                    <CardActionArea>
                    <CardContent>
                      
                        <Typography style={{fontFamily:'papyrus,fantasy', fontSize:'2rem'}} variant="body2" color="text.secondary">
                       {t("AboutSection1")}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
               
            </section>
            <section className={styles.abouth1}>
            <Card className={styles.card} style={{background:'#D3472C'}}>
                        <CardContent>
                            <Typography color="white" sx={{ fontFamily:'papyrus,fantasy',fontSize: 28, mb: 2.5 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi 
                    iusto quibusdam obcaecati veritatis ab sapiente! Consequuntur suscipit 
                    ipsum minima nisi hic voluptatem molestias libero quia, 
                    perferendis repellendus blanditiis odit consectetur.
               
                            </Typography>
                            
                        </CardContent>
                    </Card>
            </section>
            
           
           
        </main>
     
        <Footer/>
        </section>
        
        
    </section>
    );
}
export default Aboutpage;