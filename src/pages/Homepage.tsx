import  {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollToTop from "react-scroll-to-top";
import styles from './Home.module.css'
import CircleLoader from "react-spinners/CircleLoader";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import quazi from '../assets/quazi.jpg';
import { useTranslation } from 'react-i18next';
import sliderImage from "../components/home/SliderImage";
import CookieConsent, { Cookies } from "react-cookie-consent";



const Homepage=()=>{
    const [loading,setLoading]=useState<boolean>(false);
    const {t,i18n}= useTranslation();
    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },2000)
    },[]);

return(
    <section className={styles.body}>
      
      
           
      <CookieConsent  location="bottom">This website uses cookies to enhance the user experience.</CookieConsent>
        <section className={styles.content}>
            <ScrollToTop smooth color='white' style={{backgroundColor: '#f2df80  '}}/>
        <header>
            <Header/>
        </header>    
        <main>
        <section className={styles.sliderBody}>
                    <section className={styles.slider}>
                        <section className={styles.sliderTrack}>
                            {sliderImage.map((slide:any, index:number) =>
                                <section className={styles.slide}>
                                    
                                        <img style={{height:'100%',width:'100%'}} src={slide.urls} alt={slide.title} />
                                    
                                </section>

                            )}

                        </section>

                    </section>
                    </section> 
            <section className={styles.styled}>

                <h1 style={{color: '#d32c65'}}>{[t("Provide")]}</h1>

                </section>
            <section className={styles.services}>
              
                <Card className={styles.serviceCard} variant="outlined">
                    <CardContent style={{backgroundColor:'#D3472C'}}>
                        <Typography sx={{ fontSize: 28 }} color="white" gutterBottom>
                         {t("Haircut")}
                         </Typography>
                        
                      <Typography sx={{ mb: 1.5 }} color="white">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Facilis dolorum, ut, architecto maxime, odio fugiat 
                        hic ex quasi qui inventore iure suscipit accusantium quaerat 
                        velit sequi excepturi? Nemo, ratione doloremque?
                    </Typography>
                 </CardContent>
                 <CardActions>
                 <Link className={styles.link} style={{textDecoration:'none'}} to={`/${t("Services")}/haircut`}>
                      <Button size="small">{t("ReadMore")}</Button>
                 </Link>
                
              </CardActions>
              </Card>
              <Card className={styles.serviceCard} variant="outlined">
                    <CardContent style={{backgroundColor:'#D3472C'}}>
                        <Typography sx={{ fontSize: 28 }} color="white" gutterBottom>
                         {t("Extensions")}
                         </Typography>
                        
                      <Typography sx={{ mb: 1.5 }} color="white">
                       {t("ExtensionsHome")}
                    </Typography>
                 </CardContent>
                 <CardActions>
                 <Link className={styles.link} style={{textDecoration:'none'}} to={`/${t("Services")}/extensions`}>
                      <Button size="small">{t("ReadMore")}</Button>
                 </Link>
              </CardActions>
              </Card>
              <Card className={styles.serviceCard} variant="outlined">
                    <CardContent style={{backgroundColor:'#D3472C'}}>
                        <Typography sx={{ fontSize: 28 }} color="white" gutterBottom>
                         {t("Coloring")}
                         </Typography>
                        
                      <Typography sx={{ mb: 1.5 }} color="white">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Facilis dolorum, ut, architecto maxime, odio fugiat 
                        hic ex quasi qui inventore iure suscipit accusantium quaerat 
                        velit sequi excepturi? Nemo, ratione doloremque?
                    </Typography>
                 </CardContent>
                 <CardActions>
                 <Link className={styles.link} style={{textDecoration:'none'}} to={`/${t("Services")}/coloring`}>
                      <Button size="small">{t("ReadMore")}</Button>
                 </Link>
              </CardActions>
              </Card>
              <Card className={styles.serviceCard} variant="outlined">
                    <CardContent style={{backgroundColor:'#D3472C'}}>
                        <Typography sx={{ fontSize: 28 }} color="white" gutterBottom>
                         {t("Straighten")}
                         </Typography>
                        
                      <Typography sx={{ mb: 1.5 }} color="white">
                        {t("StraightenHome")}
                    </Typography>
                 </CardContent>
                 <CardActions>
                 <Link className={styles.link} style={{textDecoration:'none'}} to={`/${t("Services")}/straighten`}>
                      <Button size="small">{t("ReadMore")}</Button>
                 </Link>
              </CardActions>
              </Card>
              <Card style={{width:'100%'}} className={styles.serviceCard} variant="outlined">
                    <CardContent style={{backgroundColor:'#D3472C'}}>
                        <Typography sx={{ fontSize: 28 }} color="white" gutterBottom>
                         {t("Keratin")}
                         </Typography>
                        
                      <Typography sx={{ mb: 1.5 }} color="white">
                       {t("KeratinHome")}
                    </Typography>
                 </CardContent>
                 <CardActions>
                 <Link className={styles.link} style={{textDecoration:'none'}} to={`/${t("Services")}/keratin`}>
                      <Button size="small">{t("ReadMore")}</Button>
                 </Link>
              </CardActions>
              </Card>

            </section>
            <section className={styles.appointment}>
            <Link className={styles.link} style={{textDecoration:'none'}}  to={`/${t("Contacts")}`}>
            <Button variant="outlined">{t("Appointment")}</Button>
            </Link>
            </section>

           
        </main>

        <Footer/>
        </section>
        
        
    </section>
);
}

export default Homepage;