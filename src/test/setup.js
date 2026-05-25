import '@testing-library/jest-dom/vitest'
import { createElement } from 'react'
import { vi } from 'vitest'

class IntersectionObserverMock {
  constructor(callback) {
    this.callback = callback
  }

  observe(target) {
    this.callback([{ isIntersecting: true, target }])
  }

  unobserve() {}

  disconnect() {}
}

globalThis.IntersectionObserver = IntersectionObserverMock
globalThis.scrollTo = () => {}
globalThis.requestIdleCallback = (callback) => callback()
globalThis.cancelIdleCallback = () => {}
globalThis.matchMedia = (query) => ({
  matches: query.includes('prefers-reduced-motion') || query.includes('pointer: coarse') ? false : false,
  media: query,
  onchange: null,
  addListener: () => {},
  removeListener: () => {},
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => false,
})

vi.mock('@splinetool/react-spline', () => ({
  default: ({ scene }) => createElement('div', { 'data-testid': 'mock-spline-scene', 'data-scene': scene }),
}))
