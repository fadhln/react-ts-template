/* eslint-disable import/export */
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { ReactElement, JSXElementConstructor } from 'react'

const customRender = (
  ui: ReactElement<any, string | JSXElementConstructor<any>>,
  options = {}
): void => {
  render(ui, {
    wrapper: ({ children }) => children,
    ...options,
  })
}

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
export { customRender as render }
