
import styles from "./Features.module.css";

const Features = () => {

    // Define IconTitleText component inline
    // eslint-disable-next-line react/prop-types
    const IconTitleText = ({ icon, title, text }) => {
        return (
            <div className={styles.card}>
                <img
                    src={icon}
                    alt=""
                    aria-hidden="true"
                    className={styles.icon}
                />
                <p className={styles.subtitle}>{title}</p>
                <p className={styles.description}>{text}</p>
            </div>
        );
    };

    return (
        <section className={styles.features}>
            <h1 className={styles.title}>What we provide </h1>
            <div className={styles.wrapper}>
                <IconTitleText
                    icon={"images/icon-snappy-process.svg"}
                    title={"Detect Lateral Movements of attackers"}
                    text={
                        "Track progression of an attackers activites with a network after initial access has been gained."
                    }
                />

                <IconTitleText
                    icon={"images/icon-people-first.svg"}
                    title={"Detect Network Leaks"}
                    text={
                        "Detect information exposed to unauthorized people due to initial errors."
                    }
                />

                <IconTitleText
                    icon={"images/icon-affordable-prices.svg"}
                    title={"High scalability with minimum compute"}
                    text={
                        "Enable large scale deployements and provide consistent performance."
                    }
                />
                <IconTitleText
                    icon={"images/icon-affordable-prices.svg"}
                    title={"Detect Lateral speed of malware/ransomeware"}
                    text={
                        "Detect and mitigate the spread of malicious software."
                    }
                />
                <IconTitleText
                    icon={"images/icon-affordable-prices.svg"}
                    title={"Centrally managed and governed infrastructure"}
                    text={
                        "Maintain control,efficiency,security across IT organizations."
                    }
                />
                <IconTitleText
                    icon={"images/icon-affordable-prices.svg"}
                    title={"Platform Agonistic solution"}
                    text={
                        "Designed to work independently of any operating system or hardware platform."
                    }
                />
                <IconTitleText
                    icon={"images/icon-affordable-prices.svg"}
                    title={"Response SLA"}
                    text={
                        "Predefined agreement between organization and response incident team."
                    }
                />

            </div>
        </section>
    )
}

export default Features;

