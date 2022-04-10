import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import SwitchSelector from "react-switch-selector";
import { ThemeContext } from "../App";
import { useContext } from "react";

import MenuIcon from "@mui/icons-material/Menu";

type Anchor = "Menu";

export default function SwipeableTemporaryDrawer() {
  const { t, i18n } = useTranslation();
  const { langIndex, setLangIndex } = useContext(ThemeContext);

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
  const [state, setState] = React.useState({
    Menu: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <section style={{ height: "25%" }}>
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
      </section>
      <Divider />
      <Divider />
      <Divider />
      <Divider /> 
      <List>      
        {[t("Home"), t("HairPieces"), t("Salon"), t("Prices"), t("Inspiration"), t("Consult"), t("Appointment")].map(
          (text, index) => (
            <Link className={styles.nav_link} to={`/${text}`}>
              <ListItem button key={text}>
                <ListItemIcon></ListItemIcon>
                <ListItemText className={styles.listItemText} primary={text} />
              </ListItem>
            </Link>
          )
        )}
      </List>
      
      
    </Box>
  );

  return (
    <section style={{color: 'white'}} className={styles.nav_item}>
      {(["Menu"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            style={{
              color: "white",
              fontSize: "1.5rem",
              fontFamily: "papyrus,fantasy",
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon fontSize="large"  />
            {anchor}
          </Button>
          <SwipeableDrawer
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </section>
  );
}
