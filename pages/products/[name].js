import React from 'react'
import { data } from '../../data'
import styles from '../../styles/Product.module.css'

const Product
    = () => {
        return (
            <div className={styles.data}>Product

            </div>
        )
    }

export const getStaticPaths = async () => {
    const products = await data
    const paths = products.map(
        product => {
            return {
                params: {
                    name: product.name
                }
            }
        }
    )

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (ctx) => {
    const name = ctx.params.name
    const product = data.filter(
        item => item.name === name
    )[0]

    return {
        props: {
            product
        },
    }
}

export default Product
