import React from 'react';
import styles from './hero.module.scss';

function Hero(){
    return(
        <>
            <section id="home" className={styles.hero}>
                <nav>
                    <ul className={styles.heroNav}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <article className={styles.heroContainer}>
                    <p className={styles.heroHeading}>
                        <h1>Hi. I'm Adanta</h1>
                        <h2>Frontend developer</h2>
                    </p>
                    <div className={styles.heroLinks}>
                        <a aria-label="View portfolio projects" href="#projects">Projects</a>
                        <a aria-label="Go to contacts" href="#contact">Contact Me</a>
                    </div>
                </article>
            </section>
        </>
    )
}

export default Hero