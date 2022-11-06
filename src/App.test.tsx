import React from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen } from './test/testUtils'
import App from './App'

describe('Simple working test', () => {
  it('the title is visible', () => {
    render(<App />)

    const welcomeText = screen.getByText(/Hello World/i)
    screen.debug(welcomeText)
    expect(screen.getByText(/Hello World/i)).toBeInTheDocument()
  })
})
