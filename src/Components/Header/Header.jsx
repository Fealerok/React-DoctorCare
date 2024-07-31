import { useEffect, useState } from "react";
import styles from "./Header.module.css";

import HeaderMobile from "./HeaderMobile/HeaderMobile";
import HeaderDesktop from "./HeaderDesktop/HeaderDesktop";

function Header({windowW, windowY, getClickedButton}){

    const[isMobileHeader, setMobileHeader] = useState(true);
    const[isFixedHeader, setFixedHeader] = useState(false);

      
    useEffect(() => {
        {windowW < 1050 ? setMobileHeader(true) : setMobileHeader(false)}
        {windowY > 72 ? setFixedHeader(true) : setFixedHeader(false)}
    }, [windowW, windowY]);


    return(
        <>
            {isMobileHeader ? <HeaderMobile 
                                isFixedHeader={isFixedHeader} 
                                windowY={windowY}
                                getClickedButton={getClickedButton}>
                                </HeaderMobile> 
                                : 
                                <HeaderDesktop 
                                isFixedHeader={isFixedHeader} 
                                windowY={windowY} 
                                getClickedButton={getClickedButton}>
                                </HeaderDesktop>}
        </>
    )
}

export default Header;