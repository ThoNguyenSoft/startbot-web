// src/core/views/wallet/ConnectWallet.tsx
import { ethers } from 'ethers'
import { useState } from 'react'

const ConnectWallet = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum)
        await window.ethereum.request({ method: 'eth_requestAccounts' })

        // Đợi nhận được signer từ provider
        const signer = await provider.getSigner()
        const address = await signer.getAddress() // Đợi lấy địa chỉ ví
        console.log({ signer })
        console.log({ address })
        setWalletAddress(address)
      } catch (error) {
        setErrorMessage('Failed to connect wallet')
      }
    } else {
      setErrorMessage('MetaMask is not installed')
    }
  }

  return (
    <div>
      <button onClick={connectWallet}>
        {walletAddress ? `Connected: ${walletAddress.slice(0, 9)}...` : 'Connect Wallet'}
      </button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  )
}

export default ConnectWallet
