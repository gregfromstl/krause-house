import React from 'react'
import styles from './primary-logo.styles.scss'
import Krause from '../../assets/images/krause.png'
import LogoPolygon from '../../assets/images/logoPolygon.png'
import Glow from '../../assets/images/glow.png'

interface Props {
  flicker?: boolean
}
export function PrimaryLogo({ flicker = false }: Props) {
  const maybeFlicker = flicker
    ? styles.glow + ' ' + styles.animateFlicker
    : styles.glow
  return (
    <div className={styles.logo}>
      <div className={styles.text}>
        Krause
        <br />
        House
      </div>
      <img className={maybeFlicker} src={Glow} alt='' />
      <img className={styles.image} src={LogoPolygon} alt='' />
      <img className={styles.image} src={Krause} alt='Krause House' />
    </div>
  )
}
