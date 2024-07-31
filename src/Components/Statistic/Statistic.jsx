import styles from "./Statistic.module.css"
import StatisticBlock from "./StatisticBlock";
function Statistic() {
    return (
        <>
            <div className={styles.statistic}>
                <StatisticBlock number={"3.500"} info="Pacientes atendidos" bordered={false}/>
                <StatisticBlock number={15} info="Especialistas disponíveis" bordered={true}/>
                <StatisticBlock number={10} info="Anos no mercado" bordered={false}/>
            </div>
        </>
    )
}

export default Statistic;