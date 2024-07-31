import styles from "../Header.module.css";

function HeaderDesktop({isFixedHeader, windowY, getClickedButton}){

    function handleClickButton(event){
        let buttons = document.querySelectorAll(`.${styles.header_nav__button}`);
        buttons.forEach(element => {
            element.classList.remove(`${styles.active_button}`);
        });

        event.target.classList.add(`${styles.active_button}`);

        getClickedButton(event.target);
    }

    return(
        
        <>
            <header className={`${styles.header} ${isFixedHeader ? styles.header_fixed : ""} ${windowY > 72 ? styles.fixed_header_opened : styles.fixed_header_closed}`}>
                <div className={styles.header_content}>
                    <h2>Doctor<span>Care</span></h2>
                    <nav className={styles.header_nav}>
                        <button className={`${styles.header_nav__button} ${styles.active_button}`} onClick={handleClickButton} index={3}>Início</button>
                        <button className={`${styles.header_nav__button}`} onClick={handleClickButton} index={1}>Sobre</button>
                        <button className={`${styles.header_nav__button}`} onClick={handleClickButton} index={0} >Serviços</button>
                        <button className={`${styles.header_nav__button}`} onClick={handleClickButton} index={2}>Depoimentos</button>
                    </nav>
                    <button className={styles.consult_button}>Agendar consulta</button>
                </div>
            </header>
        </>
    )
}

export default HeaderDesktop;