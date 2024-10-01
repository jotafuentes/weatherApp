// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'

test('app get current location', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  // Expect a location city when clicking on the location icon
  await page.click('#geoLocation')
  await page.waitForSelector('.text-3xl')
  const cityName = await page.textContent('.text-3xl')
  expect(cityName).toBeTruthy() // Check that the city name is not empty
})
