import styles from "./Main.module.css";
import woman_img from "../../images/Main/woman.png";
import MiniHeader from "../Common/MiniHeader/MiniHeader";
import Statistic from "../Statistic/Statistic";
import whatsapp_icon from "/src/icons/whatsapp.png";
function Main(){
    return (
        <>
            <div className={styles.main_content}>
                <div className={styles.info_content}>
                    <MiniHeader text_header={"BOAS-VINDAS A DOCTORCARE 👋"}></MiniHeader>
                    <h1 className={styles.header}>Assistência médica simplificada para todos</h1>
                    <span className={styles.info_text}>Os médicos da DoctorCare vão além dos sintomas para tratar a causa raiz de sua doença e proporcionar uma cura a longo prazo.</span>
                    <button className={styles.button_consult}>
                        <img src={whatsapp_icon} alt="" />
                        Agende sua consulta
                    </button>
                </div>
                <img src={woman_img} alt="" className={styles.main_image} />

                <Statistic></Statistic>
            </div>

        </>
    )
}

export default Main;