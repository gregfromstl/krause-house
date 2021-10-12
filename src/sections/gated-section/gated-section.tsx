import React from 'react'

import styles from './gated-section.style.scss'

interface Props {
  hasAccess: boolean
  noAccessMessage?: string
  children: React.ReactNode | React.ReactNode[]
}

export const GatedSection = ({
  hasAccess,
  children,
  noAccessMessage = 'You do not have access to this section'
}: Props) => {
  return (
    <div className={styles.gatedSection}>
      {hasAccess ? children : noAccessMessage}
    </div>
  )
}
