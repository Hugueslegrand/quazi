
import { Link } from 'react-router-dom';
import styles from './Footer.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import { Grid } from '@mui/material';
import Wave from 'react-wavify'

const Footer =()=>{

    return(
        <div>

<Wave fill='#D3472C'
        paused={false}
        options={{
          height: 100,
          amplitude: 20,
          speed: 0.15,
          points: 3
        }}
  />
        <footer className={styles.footer}>
         
            <section>
                <img src="" alt="placeholder for an image"/>
            </section>
            <section>
                <section>
                <p>Prins Albertstraat 61/Regentieplein 41</p>
                <p>9100 Sint-Niklaas - België</p>
                <p>Tel/Fax: 0032 (0)3 779 41 10</p>
                </section>
                <section>
                    <a href="https://www.facebook.com/Quazi-Hair-Cosmetics-1408025729415357/" target="_blank"> 
                    <Grid item xs={8}>
                    <FacebookIcon />
                    </Grid>
                    </a>
                </section>
               
            </section>
        </footer>
        </div>
    );
}
export default Footer;