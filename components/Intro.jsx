import React from 'react'
import Image from 'next/image'
import styles from '../styles/Intro.module.css'
import Circle from './Circle'

const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh"  bottom={0} right={0}/>
      
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>ODB AVOCAD0</span> DIGITAL PRODUCT AGENCY.
        </h1>
        <p className={styles.desc}> Create live segments and target the right people for messages based on their behaviors.</p>
        <button className={styles.button}>DISCOVER</button>
      </div>

      <div className={styles.card}>
        <Image src="/img/avocado.png"
          alt='avocado' width="100%"
          height="100%"
          layout='fill'
          objectFit='cover' />
      </div>
    </div>
  )
}

export default Intro