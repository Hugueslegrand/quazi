import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Grid } from "@mui/material";
import Wave from "react-wavify";
import { useTranslation } from "react-i18next";
import PhoneIcon from "@mui/icons-material/Phone";
import Button from "@mui/material/Button";
import DirectionsIcon from '@mui/icons-material/Directions';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import Stack from "@mui/material/Stack";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Wave
        fill="#D3472C"
        paused={false}
        options={{
          height: 100,
          amplitude: 20,
          speed: 0.15,
          points: 3,
        }}
      />
      <footer className={styles.footer}>
          <div className={styles.contactAndHours}>
        <section >
          <section>{t("Openings")}</section>
          <div className={styles.leftFollow}>
                <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
                </div>
          <section>
            <table>
              <tbody>
                <tr>
                  <td>{t("Monday")}</td>
                  <td>12:00–18:00</td>
                </tr>
                <tr>
                  <td>{t("Tuesday")}</td>
                  <td>10:00–18:00</td>
                </tr>
                <tr>
                  <td>{t("Wednesday")}</td>
                  <td>10:00–18:00</td>
                </tr>
                <tr>
                  <td>{t("Thursday")}</td>
                  <td>{t("Closed")}</td>
                </tr>
                <tr>
                  <td>{t("Friday")}</td>
                  <td>10:00–18:00</td>
                </tr>
                <tr>
                  <td>{t("Saturday")}</td>
                  <td>10:00–18:00</td>
                </tr>
                <tr>
                  <td>{t("Sunday")}</td>
                  <td>{t("Closed")}</td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>
        
        <section className={styles.contactSection}>
          <section>CONTACT</section>
          <div className={styles.leftFollow}>
                <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
                </div>
          <section>
            <p>Prins Albertstraat 61/Regentieplein 41</p>
            <p>9100 Sint-Niklaas - België</p>
            <div className={styles.route}>
            <Stack direction="row" spacing={2}>
                <a target="blank" href="https://www.google.com/maps/dir//Quazi+Hair+%26+Cosmetics,+Prins+Albertstraat+61,+9100+Sint-Niklaas/@51.1686513,4.1425818,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47c38e980f4b9855:0x327f932d8e0508a7!2m2!1d4.1448016!2d51.1686619!3e0">
                <Button   variant="contained" endIcon={<DirectionsIcon />}>
                  ROUTE
                </Button>
                </a>
               
                <a>
                <Button   variant="contained" endIcon={<WhatsAppIcon />}>
                  WHATSAPP
                </Button>
                </a>
              </Stack>
            </div>
           
            <div className={styles.phone}>
              <PhoneIcon />
              <a href="tel:+32037794110">0032 (0)3 779 41 10</a>
            </div>
            <div className={styles.phone}>
              <EmailIcon />
              <a href="mailto:info@quazi.be">info@quazi.be</a>
            </div>
          </section>
          
        </section>
        </div>
        <div className={styles.followUs}>
            <div className={styles.footerTextArea}>
                <div className={styles.leftFollow}>
                <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
                </div>
                
                <h2>{t("Follow")}</h2>
                
                <div className={styles.leftFollow}>
                <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
                </div>
            </div>
            <div className={styles.followIcons}>
                <a
              href="https://www.facebook.com/Quazi-Hair-Cosmetics-1408025729415357/"
              target="_blank"
            >
             
                <FacebookIcon />
                
            
            </a>
            
            </div>
        
        </div>

        <div className={styles.cookies}>
        <Link style={{color:'black'}} to="/">
        {t("Cookie")}
            </Link>
            
        </div>
      </footer>
    </div>
  );
};
export default Footer;
