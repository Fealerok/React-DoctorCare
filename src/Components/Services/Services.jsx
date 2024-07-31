import styles from "./Services.module.css";
import MiniHeader from "../Common/MiniHeader/MiniHeader";
import HeaderArticle from "../HeaderActicle/HeaderArticle";

import ServicesBlock from "./ServicesBlock/ServicesBlock";
import { useEffect, useRef } from "react";
function Services({getHeaderRef}) {

    const headerRef = useRef(null);

    useEffect(() => {
        getHeaderRef(headerRef);
    }, []);

    return (
        <>
            <div className={styles.services} ref={headerRef}>
                <div className={styles.services_content}>
                    <MiniHeader text_header={"SERVIÇOS"}></MiniHeader>
                    <div className={styles.container}>
                        <HeaderArticle header_text={"Como podemos ajudá-lo a se sentir melhor?"}></HeaderArticle>
                    </div>
                    <div className={styles.services_blocks}>
                        <ServicesBlock block_header={"Problemas digestivos"} info_text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."}></ServicesBlock>
                        <ServicesBlock block_header={"Saúde Hormonal"} info_text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."}></ServicesBlock>
                        <ServicesBlock block_header={"Bem-estar mental"} info_text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."}></ServicesBlock>

                        <ServicesBlock block_header={"Cuidados Pediátricos"} info_text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."}></ServicesBlock>
                        <ServicesBlock block_header={"Autoimune e Inflamação"} info_text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."}></ServicesBlock>
                        <ServicesBlock block_header={"Saúde do Coração"} info_text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."}></ServicesBlock>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;