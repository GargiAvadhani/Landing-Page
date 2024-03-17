import styles from "./Intro.module.css";

const Intro = () => {
    return (
        <div className={styles.intro}>
            <picture className={styles.intro_img}>
            <source 
                srcSet="images/netsensor.jpg//" 
                media="(min-width: 1024px)"/>
            <img 
                src="images/netsensor.jpg" 
                alt=""
                aria-hidden="true" />
            </picture>
            <div className={styles.intro_content}>
            <h1 className={styles.title}>Netsensor.</h1>
            <p className={styles.description}>
            Run your business hassle-free by tracking network vulnerabilities with precision.

                
            </p>
            <button className={styles.view_plans_btn}>view plans</button>
            </div>
        </div>
    )
}

export default Intro