import { FormEventHandler, useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Popup from "../components/Popup";
import ScrollToTop from "react-scroll-to-top";
import stylesContact from "./Contact.module.css";
import { useTranslation } from "react-i18next";

import emailjs from "emailjs-com";
import { Card, CardContent, Typography } from "@mui/material";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import Stack from "@mui/material/Stack";

const Contactpage = () => {
  const [value, setValue] = useState<Date | null>(new Date());
  const { t, i18n } = useTranslation();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [send, setSend] = useState<boolean>(false);

  const language = t("Send");

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const sendEmail: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (name !== "") {
      setSend(true);
    }
    if (name !== "" && phoneNumber !== "" && message !== "" && email !== "") {
      event.preventDefault();
      console.log(event.target);
      emailjs
        .send(
          "service_f7ivlgl",
          "template_rykq8cs",
          {
            name: name,
            phone_number: phoneNumber,
            message: message,
            user_email: email,
          },
          "user_gg1mtHLse2fah3ku9e3ZH"
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      setName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
      setIsOpen(!isOpen);
      setSend(false);
    }
  };
console.log(value);
  return (
    <section>
      <section className={stylesContact.content}>
        <ScrollToTop
          smooth
          color="white"
          style={{ backgroundColor: "#f2df80 " }}
        />
        <header>
          <Header />
        </header>

        <section className={stylesContact.ContactSection}>
          <h2>{t("InTouch")}</h2>
          <section className={stylesContact.Border}></section>
          <form className={stylesContact.ContactForm} onSubmit={sendEmail}>
            <input
              required
              value={name}
              type="text"
              name="name"
              onChange={(event) => {
                setName(event.target.value);
              }}
              className={stylesContact.contactFromText}
              placeholder={t("Name")}
            />
            <input
              required
              value={email}
              type="email"
              name="user_email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              className={stylesContact.contactFromText}
              placeholder={t("Email")}
            />
            <input
              required
              value={phoneNumber}
              type="text"
              name="phone_number"
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }}
              className={stylesContact.contactFromText}
              placeholder={t("PhoneNumber")}
            />
            <textarea
              required
              value={message}
              name="message"
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              className={stylesContact.contactFromText}
              placeholder={t("Message")}
            ></textarea>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        
       
        <DatePicker
          disableFuture
          label="Date"
          openTo="year"
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue:any) => {
            setValue(newValue);
          }}
          renderInput={(params:any) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>

            <input
              type="submit"
              value={language}
              className={stylesContact.button}
            />
          </form>
          {isOpen && (
            <Popup
              content={
                <>
                  <h2>{t("Sent")}</h2>
                </>
              }
              handleClose={togglePopup}
            />
          )}
        </section>
        <Footer />
      </section>
    </section>
  );
};

export default Contactpage;
