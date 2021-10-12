import React from 'react'
import { render, screen } from '@testing-library/react'
import { GatedSection } from '..'

test('displays proper text based on access', async () => {
  render(
    <GatedSection hasAccess={true} noAccessMessage='No access'>
      Content
    </GatedSection>
  )

  expect(screen.queryByText('Content')).toBeTruthy()
  expect(screen.queryByText('No access')).toBeFalsy()
})

test('displays proper text based on access', async () => {
  render(
    <GatedSection hasAccess={false} noAccessMessage='No access'>
      Content
    </GatedSection>
  )

  expect(screen.queryByText('Content')).toBeFalsy()
  expect(screen.queryByText('No access')).toBeTruthy()
})
