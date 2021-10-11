declare let window: any

export const useConnectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts'
      })
      const obj = {
        status: '✔️ Connected to wallet.',
        address: addressArray[0]
      }
      return obj
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
