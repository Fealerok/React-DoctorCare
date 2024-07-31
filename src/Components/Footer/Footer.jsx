import styles from "./Footer.module.css";

import instagram_icon from "/src/icons/insta.png";
import facebook_icon from "/src/icons/facebook.png";
import youtube_icon from "/src/icons/youtube.png";

import { useRef, useEffect } from "react";
function Footer({getHeaderRef}) {

    const headerRef = useRef(null);

    useEffect(() => {
        getHeaderRef(headerRef);
    }, []);
    return (
        <>
            <div className={styles.footer} ref={headerRef}>
                <div className={styles.footer_content}>
                    <div className={styles.left_info}>
                        <p className={styles.footer_logo}>Doctor<span>Care</span></p>
                        <span>©2022 - DoctorCare.</span>
                        <span>Todos os direitos reservados.</span>
                    </div>
                    <div className={styles.right_info}>
                        <img src={instagram_icon} alt="" />
                        <img src={facebook_icon} alt="" />
                        <img src={youtube_icon} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;