import './globals.css'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import AosProvider from '../components/AosProvider'

export const metadata = {
  title: 'EucTech Portfolio',
  description: 'Web Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" />
      </head>
      <body className="bg-[#282C33]">
        <AosProvider>
          <Navbar />
          {children}
          <Footer />
        </AosProvider>
      </body>
    </html>
  )
}
