import { useState, useEffect } from "react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Phone } from "lucide-react"

export function DisasterCard({ info }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [imageUrl, setImageUrl] = useState("")

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch(`https://api.unsplash.com/photos/random?query=${info.title}&client_id=Zi_Jvk1JhxhwiJ2EyFGjmJCvb5wa6fh0-KWvqNVNGQY`)
      const data = await response.json()
      setImageUrl(data.urls.small) // Use the appropriate size you need
    }

    fetchImage()
  }, [info.title])

  return (
    <Card
      className={`cursor-pointer transition-all  duration-500 ease-in-out transform-gpu ${
        isExpanded ? "col-span-full row-span-2" : "hover:scale-[1.02]"
      } h-fit`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <CardContent className="p-2 border-2 dark:bg-[#2d2d2d] rounded-3xl shadow-md cursor-auto " imageUrl={isExpanded ? imageUrl : ""} altText={info.title}>
        <div className="relative h-full ">
          <div className="absolute inset-0 bg-cover bg-center"/>
          <div className="absolute inset-0" />
          <div className="relative p-4  text-black/60 dark:text-white/60">
            <h2 className="text-2xl font-bold mb-2">{info.title}</h2>
            {isExpanded && (
              <div className="animate-fadeIn">
                <p className="mb-4 text-gray-600 dark:text-white/40">{info.description}</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Safety Tips</h3>
                    <ul className="list-disc list-inside space-y-1 ">
                      {info.safetyTips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Emergency Contacts</h3>
                    <div className="space-y-2 w-auto ">
                      {info.emergencyContacts.map((contact, index) => (
                        <Button
                          key={index}
                          className=" justify-start gap-4 mr-4 bg-blue-500 text-white"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.location.href = `tel:${contact.number}`
                          }}
                        >
                          <Phone className="h-4 w-4" />
                          <span>{contact.name}:</span>
                          <span className="font-mono">{contact.number}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

