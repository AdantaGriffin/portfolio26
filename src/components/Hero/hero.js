import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './hero.module.scss';

function Hero(){
    return(
        <>
            <section id="home" className={styles.hero} arial-lable="Hero Section">
                <nav arial-label="Page Navigation">
                    <ul className={styles.heroNav}>
                        <li><a className={ ({isActive}) => `nav-link ${isActive? 'nav-link-active': ''}`} href="#home">home</a></li>
                        <li><a className={ ({isActive}) => `nav-link ${isActive? 'nav-link-active': ''}`} href="#about">about</a></li>
                        <li><a className={ ({isActive}) => `nav-link ${isActive? 'nav-link-active': ''}`} href="#projects">projects</a></li>
                        <li><a className={ ({isActive}) => `nav-link ${isActive? 'nav-link-active': ''}`} href="#skills">skills</a></li>
                        <li><a className={ ({isActive}) => `nav-link ${isActive? 'nav-link-active': ''}`} href="#contact">contacts</a></li>
                    </ul>
                </nav>
                <article className={styles.heroContainer}>
                    <div className={styles.heroLeft}>
                        <h1 className={styles.subHeader}>Hi, I'm Adanta Griffin</h1>
                        <h1>FRONT END DEVELOPER</h1>
                    </div>
                    <div className={styles.heroRight}>
                        
                    </div>
                </article>
            </section>
        </>
    )
}

export default Hero