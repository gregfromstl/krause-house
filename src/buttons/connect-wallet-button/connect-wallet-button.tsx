import * as React from 'react'
import { useEffect } from 'react'
import { DefaultButton } from '../default-button/default-button'
import { useConnectWallet, useCurrentWalletConnected } from '../../hooks'
import styles from './connect-wallet-button.styles.scss'
declare let window: any

interface Props {
  address: string
  setWalletStatus?: (status: string) => void
  setWalletAddress?: (walletAddress: string) => void
}

export const ConnectWalletButton = ({
  address,
  setWalletStatus = () => {},
  setWalletAddress = () => {}
}: Props) => {
  useEffect(() => {
    useCurrentWalletConnected().then(({ address, status }: any) => {
      setWalletAddress(address)
      setWalletStatus(status)
    })
    addWalletListener()
  }, [])

  const connectWalletPressed = async () => {
    const walletResponse = await useConnectWallet()
    setWalletAddress(walletResponse.address)
    setWalletStatus(walletResponse.status)
  }

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0])
          setWalletStatus('✔️ Connected to wallet.')
        } else {
          setWalletAddress('')
          setWalletStatus('🦊 Connect to Metamask to use this site.')
        }
      })
    } else {
      setWalletStatus('🦊 Please install MetaMask to use this site.')
    }
  }

  return (
    <DefaultButton
      style={styles.connectWalletButton}
      onClick={connectWalletPressed}
    >
      {address
        ? address.slice(0, 4) + '...' + address.slice(-4)
        : 'Connect Wallet'}
    </DefaultButton>
  )
}
