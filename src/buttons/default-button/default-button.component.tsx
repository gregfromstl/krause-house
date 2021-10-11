import * as React from 'react'
import './default-button.styles.css'

interface Props {
  text: string
}

export const DefaultButton = ({ text }: Props) => {
  return <div>{text}</div>
}
