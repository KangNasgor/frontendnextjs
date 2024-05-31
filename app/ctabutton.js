import styles from './page.module.css';
import { useState } from 'react';
import axios from 'axios';

export default function Ctabutton() {
    return (
        <div className={styles.ctabutton}>
            <p className={styles.paragraph}>This website is just for practicing my skills,</p>
            <a href="#" className={styles.paragraph2}>get to know me more</a>
        </div>
    );
}