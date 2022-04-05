
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

import { useTranslation } from 'react-i18next';
import styles from './Services.module.css';

import quazi from '../assets/quazi.jpg'
import extensions from '../assets/extensions.jpg'
import keratin from '../assets/keratin.jpeg'
import straighten from '../assets/ontkrullen.jpg'
import coloring from '../assets/kleuren.jpg'
import ScrollToTop from "react-scroll-to-top";

import Typed from "react-typed";


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const Services = ()=>{
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
                    
                    <Typed 
                    style={{color:"#d32c65 "}}
                    strings={[t("Services"),t("Haircut"),t("Coloring"),t("Straighten"),t("Extensions"),t("Keratin")]} typeSpeed={100}   backSpeed={50}
                    loop />
                   
                </section>


                <section className={styles.services}>
                    
                
                    <Link className={styles.link} style={{textDecoration:'none'}} to={`/${t("Services")}/haircut`}>
                    <Card  className={styles.haircut} >
                 <CardActionArea>
                    <CardMedia
                        component="img"
                        
                         image={quazi}
                         alt= {t("Haircut")}
                          />
                             <CardContent>
                         <Typography style={{fontFamily:'papyrus,fantasy', fontSize:'2.5rem'}} gutterBottom variant="h5" component="div">
                         {t("Haircut")}
                         </Typography>
                        <Typography style={{fontFamily:'papyrus,fantasy', fontSize:'2rem'}} variant="body2" color="text.secondary">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ipsam dolorem. 
                          Impedit exercitationem vero eius quas distinctio corrupti esse. Optio earum nulla
                           maxime quidem provident suscipit iste, obcaecati est quia.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                    </Link>
                   

                    <Link className={styles.link} style={{textDecoration:'none'}} to={`/${t("Services")}/coloring`}>
                    <Card  className={styles.coloring} >
                 <CardActionArea>
                    <CardMedia
                        component="img"
                       
                         image={coloring}
                         alt={t("Coloring")}
                          />
                             <CardContent>
                         <Typography style={{fontFamily:'papyrus,fantasy', fontSize:'2.5rem'}} gutterBottom variant="h5" component="div">
                         {t("Coloring")}
                         </Typography>
                     
                        </CardContent>
                    </CardActionArea>
                    </Card>
                     
                    </Link>

                   

                    <Link className={styles.link} style={{textDecoration:'none'}}  to={`/${t("Services")}/straighten`}>
                    <Card  className={styles.straighten} >
                 <CardActionArea>
                    <CardMedia
                        component="img"
                        
                         image={straighten}
                         alt={t("Straighten")}
                          />
                             <CardContent>
                         <Typography style={{fontFamily:'papyrus,fantasy', fontSize:'2.5rem'}} gutterBottom variant="h5" component="div">
                         {t("Straighten")}
                         </Typography>
                        
                        </CardContent>
                    </CardActionArea>
                    </Card>
                    </Link>
                   

                    <Link  className={styles.link} style={{textDecoration:'none'}} to={`/${t("Services")}/extensions`}>
                    <Card  className={styles.extensions} >
                 <CardActionArea >
                    <CardMedia
                        component="img"
                     
                         image={extensions}
                         alt={t("Extensions")}
                          />
                             <CardContent>
                         <Typography style={{fontFamily:'papyrus,fantasy', fontSize:'2.5rem'}} gutterBottom variant="h5" component="div">
                         {t("Extensions")}
                         </Typography>
                       
                        </CardContent>
                    </CardActionArea>
                    </Card>
                     
                    </Link>
                    <Link  className={styles.link} style={{textDecoration:'none'}} to={`/${t("Services")}/keratin`}>
                    <Card  className={styles.extensions} >
                 <CardActionArea >
                    <CardMedia
                        component="img"
                      
                         image={keratin}
                         alt={t("Keratin")}
                          />
                             <CardContent>
                         <Typography style={{fontFamily:'papyrus,fantasy', fontSize:'2.5rem'}} gutterBottom variant="h5" component="div">
                         {t("Keratin")}
                         </Typography>
                        
                        </CardContent>
                    </CardActionArea>
                    </Card>
                     
                    </Link>
                   
                </section>
                
            </main>
            <Footer/>
            </section>
        
        
            
        </section>
    );
}
export default Services;