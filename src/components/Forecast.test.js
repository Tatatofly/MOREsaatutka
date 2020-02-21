import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import Forecast from './Forecast'
import exampleData from './exampleForecastTestData.json'

afterEach(cleanup)

test('Renders example content', () => {
  const component = render(
    <Forecast forecast={exampleData.list[0]} />
  )

  expect(component.container).toHaveTextContent('12:003°C8.04 m/s90 %0 mm')
})