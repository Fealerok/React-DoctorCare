import { useRef, useState } from "react";
import styles from "../Header.module.css";

function HeaderMobile({isFixedHeader, windowY, getClickedButton}){

    const openedFixedHeader = useRef(null);
    const[isHeaderOpened, setHeaderOpen] = useState(false);

    function clickOpenHeaderHandle(){
        setHeaderOpen(!isHeaderOpened);
    }

    function handleClickButton(event){
        let buttons = document.querySelectorAll(`.${styles.header_nav__button}`);
        buttons.forEach(element => {
            element.classList.remove(`${styles.active_button}`);
        });

        event.target.classList.add(`${styles.active_button}`);

        getClickedButton(event.target);

        if (openedFixedHeader.current.classList.contains(styles.headerOpened)){
            openedFixedHeader.current.classList.replace(styles.headerOpened, styles.headerHidden);
        }
    }

    return (
        <>
             <header className={`${styles.header} ${isFixedHeader ? styles.header_fixed : ""} ${windowY > 72 ? styles.fixed_header_opened : styles.fixed_header_closed}`}>
                <div className={styles.header_content}>
                    <h2>Doctor<span>Care</span></h2>

                    <div className={styles.mobile_header_button_container} onClick={clickOpenHeaderHandle}>
                        <div className={styles.container_line}></div>
                        <div className={styles.container_line}></div>
                        <div className={styles.container_line}></div>
                    </div>
                    <div className={`${styles.header_content_mobile} ${isHeaderOpened ? `${styles.headerOpened}` : `${styles.headerHidden}`}`} ref={openedFixedHeader}>
                        <div className={styles.header_mobile_opened_menu}>
                            <h2 className={`${styles.header_opened}`}>Doctor<span className={`${styles.header_opened}`}>Care</span></h2>
                            <div className={styles.header_mobile_close_button_container} onClick={clickOpenHeaderHandle}>
                                <div className={styles.mobile_container_line}></div>
                                <div className={styles.mobile_container_line}></div>
                            </div>

                        </div>
                        <nav className={styles.header_nav_mobile}>
                            <button className={`${styles.header_nav__button} ${styles.active_button}`} onClick={handleClickButton} index={3}>Início</button>
                            <button className={`${styles.header_nav__button}`} onClick={handleClickButton} index={1}>Sobre</button>
                            <button className={`${styles.header_nav__button}`} onClick={handleClickButton} index={0}>Serviços</button>
                            <button className={`${styles.header_nav__button}`} onClick={handleClickButton} index={2}>Depoimentos</button>
                        </nav>
                        <button className={styles.consult_button}>Agendar consulta</button>
                    </div>
                </div>
                
            </header>
        </>
    )
}

export default HeaderMobile;