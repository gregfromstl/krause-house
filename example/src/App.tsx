import React from 'react'

import { ConnectWalletButton, GatedSection } from 'krause-house'
import 'krause-house/dist/index.css'

const App = () => {
  const [address, setAddress] = React.useState('')
  return (
    <div className='showcase'>
      <ConnectWalletButton
        address={address}
        setWalletAddress={setAddress}
      ></ConnectWalletButton>
      <GatedSection hasAccess={address !== ''}>Secret section</GatedSection>
    </div>
  )
}

export default App
