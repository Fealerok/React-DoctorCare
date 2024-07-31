import styles from "./ContactsInfo.module.css";
import InformationText from "../../Common/InformationText/InformationText";

function ContactsInfo({contacts_icon, contacts_text}) {
    return (
        <>
            <div className={styles.contacts_info}>
                <img src={contacts_icon} alt="" />
                <InformationText text={contacts_text}></InformationText>
            </div>
        </>
    )
}

export default ContactsInfo;