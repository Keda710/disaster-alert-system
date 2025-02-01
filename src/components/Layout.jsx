import React from "react"
import Header from "./Header"
import Footer from "./Footer"

function Layout({ children }) {
  return (
    <div className="text-blue-800">
      <Header />
      <div className="min-h-screen">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout 