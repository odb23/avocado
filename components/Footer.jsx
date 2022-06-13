import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.carL}>
        <h1 className={styles.title}>0DB AV0CAD0 CREATIVES</h1>
        <h1 className={styles.linkTitle}>
          <a href="/contact" passhref="true" className={styles.link}>     
              <span className={styles.linkText}> WORK WITH US</span>
              <Image src="/img/link.png" alt="" width="40" height="40" />
          </a>
        </h1>

      </div>
      <div className={styles.carS}>
        <div className={styles.cardItem}>
          112 ADAM STREET NY <br /> USA
        </div>
        <div className={styles.cardItem}>
          MESSAGE@ODB.DEV<br /> +123457890
        </div>
      </div>
      <div className={styles.carS}>
        <div className={styles.cardItem}>
          FOLLOW US:<br /> _FB _IN _BE _TW _GH
        </div>
        <div className={styles.cardItem}>
          COPYRIGHT 2022 ODB CREATIVES<br /> ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  )
}

export default Footer