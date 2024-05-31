'use client'

import Image from 'next/image'
import styles from './page.module.css';
import React, { useState, useEffect, useRef, useCallback, useMemo} from 'react';
import Title from './title/page';
import Link from "next/link";
import Navbar from './navbar/page';
import Ctabutton from './ctabutton';
import { motion } from "framer-motion"
import { loadFull } from 'tsparticles';
import Particles from '@tsparticles/react';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function Home() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {};

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
            parallax: true,
          },
        },
      },
      particles: {
        color: {
          value: "#53f502",
        },
        links: {
          color: "#53f502",
          distance: 100,
          enable: true,
          opacity: 1,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 350,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );
  if (init) {
    return (
      <main className={styles.main}>
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
        <Navbar />
        <Title />
        <Ctabutton />
      </motion.div>
      <Particles options={options} particlesLoaded={particlesLoaded} id="particles"/>
    </main>
    );
  }
}