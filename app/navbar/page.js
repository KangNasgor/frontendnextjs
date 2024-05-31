import Image from 'next/image'
import styles from './page.module.css'
import React, { useState, useEffect } from 'react';
import Title from '../title/page';
import Link from "next/link";
import { motion } from "framer-motion";
import Signup from '../signup/page';

export default function Navbar() {
  return (
    <motion.div initial="hidden" animate="visible" variants={{
      hidden: {
        scale: .8,
        opacity: 0,
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          delay: .4
        }
      }
    }}>
      <div className={styles.navbar}>
        <div className="">
          <div className="">
            <ul className={styles.navbarUL}>
              <li>
                <Link href="/">
                  <p>About Me</p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p>Contacts</p>
                </Link>
              </li>
              <li>
                <Link href="/signup">
                  <p>SignUp</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}