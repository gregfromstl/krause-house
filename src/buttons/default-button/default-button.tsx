import * as React from 'react'
import styles from './default-button.styles.scss'

interface Props {
  children: any
  style?: any
  onClick?: () => void
}

export const DefaultButton = ({ children, style, onClick }: Props) => {
  return (
    <div
      className={styles.defaultButton + ' ' + style}
      onClick={onClick}
      data-testid='DefaultButton'
    >
      {children}
    </div>
  )
}
