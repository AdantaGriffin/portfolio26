import React from 'react';
import styles from './hero.module.scss';

function Hero(){
    return(
        <>
            <div className={styles.hero}>
                <article className={styles.heroContainer}>
                    <section className={styles.heroHeading}>
                        <h1>Hi. I'm Adanta</h1>
                        <h2>Frontend developer</h2>
                    </section>
                    <section className={styles.heroLinks}>
                        <a aria-label="View portfolio projects" href="#projects">View Projects</a>
                        <a aria-label="Go to contacts" href="#contact">Contact Me</a>
                    </section>
                </article>
            </div>
        </>
    )
}

export default Hero