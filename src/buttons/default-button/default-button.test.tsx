import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { DefaultButton } from '..'

test('displays child text', async () => {
  render(<DefaultButton>Button Text</DefaultButton>)

  expect(screen.getByText('Button Text')).toBeTruthy()
})

test('calls onClick function', async () => {
  const mockOnClick = jest.fn()
  render(<DefaultButton onClick={mockOnClick}>Button Text</DefaultButton>)

  fireEvent.click(screen.getByTestId('DefaultButton'))
  expect(mockOnClick).toHaveBeenCalledTimes(1)
})
