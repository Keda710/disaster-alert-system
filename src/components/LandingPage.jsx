import React, { useState, useEffect } from 'react'
import Lottie from 'lottie-react'
import alertsData from '../data/alertsData.json'
import cryptoAnimation from '/public/assets/Crypto.json'
import cryptoDarkAnimation from '/public/assets/Crypto_Dark.json'

const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDarkMode(mediaQuery.matches)

    const handleChange = (event) => {
      setIsDarkMode(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    // Cleanup listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return (
    <>
    <div className=" mx-4  px-4 sm:px-6 lg:px-8">
      <main>
        <div className="flex items-center justify-between gap-12 py-16 px-8 rounded-3xl shadow-md">
          <div className="flex-1 space-y-6">
            <h1 className="text-6xl font-bold leading-tight text-black dark:text-white">
              Fear not Vivek, we'll keep you informed of any issues nearby!
            </h1>
            <p className="text-2xl text-gray-600 dark:text-white/40">
              Stay safe and healthy being tuned with DisAlert
            </p>
          </div>
          <div className="flex-1 ml-24 ">
            <Lottie 
              animationData={isDarkMode ? cryptoDarkAnimation : cryptoAnimation}
              loop={true}
              className="w-96"
            />
          </div>
        </div>

        {/* Alerts Section */}
        <div className="space-y-6 py-6">
          {alertsData.alerts.map((alert) => {
            const severityColorMap = {
              red: "bg-red-500",
              orange: "bg-orange-500",
              yellow: "bg-yellow-500"
            };

            return (
              <div key={alert.id} className="bg-white dark:bg-[#2d2d2d] rounded-3xl border-2 shadow-md p-6">
                <div className="flex items-center mb-4">
                  <span className="mr-2">📍</span>
                  <span className="font-medium text-black dark:text-white">{alert.location}</span>
                  <span className={`ml-auto w-5 h-5 rounded-full ${severityColorMap[alert.severityColor]}`}></span>
                </div>
                <div className="text-gray-700 dark:text-white/40">
                  <p>
                    <strong>{alert.type}</strong> {alert.description}, for more help please see the{' '}
                    <a href="/help" className="text-blue-500 hover:underline">
                      help guide
                    </a>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
    </>
  )
}

export default LandingPage