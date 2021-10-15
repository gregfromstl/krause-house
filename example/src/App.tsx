import React from 'react'

import { ConnectWalletButton } from 'krause-house'
import 'krause-house/dist/index.css'

const App = () => {
  const [address, setAddress] = React.useState('')
  return (
    <div className='showcase'>
      <ConnectWalletButton
        address={address}
        setWalletAddress={setAddress}
      ></ConnectWalletButton>
    </div>
  )
}

export default App
