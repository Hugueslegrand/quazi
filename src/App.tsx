import React, { useState } from 'react';

import './App.css';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Services from './pages/Services';
import Contactpage from './pages/Contactpage';
import Aboutpage from './pages/Aboutpage';
import Haircutpage from './pages/Haircutpage';
import { useTranslation } from 'react-i18next';
import Extensionspage from './pages/Extensionspage';
import Coloringpage from './pages/Coloringpage';
import Straightenpage from './pages/Straightenpage';
import Keratinpage from './pages/Keratinpage';

export const ThemeContext = React.createContext({index:0, setIndex:(index:number)=> {}});

function App() {
  const [index,setIndex] =useState<number>(0);
 
  const {t,i18n}= useTranslation();
  return (
    <ThemeContext.Provider value={{index:index , setIndex: setIndex}}>
    <Router>
    <Switch>

      <Route path={`/${t("Services")}/haircut`}>
      <Haircutpage/>
      </Route>
      <Route path={`/${t("Services")}/straighten`}>
      <Straightenpage/>
      </Route>
      <Route path={`/${t("Services")}/coloring`}>
      <Coloringpage/>
      </Route>
      <Route path={`/${t("Services")}/extensions`}>
      <Extensionspage/>
      </Route>
      <Route path={`/${t("Services")}/keratin`}>
      <Keratinpage/>
      </Route>
      
      <Route path={`/${t("Services")}`}>
      <Services/>
      </Route>
    
      <Route path={`/${t("Contacts")}`}>
      <Contactpage/>
      </Route>

      <Route path={`/${t("About")}`}>
      <Aboutpage/>
      </Route>
      
      <Route path="/">
      <Homepage/>
      </Route>

      </Switch>
  </Router>
  </ThemeContext.Provider>
  );
}

export default App;
