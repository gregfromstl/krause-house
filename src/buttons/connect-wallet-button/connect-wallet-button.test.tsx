import React from 'react'
import { render, screen } from '@testing-library/react'
import { ConnectWalletButton } from '..'

test('displays proper text', async () => {
  render(<ConnectWalletButton address='' />)

  expect(screen.getByText('Connect Wallet')).toBeTruthy()

  render(
    <ConnectWalletButton address='0x2C68489f711eEf3e30fC0Cc20Bdaa436A3b4cc4a' />
  )

  expect(screen.getByText('0x2C...cc4a')).toBeTruthy()
})
