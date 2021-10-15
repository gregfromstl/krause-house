import * as React from 'react'
import { useEffect } from 'react'
import { GlowingButton } from '../glowing-button/glowing-button'
import { useConnectWallet, useCurrentWalletConnected } from '../../hooks'
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
    <GlowingButton isActive={address === ''} onClick={connectWalletPressed}>
      {address
        ? '0x' + (address.slice(2, 4) + '...' + address.slice(-4)).toUpperCase()
        : 'Connect Wallet'}
    </GlowingButton>
  )
}
