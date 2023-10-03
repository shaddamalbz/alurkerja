import './globals.css'
import './prism.css'
import 'alurkerja-ui/dist/style.css'

import { Poppins } from 'next/font/google'

// Subsets are really important. CHECK BELOW FOR MORE INFO
const poppins = Poppins({
  weight: ['400', '500', '600', '700'], // if single weight, otherwise you use array like [400, 500, 700],
  style: 'normal', // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
