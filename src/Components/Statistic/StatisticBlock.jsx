import styles from "./StatisticBlock.module.css";

function StatisticBlock({number, info, bordered}) {
    return (
         <>
            <div className={`${styles.statistic_block} ${bordered ? styles.border : false}`}>
                <span className={styles.statistic_number}>+{number}</span>
                <span className={styles.statistic_info}>{info}</span>
            </div>
         </>
    )
}

export default StatisticBlock;