import styles from "./InformationText.module.css";

function InformationText({text}){
    return <span className={styles.information_text}>{text}</span>
}

export default InformationText;