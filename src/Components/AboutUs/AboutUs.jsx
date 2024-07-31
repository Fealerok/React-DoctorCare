import styles from "./AboutUs.module.css";
import MiniHeader from "../Common/MiniHeader/MiniHeader";
import HeaderArticle from "../HeaderActicle/HeaderArticle";
import InformationText from "../Common/InformationText/InformationText";

import doctor_img from "/src/images/AboutUs/doctor.png";
import { useRef, useEffect } from "react";
function AboutUs({getHeaderRef}) {

    const headerRef = useRef(null);

    useEffect(() => {
        getHeaderRef(headerRef);
    }, []);

    return (
        <>
            <div className={styles.about_us} ref={headerRef}>
                <div className={styles.about_us_content}>
                    <img src={doctor_img} alt="" />
                    <div className={styles.info_block}>
                        <div className={styles.mini_header_container}>
                            <MiniHeader text_header={"SOBRE NÓS"}></MiniHeader>
                        </div>
                        <div className={styles.header_article_container}>
                            <HeaderArticle header_text={"Entenda quem somos e por que existimos"}></HeaderArticle>
                        </div>
                        <div className={styles.info_text_container}>
                            <InformationText text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."}></InformationText>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;