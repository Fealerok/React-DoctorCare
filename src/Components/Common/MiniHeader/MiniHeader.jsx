import styles from "./MiniHeader.module.css";

function MiniHeader ({text_header}) {
    return (
        <h3 className={styles.header_text}>{text_header}</h3>
    )
}

export default MiniHeader;