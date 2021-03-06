import { motion } from 'framer-motion'
import * as React from 'react'
import { DefaultButton } from '../default-button/default-button'

const variants = {
  active: {
    boxShadow: '0px 0px 50px #FF4EE3',
    outline: '2px solid #FF4EE3',
    backgroundColor: '#FF4EE32A',
    color: '#FFFFFF9A',
    transition: { duration: 1 }
  },
  inactive: {
    boxShadow: '0px 0px 0px #FF4EE3',
    outline: '2px solid #FF4EE3',
    backgroundColor: '#FF4EE32A',
    color: '#FFFFFF',
    transition: { duration: 1 }
  }
}

interface Props {
  children: any
  isActive: boolean
  onClick?: () => void
}

export const GlowingButton = ({
  children,
  isActive = false,
  onClick
}: Props) => {
  return (
    <DefaultButton onClick={onClick}>
      <motion.div
        animate={isActive ? 'active' : 'inactive'}
        variants={variants}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 'inherit',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {children}
      </motion.div>
    </DefaultButton>
  )
}
