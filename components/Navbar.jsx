import React from 'react'
import styles from "../styles/Navbar.module.css"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href="/">0DB AV0CAD0</Link>

        <ul className='styles.list'>
            <li className={styles.listItem}>
                <Link href="/products/design">DESIGN</Link>
            </li>
            <li className={styles.listItem}>
                <Link href="/products/development">DEEVLOPMENT</Link>
            </li>
            <li className={styles.listItem}>
                <Link href="/products/production">PRODUCTION</Link>
            </li>
            <li className={styles.listItem}>
                <Link href="/products/photography">PHOTOGRAPHY</Link>
            </li>
            <li className={styles.listItem}>
                <Link href="/products/contact">CONTACT</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar