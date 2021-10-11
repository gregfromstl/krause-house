import React from 'react'

import { ConnectWalletButton } from 'krause-house'
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
    </div>
  )
}

export default App
