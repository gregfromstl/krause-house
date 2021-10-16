import React from 'react'
import styles from './primary-logo.styles.scss'
import Krause from '../../assets/images/krause.png'
import LogoPolygon from '../../assets/images/logoPolygon.png'
import Glow from '../../assets/images/glow.png'

export function PrimaryLogo() {
  return (
    <div className={styles.logo}>
      <div className={styles.text}>
        Krause
        <br />
        House
      </div>
      <img
        className={(styles.image, styles.animateFlicker)}
        src={Glow}
        alt=''
      />
      <img className={styles.image} src={LogoPolygon} alt='' />
      <img className={styles.image} src={Krause} alt='Krause House' />
    </div>
  )
}
