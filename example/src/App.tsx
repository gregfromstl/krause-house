import React from 'react'

import { ConnectWalletButton, GatedSection } from 'krause-house'
import 'krause-house/dist/index.css'

const App = () => {
  const [address, setAddress] = React.useState('')
  const [status, setStatus] = React.useState('')
  return (
    <div>
      <ConnectWalletButton
        address={address}
        setWalletAddress={setAddress}
        setWalletStatus={setStatus}
      ></ConnectWalletButton>
      {status}
      <GatedSection hasAccess={false}>Content</GatedSection>
    </div>
  )
}

export default App
