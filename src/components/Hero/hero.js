import React from 'react';
import styles from './hero.module.scss';

function Hero(){
    return(
        <>
            <div className={styles.hero}>
                <div>headline</div>
                <div>subheading</div>
                <div>buttons</div>
            </div>
        </>
    )
}

export default Hero