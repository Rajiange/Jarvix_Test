'use client'
import { ThemeContextProvider } from './Context/theme'
import { ThemeProvider } from "next-themes"
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
      <ThemeProvider attribute="class">
        <ThemeContextProvider>
          {children}
        </ThemeContextProvider>
        </ThemeProvider>

      </body>
    </html>
  )
}
