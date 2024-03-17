import styles from "./Footer.module.css"

const Footer = () => {

    const more = [
        {
            id: 1,
            title:"our company",
            links: [
                {id: 10, link: "Reliance industries"},
                {id: 11, link: "Reliance Foundation"},
                {id: 12, link: "Invester relations"},
                {id: 13, link: "careers"}
            ]
        },
        {
            id: 2,
            title:"Services",
            links: [
                {id: 20, link: "Security"},
                {id: 21, link: "Connectivity"},
                {id: 22, link: "JioCloud"},
                {id: 23, link: "Business Application"}
            ]
        },
        {
            id: 3,
            title:"Quick links",
            links: [
                {id: 30, link: "Contact  US"},
                {id: 31, link: "Jio attendance"},
                {id: 32, link: "Jio Meet"}
            ]
        },
        {
            id: 4,
            title:"Resources",
            links: [
                {id: 40, link: "Case study"},
                {id: 41, link: "service video"},
                {id: 42, link: "whitepaper"}
            ]
        },
    ]

    return (
        <footer className={styles.footer}>
            <div className={styles.head}>
                <img 
                    src="images/logo2 (2).png" 
                    alt="insure logo"
                    className={styles.logo} 
                />
                <div className={styles.wrapper}>
                    <SocialIcon name={"facebook"}/>
                    <SocialIcon name={"twitter"}/>
                    <SocialIcon name={"pinterest"}/>
                    <SocialIcon name={"instagram"}/>
                </div>
            </div>
            <hr />
            <div className={styles.more}>
                <Lists />
            </div>
        </footer>
    )

    // eslint-disable-next-line react/prop-types
    function SocialIcon({ name }) {
        return (
            <a href="#">
                <img 
                    src={"images/icon-" + name + ".svg"}
                    alt={name + " icon"}
                    className={styles.social}
                />
            </a>
        );
    }

    function Lists() {
        return (
            more.map((list) => {
                return (
                    <ul 
                        className={styles.more_list} 
                        key={list.id}
                    >
                        <li className={styles.title}>{list.title}</li>
                        {list.links.map((linkTxt) => {
                            return (
                                <li 
                                    key={linkTxt.id}
                                    className={styles.item}
                                >
                                    <a href="#" className={styles.redirect}>{linkTxt.link}</a>
                                </li>
                            )
                        })}
                    </ul>
                )
            })
        );
    }
}

export default Footer