import { FormEventHandler, useState } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Popup from '../components/Popup';
import ScrollToTop from "react-scroll-to-top";
import  styles from './Contact.module.css'
import { useTranslation } from 'react-i18next';

import emailjs from 'emailjs-com';
import { Card, CardContent, Typography } from '@mui/material';


const Contactpage = ()=>{
    const {t,i18n}= useTranslation();

    const [name,setName]=useState<string>("");
    const [email,setEmail]=useState<string>("");
    const [phoneNumber,setPhoneNumber]=useState<string>("");
    const [message,setMessage]=useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [send,setSend] = useState<boolean>(false);
   
    const language = t("Send");

    const togglePopup = () => {
        setIsOpen(!isOpen);
      }

    const sendEmail:FormEventHandler<HTMLFormElement>=(event)=>{
        event.preventDefault();
        if(name!==""){
            setSend(true);
        }
        if(name!=="" && phoneNumber!=="" && message!=="" &&email!==""){
        event.preventDefault();
        console.log(event.target);
        emailjs.send("service_f7ivlgl","template_rykq8cs",{
            name: name,
            phone_number: phoneNumber,
            message: message,
            user_email: email,
            },'user_gg1mtHLse2fah3ku9e3ZH')
        .then(res=>{
            console.log(res);
        }).catch(err=>{console.log(err);});

        setName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
        setIsOpen(!isOpen);
        setSend(false);
    }
        
    }


    return(
        
        <section>
            
       
        <section className={styles.content}>
             <ScrollToTop smooth color='white' style={{backgroundColor: '#f2df80 '}}/>
            <header>
                <Header/>
            </header>
            <section className={styles.styled}>

                    <h1 style={{color: '#d32c65'}}>{[t("Contacts")]}</h1>

                </section>
            <section className={styles.place}>
                <section className={styles.placeIframe}>
                <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d625.4345586788712!2d4.144209916629569!3d51.16861512031102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c38e980f4b9855%3A0x327f932d8e0508a7!2sQuazi%20Hair%20%26%20Cosmetics!5e0!3m2!1snl!2sbe!4v1643847759657!5m2!1snl!2sbe" 
            width="100%" 
            height="450" 

            style={{border:0}} 
           
            loading="lazy">

            </iframe>
            
                </section>
                <section  className={styles.placeText}>
                    <Card style={{ height: '100%',background:'#D3472C' }} >
                        <CardContent>
                            <Typography color="white" sx={{ fontFamily:'papyrus,fantasy',fontSize: 28, mb: 2.5 }}>
                            Prins Albertstraat 61/Regentieplein 41
               
                            </Typography>
                            <Typography color="white" sx={{ fontFamily:'papyrus,fantasy',fontSize: 28, mb: 2.5 }}>
                           
                            9100 Sint-Niklaas - België
               
                            </Typography>
                            <Typography color="white" sx={{ fontFamily:'papyrus,fantasy',fontSize: 28 , mb: 1.5}}>
                        
                             Tel/Fax: 0032 (0)3 779 41 10
                            </Typography>
                        </CardContent>
                    </Card>
               
                </section>
                

            </section>

            <section className={styles.ContactSection}>
            <h2>{t("InTouch")}</h2>
            <section className={styles.Border}></section>
            <form className={styles.ContactForm} onSubmit={sendEmail}>
            <input required value={name} type="text" name="name" onChange={(event)=>{setName(event.target.value)}} className={styles.contactFromText} placeholder={t("Name")}/>
            <input required value={email} type="email" name="user_email" onChange={(event)=>{setEmail(event.target.value)}}  className={styles.contactFromText} placeholder={t("Email")}/>
            <input required value={phoneNumber} type="text" name="phone_number" onChange={(event)=>{setPhoneNumber(event.target.value)}} className={styles.contactFromText} placeholder={t("PhoneNumber")}/>
            <textarea required value={message} name="message" onChange={(event)=>{setMessage(event.target.value)}} className={styles.contactFromText} placeholder={t("Message")}></textarea>
                
                <input
                type="submit"
                value={language}
                className={styles.button} 
                />
            </form>
            {isOpen && <Popup
      content={<>
        <h2>{t("Sent")}</h2>
      </>}
      handleClose={togglePopup}
    />}
        </section>
        <Footer/>
        </section>
       
           
        </section>
        
    );
}

export default Contactpage;