import styles from "./ServicesBlock.module.css";

import checkmark from "../../../icons/check.png";

import InformationText from "../../Common/InformationText/InformationText";


function ServicesBlock({block_header, info_text}){
    return (
        <>
            <div className={styles.services_block}>
                <div className={styles.checkmark_block}>
                    <img src={checkmark} alt="" />
                </div>
                <span className={styles.services_block_header}>{block_header}</span>
                <div className={styles.container_information_text}>
                    <InformationText text={info_text}></InformationText>
                </div>
            </div>
        </>
    )
}

export default ServicesBlock;