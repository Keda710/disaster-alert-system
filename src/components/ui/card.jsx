export function Card({ children, className, ...props }) {
  return (
    <div 
      className={`rounded-3xl border bg-card text-card-foreground shadow-sm ${className}`} 
      {...props}
    >
      {children}
    </div>
  )
}

export function CardContent({ children, className, imageUrl, altText, ...props }) {
  return (
    <div className={`flex p-6 ${className}`} {...props}>
      <div className="flex-1">{children}</div>
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={altText} 
          className="w-80 h-80 border-2 border-black/40 m-10 object-cover rounded-3xl ml-4"
        />
      )}
    </div>
  )
} 