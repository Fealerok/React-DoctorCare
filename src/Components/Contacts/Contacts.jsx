import styles from "./Contacts.module.css";
import people_img from "/src/images/Contacts/People.png";
import location_icon from "/src/icons/map.png";
import mail_icon from "/src/icons/mail.png";
import whatsapp_icon from "/src/icons/whatsapp.png";

import HeaderArticle from "../HeaderActicle/HeaderArticle";
import InformationText from "../Common/InformationText/InformationText";
import ContactsInfo from "./ContactsInfo/ContactsInfo";
import { useRef, useEffect } from "react";
function Contacts({getHeaderRef}){

    const headerRef = useRef(null);

    useEffect(() => {
        getHeaderRef(headerRef);
    }, []);

    return (
        <>
            <div className={styles.contacts} ref={headerRef}>
                <div className={styles.contacts_content}>
                    <div className={styles.info_block}>
                        <div className={styles.header_article_container}>
                            <HeaderArticle header_text={"Entre em contato com a gente!"}></HeaderArticle>
                        </div>

                        <div className={styles.contacts_info}>
                            <ContactsInfo contacts_text={"R. Amauri Souza, 346"} contacts_icon={location_icon}></ContactsInfo>
                            <ContactsInfo contacts_text={"contato@doctorcare.com"} contacts_icon={mail_icon}></ContactsInfo>
                        </div>

                        <button className={styles.button_consult}>
                            <img src={whatsapp_icon} alt="" />
                            Agende sua consulta
                        </button>
                    </div>

                    <img src={people_img} alt="" />
                </div>
               
            </div>
        </>
    )
}

export default Contacts;