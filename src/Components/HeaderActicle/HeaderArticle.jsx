import styles from "./HeaderArticle.module.css";

function HeaderArticle({header_text}){
      
    return(
        <>
           <h1 className={styles.header_article}>{header_text}</h1>
        </>
    )
}

export default HeaderArticle;