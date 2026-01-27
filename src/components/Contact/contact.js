import React from 'react';
import styles from './contact.module.scss';

function Contact(){
    return(
        <>
            <div className={styles.contact}>

                <p>I'm currently open to frontend opportunities.If you'd like to connect, feel free to reach out.</p>

                <p>email</p>
                <p>GitHub</p>
                <p>linked in</p>
            </div>
        </>
    )
};

export default Contact