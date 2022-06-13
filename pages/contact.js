import React from 'react'
import styles from '../styles/Contact.module.css'
import Circle from '../components/Circle'

const contact = () => {
  return (
    <div className={styles.container}>
        <Circle backgroundcolor='green' left="-40vh" top="-20vh"/>
        <Circle backgroundcolor='yellow' right="-30vh" bottom="-60vh"/>

        <h1 className={styles.title}>
            GET IN TOUCH
        </h1>
        <form className='styles.form'>
            <input className={styles.inputS} placeholder="Username"/>
            <input className={styles.inputS} placeholder="Phone"/>
            <input className={styles.inputL} placeholder="Email"/>
            <input className={styles.inputL} placeholder="Subject"/>
            <textarea className={styles.textArea}  placehlder="Message" rows={6}/>
            <button className={styles.button}> Submit </button>
        </form>

    </div>
  )
}

export default contact