import React from 'react';
import styles from './contact.module.scss';

function Contact(){
    return(
        <>
            <section className={styles.contact} id="contact">
                    <h2>Contact</h2>

                <article className={styles.contactContainer}>

                    <p>I'm currently open to frontend opportunities.If you'd like to connect, feel free to reach out.</p>

                    <address className={styles.addressLinks}>
                        <div className={styles.addressSection}>
                            <h3>Phone</h3>
                            <a href="tel:17188202506">718.820.2506</a>
                            <h3>Email</h3>
                            <a href="mailto:adantag@gmail.com">adantag@gmail.com</a>
                            <h3>GitHub</h3>
                            <a href="#">github</a>
                            <h3>LinkedIn</h3>
                            <a href="#">linkedin</a>
                        </div>
                    </address>
                </article>
            </section>
        </>
    )
};

export default Contact