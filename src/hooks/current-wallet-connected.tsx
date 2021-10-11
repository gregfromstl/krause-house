declare let window: any

export const useCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts'
      })
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: '✔️ Connected to wallet.'
        }
      } else {
        return {
          address: '',
          status: '🦊 Connect to Metamask to use this site.'
        }
      }
    } catch (err) {
      return {
        address: '',
        status: '🚨 ' + err.message
      }
    }
  } else {
    return {
      address: '',
      status: '🦊 Please install MetaMask to use this site.'
    }
  }
}
