import React from 'react'
import styles from '../styles/Testimonial.module.css'
import Circle from './Circle'
import { users } from '../data'
import Image from 'next/image'

const Testimonial = () => {
    return (
        <div className={styles.container}>
            <Circle backgroundColor="darkblue" top="-70vh" left="0" right="0" />
            <h1 className={styles.title}>Testimonaials</h1>
            <div className={styles.wrapper}>
                {
                    users.map(user => (
                        <div key={user.id} className={styles.card}>
                            <Image className={styles.avatar} src={`/img/${user.logo}`} alt="" width="30" height="30" layout="" />
                            <p className={styles.comment}>
                                {user.comment}
                            </p>
                            <div className={styles.person}>
                                <Image src={`/img/${user.avatar}`} alt="" width="45" height="40" />
                                <div className={styles.info}>
                                    <span className={styles.username}>{user.name}</span>
                                    <span className={styles.jobTitle}>{user.title}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Testimonial