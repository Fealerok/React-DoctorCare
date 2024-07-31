
import styles from './App.module.css'

import HeaderArticle from './Components/HeaderActicle/HeaderArticle';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Services from './Components/Services/Services';
import AboutUs from './Components/AboutUs/AboutUs';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
import { useEffect, useRef, useState } from 'react';

function App() {

  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [headersForScrolling, setHeadersForScrolling] = useState([]);
  const [clickedButton, setClickedButton] = useState(null);


  function scrollHandle(){
    setScrollY(window.scrollY);
  }
  
  function windowResizeHandle(){
    setWindowWidth(window.innerWidth);
  }

  const handleGetHeaderRef = (headerRef) => {
    let headerRefs = headersForScrolling;
    headerRefs.push(headerRef);
    setHeadersForScrolling(headerRefs);
  }

  const handleGetClickedButton = (clickedBtn) => {
    setClickedButton(clickedBtn);

    let clickedButtonIndex = Number(clickedBtn.getAttribute('index'));

    headersForScrolling[clickedButtonIndex].current.scrollIntoView();
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandle);
    window.addEventListener("resize", windowResizeHandle);

    setWindowWidth(window.innerWidth);
  }, []);



  return (
    <div className={styles.wrapper}>
      <main className={styles.wrapper_main}>
        <div className={styles.wrapper_main_content}>
          <Header windowW={windowWidth} windowY={scrollY} getClickedButton={handleGetClickedButton}></Header>
          <Main></Main>
        </div>
      </main>

      <Services getHeaderRef={handleGetHeaderRef}></Services>
      <AboutUs getHeaderRef={handleGetHeaderRef}></AboutUs>
      <Contacts getHeaderRef={handleGetHeaderRef}></Contacts>
      <Footer getHeaderRef={handleGetHeaderRef}></Footer>



    </div>
  )
}

export default App
